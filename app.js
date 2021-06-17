const express = require('express');
const generateImage = require('./image-maker');

const app = express();
const port = process.env.PORT || 5001;

app.get(`/`, async function (req, res) {
    const title = req.query.title;
    const imgURL = req.query.imgURL;
    const date = req.query.date;
    const author = req.query.author;

    const image = await generateImage(title, imgURL, date, author);
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(image, 'binary');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
