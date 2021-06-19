const express = require('express');
const axios = require('axios').default;
const generateImage = require('./image-maker');

const app = express();
const port = process.env.PORT || 5001;

const db = {};

const addToDB = data => {
    const keys = [];
    (data.articles || []).forEach(
        ({ urlToImage, title, publishedAt, author }) => {
            keys.push(urlToImage);
            db[urlToImage] = {
                urlToImage,
                title,
                publishedAt: new Date(publishedAt),
                author,
            };
        }
    );
    return keys;
};

app.get(`/`, async (req, res) => {
    const title = req.query.title;
    const imgURL = req.query.imgURL;
    const date = req.query.date;
    const author = req.query.author;

    const image = await generateImage(title, imgURL, date, author);
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(image, 'binary');
});

app.get(`/generate`, async (req, res) => {
    const url =
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=1fe4c0ba59564ef7aafa8e3831d1ad19';
    try {
        const { data } = await axios.get(url);
        const x = addToDB(data);
        return res.json(x);
    } catch (error) {
        res.status(400);
        res.send(`couldn't generate news`);
    }
});

app.get(`/get-image`, async (req, res) => {
    const { imgURL } = req.query;
    if (!imgURL || !db[imgURL]) {
        res.status(400);
        return res.send(
            'Invalid image url or url expired; try regenerate using your news URL'
        );
    }

    const { urlToImage, title, publishedAt, author } = db[imgURL];
    const date = `${publishedAt.getDate()}-${publishedAt.getMonth()}-${publishedAt.getFullYear()}`;
    const image = await generateImage(title, urlToImage, date, author);

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(image, 'binary');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
