const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

const destsDir = path.join(__dirname, 'public', 'Locations');
const dirs = fs.readdirSync(destsDir);

dirs.forEach(d => {
    const stat = fs.statSync(path.join(destsDir, d));
    if (stat.isDirectory()) {
        const slug = d.toLowerCase();
        let files = fs.readdirSync(path.join(destsDir, d)).filter(f => f.match(/\.(png|jpe?g)$/i));
        if (files.length === 0) return;

        // Map strictly to public path format
        const imagePaths = files.map(f => `/Locations/${d}/${f}`);

        // Update image property
        // Find: slug: "slug", ... image: "..."
        const regexImage = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?image:\\s*["'])[^"']*?(["'])`, 'i');
        content = content.replace(regexImage, `$1${imagePaths[0]}$2`);

        // Update gallery property
        const galleryStr = `[\n            ${imagePaths.map(p => `"${p}"`).join(',\n            ')}\n        ]`;
        const regexGallery = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'i');
        content = content.replace(regexGallery, `$1${galleryStr}`);
    }
});

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Updated data.ts');
