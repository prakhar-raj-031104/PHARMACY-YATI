const Jimp = require('jimp');

async function main() {
    const img = await Jimp.read('processed/transparent/cledex_at_bottle.png');
    const w = img.getWidth();
    const h = img.getHeight();
    
    // We print a 40x40 ASCII art of the bottle shape
    console.log('Bottle Silhouette ASCII Art:');
    const scaleY = Math.round(h / 40);
    const scaleX = Math.round(w / 40);
    
    for (let y = 0; y < h; y += scaleY) {
        let line = '';
        for (let x = 0; x < w; x += scaleX) {
            const alpha = img.bitmap.data[(y * w + x) * 4 + 3];
            if (alpha > 50) {
                line += '#';
            } else {
                line += '.';
            }
        }
        console.log(line);
    }
}

main().catch(console.error);
