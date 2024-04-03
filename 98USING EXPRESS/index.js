const express = require('express');
const path = require('path');
const pdf = require("pdf-creator-node");
const fs = require("fs");
const app = express();
const port = 3000;


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    const html = fs.readFileSync("./public/98server.html", "utf-8");
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };
    var users = [
        {
            name: "Ansh",
            age: "26",
        },
        {
            name: "Navjot",
            age: "26",
        },
        {
            name: "Vitthal",
            age: "26",
        },
    ];
    var document = {
        html: html,
        data: {
            users: users,
        },
        path: "./output.pdf",
        type: "",
    };
    pdf
        .create(document, options)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });
    res.sendFile(path.join(__dirname, 'public', '98server.html'));
});

app.get('/contact', (req, res) => {
    res.send('contact');
});

app.get('/map', (req, res) => {
    res.send('map');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


