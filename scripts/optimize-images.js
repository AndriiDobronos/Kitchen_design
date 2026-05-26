const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../src/static/image');
const OUTPUT_DIR = path.join(__dirname, '../src/static/image-webp');

// Max dimensions per category (px). Images won't be enlarged, only reduced.
const SIZES = {
    interior: { width: 1920, height: 1080, quality: 85 },
    decor:    { width: 600,  height: 600,  quality: 85 },
    pattern:  { width: 600,  height: 600,  quality: 85 },
    ui:       { width: 400,  height: 400,  quality: 85 },
};

function getCategory(name) {
    if (name.startsWith('interior')) return 'interior';
    if (name.startsWith('decor') || name.startsWith('dsp') || name.startsWith('rzaviy')) return 'decor';
    if (name.startsWith('pattern') || name === 'bricks' || name === 'hexagon' || name === 'hexagon1'
        || name === 'plus' || name === 'whiteBricks') return 'pattern';
    return 'ui';
}

async function optimizeImage(filename) {
    const ext = path.extname(filename).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

    const baseName = path.basename(filename, ext);
    const category = getCategory(baseName);
    const { width, height, quality } = SIZES[category];

    const inputPath = path.join(INPUT_DIR, filename);
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

    const inputStat = fs.statSync(inputPath);

    const tempPath = outputPath + '.tmp';
    await sharp(inputPath)
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toFile(tempPath);

    const tempStat = fs.statSync(tempPath);

    // Keep WebP only if it's smaller; otherwise copy original as-is
    if (tempStat.size < inputStat.size) {
        fs.renameSync(tempPath, outputPath);
    } else {
        fs.unlinkSync(tempPath);
        const keepPath = path.join(OUTPUT_DIR, filename);
        fs.copyFileSync(inputPath, keepPath);
        const saved = 0;
        return {
            file: filename,
            before: Math.round(inputStat.size / 1024),
            after: Math.round(inputStat.size / 1024),
            saved: `0% (kept original ${ext.slice(1).toUpperCase()})`,
        };
    }

    const outputStat = fs.statSync(outputPath);
    const saved = Math.round((1 - outputStat.size / inputStat.size) * 100);

    return {
        file: filename,
        before: Math.round(inputStat.size / 1024),
        after: Math.round(outputStat.size / 1024),
        saved: `${saved}%`,
    };
}

async function run() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    console.log(`Processing ${files.length} images...\n`);

    const results = [];
    for (const file of files) {
        const result = await optimizeImage(file);
        if (result) {
            results.push(result);
            console.log(`${result.file.padEnd(30)} ${String(result.before + ' KB').padEnd(10)} → ${String(result.after + ' KB').padEnd(10)} (−${result.saved})`);
        }
    }

    const totalBefore = results.reduce((s, r) => s + r.before, 0);
    const totalAfter  = results.reduce((s, r) => s + r.after,  0);
    const totalSaved  = Math.round((1 - totalAfter / totalBefore) * 100);

    console.log('\n' + '─'.repeat(60));
    console.log(`Total before: ${Math.round(totalBefore / 1024)} MB`);
    console.log(`Total after:  ${Math.round(totalAfter  / 1024)} MB`);
    console.log(`Total saved:  ${totalSaved}%`);
    console.log(`\nOptimized files saved to: ${OUTPUT_DIR}`);
}

run().catch(err => { console.error(err); process.exit(1); });
