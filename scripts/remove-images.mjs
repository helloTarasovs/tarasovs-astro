// Removes references to images that no longer exist.
// Body: drops <img> (and a wrapping <a> or <figure> left empty).
// Frontmatter: drops the whole `cover:` block and `ogImage:` line if they point to the image.
// Usage: node scripts/remove-images.mjs /wp-content/uploads/2026/06/a.webp /wp-content/uploads/2026/06/b.webp
import fs from 'node:fs';
import path from 'node:path';

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.log('Usage: node scripts/remove-images.mjs <image-path> [...]');
  process.exit(1);
}
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const dirs = ['src/content/posts', 'src/content/projects'].filter((d) => fs.existsSync(d));

for (const dir of dirs) {
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.md'))) {
    const file = path.join(dir, f);
    const src = fs.readFileSync(file, 'utf8');
    const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (m === null) continue;
    let [, fm, body] = m;
    const changes = [];

    for (const img of targets) {
      const e = esc(img);
      // frontmatter: cover block (key line + indented lines) and ogImage line
      const coverRe = new RegExp(`^cover:\\n(?:  .*\\n?)*`, 'm');
      const cover = fm.match(coverRe);
      if (cover && cover[0].includes(img)) {
        fm = fm.replace(coverRe, '');
        changes.push(`cover -> ${img}`);
      }
      const ogRe = new RegExp(`^\\s*ogImage: "${e}"\\n?`, 'm');
      if (ogRe.test(fm)) {
        fm = fm.replace(ogRe, '');
        changes.push(`ogImage -> ${img}`);
      }
      // body
      const before = body;
      body = body
        .replace(new RegExp(`<a[^>]*>\\s*<img[^>]*src="${e}"[^>]*>\\s*</a>`, 'g'), '')
        .replace(new RegExp(`<img[^>]*src="${e}"[^>]*>`, 'g'), '')
        .replace(/<figure[^>]*>\s*(<figcaption[\s\S]*?<\/figcaption>)?\s*<\/figure>/g, '');
      if (body !== before) changes.push(`body <img> -> ${img}`);
    }

    // drop an `seo:` block that became empty
    fm = fm.replace(/^seo:\n(?=\S|$)/m, '');

    if (changes.length) {
      fs.writeFileSync(file, `---\n${fm.replace(/\n+$/, '')}\n---\n${body}`);
      console.log(`${file}\n  ${changes.join('\n  ')}`);
    }
  }
}
console.log('done. Re-run: node scripts/check-images.mjs');
