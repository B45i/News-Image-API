const express = require('express');
const generateImage = require('./image-maker');

const app = express();
const port = process.env.PORT || 5000;

app.get(`/`, async function (req, res) {
    const image = await generateImage(
        'Windows 11 May Be Available as a Free Upgrade for Windows 7, Windows 8.1 Users - Gadgets 360',
        'https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1623849610001.jpg',
        '16-06-2021',
        'Amal Shajan'
    );
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
