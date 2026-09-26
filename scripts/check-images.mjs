// Finds every /wp-content/uploads/... path used in the project and checks the file exists in public/
// Run: node scripts/check-images.mjs
import fs from 'node:fs';
import path from 'node:path';

const roots = ['src/content', 'src/pages', 'src/components', 'src/layouts'].filter((d) => fs.existsSync(d));
const re = /\/wp-content\/uploads\/[^\s"'()<>]+?\.(?:jpe?g|png|webp|gif|svg|avif)/gi;
const refs = new Map(); // image path -> Set(files that use it)

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(md|mdx|json|astro|html|ts|js)$/.test(e.name)) {
      for (const m of fs.readFileSync(p, 'utf8').matchAll(re)) {
        const img = decodeURI(m[0]);
        if (refs.has(img) === false) refs.set(img, new Set());
        refs.get(img).add(p);
      }
    }
  }
}
roots.forEach(walk);

const missing = [...refs].filter(([img]) => fs.existsSync(path.join('public', img)) === false);
for (const [img, files] of missing) console.log(`MISSING ${img}\n   used in: ${[...files].join(', ')}`);
console.log(`\n${refs.size} images referenced, ${refs.size - missing.length} found, ${missing.length} missing`);
process.exit(missing.length ? 1 : 0);
