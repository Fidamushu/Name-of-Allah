import fs from 'fs';
import https from 'https';
import path from 'path';

import names from './src/data/names.js';

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
    const audioDir = path.resolve('./public/audio');
    if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
    }

    console.log('Starting audio downloads...');
    for (const name of names) {
        const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encodeURIComponent(name.arabic)}`;
        const dest = path.join(audioDir, `${name.id}.mp3`);

        if (!fs.existsSync(dest)) {
            try {
                await downloadFile(url, dest);
                console.log(`Downloaded: ${name.id}.mp3 - ${name.arabic}`);
                await delay(500); // Prevent rate limiting
            } catch (err) {
                console.error(`Failed to download ${name.id}.mp3:`, err);
            }
        } else {
            console.log(`Skipped: ${name.id}.mp3 already exists`);
        }
    }
    console.log('All downloads completed!');
};

main();
