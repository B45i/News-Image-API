const nodeHtmlToImage = require('node-html-to-image');

async function generateImage(title, imgURL, date, author) {
    return await nodeHtmlToImage({
        html: `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>News</title>
            <style>
                body {
                    width: 320px;
                    height: 240px;
                }
    
                .container {
                    width: 320px;
                    height: 240px;
                    position: relative;
                }
    
                .gradient {
                    position: absolute;
                    width: 320px;
                    height: 240px;
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 9)
                    );
                    opacity: 0.99;
                    z-index: 2;
                }
    
                .banner {
                    background: url(${imgURL});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
    
                    width: 320px;
                    height: 240px;
                    position: absolute;
                    overflow: hidden;
                    z-index: 1;
                }
    
                .heading {
                    z-index: 999;
                    position: absolute;
                    bottom: 0;
                    padding: 10px;
                    font-size: 1.1rem;
                }
    
                .author,
                .date {
                    z-index: 999;
                    position: absolute;
                    padding: 5px;
                    font-size: 0.7rem;
                    background-color: #ffdd40;
                    color: black;
                }
    
                .author {
                    right: 4px;
                    top: 3px;
                }
    
                .date {
                    left: 4px;
                    top: 3px;
                }
    
                * {
                    box-sizing: border-box;
                    color: #fff;
                    font-family: sans-serif;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div>
                    <div class="gradient"></div>
                    <div class="banner"></div>
                </div>
    
                <div class="heading">
                    ${title}
                </div>
    
                <div class="author">${author}</div>
    
                <div class="date">${date}</div>
            </div>
        </body>
    </html>`,
    });
}

module.exports = generateImage;
