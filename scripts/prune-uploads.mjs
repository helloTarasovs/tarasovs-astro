// Keeps only the uploads the site actually references; MOVES the rest to an archive folder outside the project.
// Nothing is deleted.
//
// Dry run (default, shows what would move):   node scripts/prune-uploads.mjs
// Actually move:                              node scripts/prune-uploads.mjs --apply
// Archive location (default ../tarasovs-uploads-archive):  ARCHIVE=/path node scripts/prune-uploads.mjs --apply
//
// References are collected from:
//   src/**                              (content, pages, components, layouts)
//   _wp-export/pages/*.html             (old WP pages you are still rebuilding)
//   _wp-export/images-referenced.txt    (everything the export saw)
//   public/**/*.{html,css,txt,xml,json} (static files in public)
import fs from 'node:fs';
import path from 'node:path';

const APPLY = process.argv.includes('--apply');
const UPLOADS = 'public/wp-content/uploads';
const ARCHIVE = process.env.ARCHIVE || path.resolve('..', 'tarasovs-uploads-archive');
const re = /\/wp-content\/uploads\/[^\s"'()<>\\]+?\.[a-z0-9]{2,5}(?=[\s"'()<>\\?#,]|$)/gi;

const refs = new Set();
const addFrom = (text) => { for (const m of text.matchAll(re)) refs.add(decodeURI(m[0])); };

function walk(dir, filter, fn) {
  if (fs.existsSync(dir) === false) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (p === UPLOADS || e.name === 'node_modules') continue;
      walk(p, filter, fn);
    } else if (filter(e.name)) fn(p);
  }
}

walk('src', (n) => /\.(md|mdx|json|astro|html|ts|js|css)$/.test(n), (p) => addFrom(fs.readFileSync(p, 'utf8')));
walk('_wp-export/pages', (n) => n.endsWith('.html'), (p) => addFrom(fs.readFileSync(p, 'utf8')));
walk('public', (n) => /\.(html|css|txt|xml|json)$/.test(n) || n === '_redirects', (p) => addFrom(fs.readFileSync(p, 'utf8')));
if (fs.existsSync('_wp-export/images-referenced.txt')) {
  fs.readFileSync('_wp-export/images-referenced.txt', 'utf8').split('\n').map((s) => s.trim()).filter(Boolean).forEach((s) => refs.add(s));
}

const keep = [], move = [];
let moveBytes = 0, keepBytes = 0;
walk(UPLOADS, () => true, (p) => {
  const url = '/' + p.replace(/^public\//, '').split(path.sep).join('/');
  const size = fs.statSync(p).size;
  if (refs.has(url)) { keep.push(url); keepBytes += size; }
  else { move.push(p); moveBytes += size; }
});

const mb = (b) => (b / 1024 / 1024).toFixed(1) + ' MB';
console.log(`referenced paths found: ${refs.size}`);
console.log(`keep: ${keep.length} files, ${mb(keepBytes)}`);
console.log(`move: ${move.length} files, ${mb(moveBytes)}  ->  ${ARCHIVE}`);

const missing = [...refs].filter((u) => fs.existsSync(path.join('public', u)) === false);
if (missing.length) console.log(`\nnote: ${missing.length} referenced files are not in public/ (run check-images.mjs)`);

if (APPLY === false) {
  console.log('\nDry run. Nothing moved. Re-run with --apply to move files.');
  process.exit(0);
}

for (const p of move) {
  const dest = path.join(ARCHIVE, path.relative('public', p));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.renameSync(p, dest);
}
// remove now-empty folders inside uploads
(function prune(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) if (e.isDirectory()) prune(path.join(dir, e.name));
  if (dir !== UPLOADS && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
})(UPLOADS);
console.log(`\nMoved ${move.length} files to ${ARCHIVE}. Run: node scripts/check-images.mjs`);
