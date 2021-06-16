const nodeHtmlToImage = require('node-html-to-image');

function generateImage(title, imgURL, date, author, output) {
    nodeHtmlToImage({
        output: `./${output}.jpg`,
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
    }).then(() => console.log('The image was created successfully!'));
}

let resp = {
    status: 'ok',
    totalResults: 38,
    articles: [
        {
            source: { id: null, name: 'India.com' },
            author: 'India.com Sports Desk',
            title: 'LIVE IND-W vs ENG-W One-Off Test Live Cricket Score, Today Latest Updates: Rana Gets Rid of Beaumont, England - India.com',
            description:
                'See the latest India Women vs England Women Test Live Cricket Score, live cricket updates of one-off Test from Bristol here. Also check the live cricket blog of IND-W vs ENG-W from County Ground, Bristol here.',
            url: 'https://www.india.com/sports/live-cricket-score-india-women-vs-england-women-2021-one-off-test-live-updates-ind-w-vs-eng-w-live-streaming-cricket-match-online-ball-by-ball-commentary-sonyliv-sonyten-rana-wicket-beaumont-eng-2down-4744218/',
            urlToImage:
                'https://static.india.com/wp-content/uploads/2021/06/One-off-Test-Match.jpg',
            publishedAt: '2021-06-16T14:13:24Z',
            content: null,
        },
        {
            source: { id: null, name: 'NDTV News' },
            author: 'Jagmeet Singh',
            title: 'Windows 11 May Be Available as a Free Upgrade for Windows 7, Windows 8.1 Users - Gadgets 360',
            description:
                'Windows 11 may be available as a free upgrade to users on Windows 7 and Windows 8.1 — alongside the ones on Windows 10. Microsoft previously hosted a similar free upgrade programme for Windows 10.',
            url: 'https://gadgets.ndtv.com/laptops/news/windows-11-free-upgrade-7-8-1-launch-date-june-24-release-microsoft-2465441',
            urlToImage:
                'https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1623849610001.jpg',
            publishedAt: '2021-06-16T13:25:24Z',
            content:
                'Windows 11 could be made available as a free upgrade for not just Windows 10 users but also for those running Windows 7 and Windows 8.1. Some references about the enhanced upgrade support have emerge… [+1828 chars]',
        },
        {
            source: {
                id: 'the-times-of-india',
                name: 'The Times of India',
            },
            author: 'Monit Khanna',
            title: 'ESA Launching 100% Wooden Satellite In Space, For Advancing Science - India Times',
            description:
                "The European Space Agency is working on sending an all-wooden satellite into space to understand how wood withstands the harsh conditions of space.                         ESAAlso Read: Two Friends Will Send India's 1st Private Earth-Imaging Satellite On ISRO…",
            url: 'https://www.indiatimes.com/technology/news/esa-wooden-satellite-launch-542838.html',
            urlToImage:
                'https://im.indiatimes.in/content/2021/Jun/Facebook-Image-87_60c9dd83d0132.jpg',
            publishedAt: '2021-06-16T12:30:23Z',
            content:
                "The European Space Agency is working on sending an all-wooden satellite into space to understand how wood withstands the harsh conditions of space. \r\nESA\r\nAlso Read: Two Friends Will Send India's 1st… [+2401 chars]",
        },
        {
            source: { id: null, name: 'NDTV News' },
            author: null,
            title: 'France To Lift Outdoor Mask Mandate Tomorrow, Covid Curbs To End Sunday - NDTV',
            description:
                'France will on Thursday lift its requirement for people to wear masks outdoors, while an unpopular Covid curfew will be scrapped on June 20, Prime Minister Jean Castex said Wednesday.',
            url: 'https://www.ndtv.com/world-news/france-to-lift-mandatory-mask-rule-outdoors-covid-19-curfew-on-june-20-2465374',
            urlToImage:
                'https://c.ndtvimg.com/2020-08/0t0t7iao_france-coronavirus-reuters-650_625x300_04_August_20.jpg',
            publishedAt: '2021-06-16T12:06:44Z',
            content:
                'France will on Thursday lift its requirement for people to wear masks outdoors (File)\r\nParis: France on Wednesday said it was ending the obligation to wear masks outside and would bring forward the l… [+1950 chars]',
        },
        {
            source: { id: null, name: 'India TV News' },
            author: 'India TV Business Desk',
            title: 'Coca Cola loses $4 billion after Cristiano Ronaldo removes soft drink bottles at presser - India TV News',
            description:
                '​Little did Cristiano Ronaldo know that his gesture of removing a couple of coke bottles would cause a heavy loss to the company.',
            url: 'https://www.indiatvnews.com/business/news-coca-cola-cristiano-ronaldo-4-billion-loss-soft-drink-bottles-water-press-conference-video-712301',
            urlToImage:
                'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/06/download-1623845090.jpg',
            publishedAt: '2021-06-16T12:06:26Z',
            content:
                "Little did Cristiano Ronaldo know that his gesture of removing a couple of coke bottles would cause a heavy loss to the company. As unbelievable as it may sound, the star footballer's act of pushing … [+1210 chars]",
        },
        {
            source: { id: null, name: 'Moneycontrol' },
            author: null,
            title: 'Crude oil hit fresh high on higher demand prospect; Brent inches closer to $75 a barrel - Moneycontrol.com',
            description:
                'Crude oil has continued to set new highs indicating upward momentum but there is a disconnect with larger markets and price may succumb to profit taking if inventory report disappoints.',
            url: 'https://www.moneycontrol.com/news/business/commodities/crude-oil-hit-fresh-high-on-higher-demand-prospect-brent-inches-closer-to-75-a-barrel-7044251.html',
            urlToImage:
                'https://images.moneycontrol.com/static-mcnews/2021/02/crude-oil-770x433.jpg',
            publishedAt: '2021-06-16T12:05:45Z',
            content:
                'Crude oil futures hit a fresh high for 2021 and highest since October 10, 2018, on the prospect of higher demand boosted by economic recovery and tighter supply. The oil price pared earlier gains but… [+3375 chars]',
        },
        {
            source: {
                id: 'the-times-of-india',
                name: 'The Times of India',
            },
            author: 'AP',
            title: 'Face to face: Biden, Putin meet for long-anticipated summit - Times of India',
            description:
                "US News:  US President Joe Biden and Russia's Vladimir Putin have arrived on Wednesday at the lush lakeside Swiss mansion for their highly anticipated summit,",
            url: 'https://timesofindia.indiatimes.com/world/us/face-to-face-biden-putin-meet-for-long-anticipated-summit/articleshow/83572587.cms',
            urlToImage:
                'https://static.toiimg.com/thumb/msid-83572596,width-1070,height-580,imgsize-221825,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
            publishedAt: '2021-06-16T11:50:00Z',
            content:
                'Face to face: Biden, Putin meet for long-anticipated summit',
        },
        {
            source: {
                id: 'the-times-of-india',
                name: 'The Times of India',
            },
            author: 'TIMESOFINDIA.COM',
            title: "Government's net direct tax collections grows over 100% in 2021-22 - Times of India",
            description:
                "India Business News: The Centre's net direct tax collections for the financial year 2021-22 have more than doubled to Rs 1.85 lakh crore, an official statement showed on W",
            url: 'https://timesofindia.indiatimes.com/business/india-business/governments-net-direct-tax-collections-grows-over-100-in-2021-22/articleshow/83572607.cms',
            urlToImage:
                'https://static.toiimg.com/thumb/msid-83572569,width-1070,height-580,imgsize-54625,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
            publishedAt: '2021-06-16T11:50:00Z',
            content:
                "Government's net direct tax collections grows over 100% in 2021-22",
        },
        {
            source: { id: 'google-news', name: 'Google News' },
            author: null,
            title: "Study: Orally administered drug 'TEMPOL' can inhibit COVID-19's replication | SARS-CoV-2 | WION News - WION",
            description: null,
            url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RGtiRVZ3UVgzUEnSAQA?oc=5',
            urlToImage: null,
            publishedAt: '2021-06-16T11:41:31Z',
            content: null,
        },
        {
            source: { id: null, name: 'BOOM' },
            author: 'AFP',
            title: 'NASA Has Not Selected US Teen Alyssa Carson For One-Way Mission To Mars - BOOM',
            description:
                'Alyssa Carson is not yet a qualified astronaut, and the technology to facilitate a human mission to...',
            url: 'https://www.boomlive.in/world/nasa-has-not-selected-us-teen-alyssa-carson-for-one-way-mission-to-mars-13554',
            urlToImage:
                'https://www.boomlive.in/h-upload/2021/06/16/950941-alyssa-carson-mars-mission-011.jpg',
            publishedAt: '2021-06-16T11:30:32Z',
            content:
                'Facebook posts shared thousands of times claim a 20-year-old American space enthusiast has been selected for a one-way voyage to become "the first living being to land on Mars". The claim is false: a… [+3014 chars]',
        },
        {
            source: { id: null, name: 'NDTV News' },
            author: null,
            title: '2 COVID-19 Vaccines For Young Children Show Promise In Early Trials: Study - NDTV',
            description:
                'The Moderna COVID-19 vaccine and an experimental protein-based preventive proved to be safe and showed good antibody response against SARS-CoV-2 in a trial on baby rhesus macaques, scientists say.',
            url: 'https://www.ndtv.com/science/2-covid-19-vaccines-for-young-children-show-promise-in-early-trials-study-2465324',
            urlToImage:
                'https://c.ndtvimg.com/2021-06/vgdaudqs_vaccine-generic-reuters_625x300_01_June_21.jpg',
            publishedAt: '2021-06-16T11:23:31Z',
            content:
                'Covid vaccine trials are in early stages to see how safe they are for use on children (Representational)\r\nWashington: The Moderna COVID-19 vaccine and an experimental protein-based preventive proved … [+3063 chars]',
        },
        {
            source: { id: null, name: 'The Indian Express' },
            author: 'Harikishan Sharma',
            title: 'Explained: What is gold hallmarking and which are the districts where it has been made mandatory now? - The Indian Express',
            description:
                'The government, through a notification issued on June 14, 2018, notified two categories—gold jewellery and gold artefacts; and silver jewellery and silver artefacts—under the purview of hallmarking.',
            url: 'https://indianexpress.com/article/explained/what-is-gold-hallmarking-list-of-districts-where-it-is-mandatory-7361818/',
            urlToImage: 'https://images.indianexpress.com/2021/06/gold22.jpg',
            publishedAt: '2021-06-16T10:59:10Z',
            content:
                'The government on Tuesday announced the phased implementation of mandatory hallmarking of gold jewellery with effect from June 16. In the first phase, gold hallmarking will be available in only in 25… [+7724 chars]',
        },
        {
            source: { id: null, name: 'NDTV News' },
            author: 'Neelav Chakravarti',
            title: 'UEFA Euro 2020: After Cristiano Ronaldo, Paul Pogba Removes Beer Bottle During Press Conference. Wat.. - NDTVSports.com',
            description:
                "UEFA Euro 2020: After France's 1-0 win over Germany, Paul Pogba, who is a Muslim, removed a beer bottle placed in front of him during the post-match press conference.",
            url: 'https://sports.ndtv.com/euro-2020/uefa-euro-2020-france-vs-germany-after-cristiano-ronaldo-paul-pogba-removes-bottle-of-beer-during-press-conference-watch-2465295',
            urlToImage:
                'https://c.ndtvimg.com/2021-06/ovl5arto_pogba-twitter_625x300_16_June_21.jpg',
            publishedAt: '2021-06-16T10:58:05Z',
            content:
                "France football star Paul Pogba on Wednesday removed a beer bottle placed in front of him during the post-match press conference after France's 1-0 UEFA Euro 2020 win against Germany at the Allianz A… [+1548 chars]",
        },
        {
            source: { id: null, name: 'The Indian Express' },
            author: 'Tech Desk',
            title: 'Apple Music Lossless and Spatial Audio support coming soon to India - The Indian Express',
            description:
                'Apple in May said it would release “lossless," well as versions of thousands of the songs in “Spatial Audio."',
            url: 'https://indianexpress.com/article/technology/tech-news-technology/apple-music-lossless-and-spatial-audio-support-will-come-to-india-soon-7361755/',
            urlToImage: 'https://images.indianexpress.com/2021/06/Apple-FB.jpg',
            publishedAt: '2021-06-16T10:12:54Z',
            content:
                'Apple has confirmed that Apple Music Lossless and Spatial Audio support will come to India soon. After a few users reached out to Apple on Twitter on the unavailability of lossless audio streaming an… [+1892 chars]',
        },
        {
            source: {
                id: 'the-times-of-india',
                name: 'The Times of India',
            },
            author: 'TIMESOFINDIA.COM',
            title: "Would've happily made uncle leader of party in Parliament: Chirag Paswan - Times of India",
            description:
                'India News: Lok Jan Shakti (LJP) leader Chirag Paswan on Wednesday attacked his uncle Pashupati Paras and other MPs for trying to break the party. He further said',
            url: 'https://timesofindia.indiatimes.com/india/wouldve-happily-made-uncle-leader-of-party-in-parliament-chirag-paswan/articleshow/83569930.cms',
            urlToImage:
                'https://static.toiimg.com/thumb/msid-83570283,width-1070,height-580,imgsize-122385,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
            publishedAt: '2021-06-16T10:09:00Z',
            content:
                "Would've happily made uncle leader of party in Parliament: Chirag Paswan\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Would've happily made uncle leader of party in Parliament: Chirag Paswan</li></ul>",
        },
        {
            source: { id: null, name: 'Theswaddle.com' },
            author: 'Aditi Murti',
            title: "Dating Apps, Marriage Classifieds Now Allow Us To 'Flaunt' Our Vaccinated Status - The Swaddle",
            description:
                'While such initiatives can help dispel vaccine hesitancy, they also become a way to gatekeep love and marriage.',
            url: 'https://theswaddle.com/dating-apps-marriage-classifieds-now-allow-us-to-flaunt-our-vaccinated-status/',
            urlToImage:
                'https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2021/06/VB1.jpg',
            publishedAt: '2021-06-16T09:39:23Z',
            content:
                'People and corporations are trying to combat vaccine hesitancy by offering love as a bribe. New features incorporated into Tinder and OkCupid allow users to display their vaccination status and push … [+1729 chars]',
        },
        {
            source: { id: null, name: 'GSMArena.com' },
            author: 'Peter',
            title: 'The Samsung Galaxy S21 FE will support 25W fast charging, 3C certification reveals - GSMArena.com news - GSMArena.com',
            description:
                'The current S20 FE does as well. Whether or not the new model will come with a charger in the retail package is unclear.',
            url: 'https://www.gsmarena.com/the_samsung_galaxy_s21_fe_will_support_25w_fast_charging_3c_certification_reveals-news-49613.php',
            urlToImage:
                'https://fdn.gsmarena.com/imgroot/news/21/06/samsung-galaxy-s21-fe-25w-charger/-476x249w4/gsmarena_0000.jpg',
            publishedAt: '2021-06-16T09:22:02Z',
            content:
                'The launch of the Samsung Galaxy S21 FE may or may not be delayed, but the certification process is going forward Chinas 3C approved the use of the Samsung EP-TA800 charger for the SM-G9900, the loca… [+1022 chars]',
        },
        {
            source: { id: null, name: 'Moneycontrol' },
            author: null,
            title: 'Twitter deliberately chose path of non-compliance with IT rules: Ravi Shankar Prasad - Moneycontrol',
            description:
                'Social media companies were given three months (till May 25) to comply with the new Information Technology (Intermediary guidelines and Digital Media Ethics Code) Rules, 2021.',
            url: 'https://www.moneycontrol.com/news/india/twitter-deliberately-chose-path-of-non-compliance-with-it-rules-ravi-shankar-prasad-7042611.html',
            urlToImage:
                'https://images.moneycontrol.com/static-mcnews/2019/02/Ravi-Shankar-Prasad-770x433.jpg',
            publishedAt: '2021-06-16T08:59:23Z',
            content:
                'Union Minister Ravi Shankar Prasad on June 16 lashed out at Twitter and said the social media platform failed to comply with India\'s new IT rules.\r\nThe minister said Twitter has "deliberately chosen … [+1563 chars]',
        },
        {
            source: { id: null, name: 'The Indian Express' },
            author: 'Express Web Desk',
            title: 'No newborn calf serum in Covaxin: Health Ministry, Bharat Biotech - The Indian Express',
            description:
                "After Congress' Gaurav Pandhi shared an RTI response on Twitter, Bharat Biotech and the Health Ministry clarified that the final product of Covaxin does not contain newborn calf serum.",
            url: 'https://indianexpress.com/article/india/no-newborn-calf-serum-in-covaxin-health-ministry-bharat-biotech-7361648/',
            urlToImage:
                'https://images.indianexpress.com/2021/06/covaxin-1-1.jpg',
            publishedAt: '2021-06-16T08:58:59Z',
            content:
                'The Ministry of Health and Family Welfare on Wednesday clarified that the Bharat Biotech’s Covaxin does not contain newborn calf serum. The manufacturing company also stated that while the serum is u… [+2508 chars]',
        },
        {
            source: { id: null, name: 'PharmiWeb.com' },
            author: null,
            title: '21 and 22 year olds to be offered COVID-19 jab from today - PharmiWeb.com',
            description:
                'Around one million people aged 21 and 22 will begin to be called forward this morning to get the coronavirus vaccine, as the NHS COVID Vaccination Programme enters the final phase of the first dose roll-out.As the NHS works through the final cohorts, people a…',
            url: 'https://www.pharmiweb.com/press-release/2021-06-16/21-and-22-year-olds-to-be-offered-covid-19-jab-from-today',
            urlToImage:
                'https://cdn.pharmiweb.com/media/1024/1200x448-pwjobs.png',
            publishedAt: '2021-06-16T08:43:32Z',
            content:
                'Around one million people aged 21 and 22 will begin to be called forward this morning to get the coronavirus vaccine, as the NHS COVID Vaccination Programme enters the final phase of the first dose r… [+2667 chars]',
        },
    ],
};

resp.articles.forEach((art, i) => {
    generateImage(
        art.title,
        art.urlToImage,
        art.publishedAt,
        art.author,
        i + ''
    );
});
