const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

async function main() {
    const dir = 'processed/transparent';
    const files = fs.readdirSync(dir).filter(f => f.startsWith('WhatsApp'));
    
    // We take a patch from cledex_at_bottle_backup.png (label middle)
    const bottle = await Jimp.read('processed/transparent/cledex_at_bottle_backup.png');
    const patchX = 450;
    const patchY = 500;
    const patchW = 30;
    const patchH = 30;
    const patch = bottle.clone().crop(patchX, patchY, patchW, patchH);
    
    console.log(`Checking ${files.length} files...`);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        try {
            const img = await Jimp.read(filePath);
            const w = img.getWidth();
            const h = img.getHeight();
            
            // We search at a scale of 1.4 which is approx 1431/1024
            const s = 1.4;
            const scaledPatch = patch.clone().scale(s);
            const pw = scaledPatch.getWidth();
            const ph = scaledPatch.getHeight();
            
            let bestScore = Infinity;
            
            // Fast scan in the image
            for (let y = 100; y < h - ph; y += 30) {
                for (let x = 100; x < w - pw; x += 30) {
                    let diffSum = 0;
                    let count = 0;
                    for (let py = 0; py < ph; py += 5) {
                        for (let px = 0; px < pw; px += 5) {
                            const cTemp = scaledPatch.getPixelColor(px, py);
                            const cOrig = img.getPixelColor(x + px, y + py);
                            const r1 = (cTemp >> 24) & 0xff;
                            const g1 = (cTemp >> 16) & 0xff;
                            const b1 = (cTemp >> 8) & 0xff;
                            const r2 = (cOrig >> 24) & 0xff;
                            const g2 = (cOrig >> 16) & 0xff;
                            const b2 = (cOrig >> 8) & 0xff;
                            diffSum += Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2);
                            count++;
                        }
                    }
                    const score = diffSum / count;
                    if (score < bestScore) {
                        bestScore = score;
                    }
                }
            }
            console.log(`File: ${file}, Best Score: ${bestScore}`);
        } catch (e) {
            // Ignore errors
        }
    }
}

main().catch(console.error);
