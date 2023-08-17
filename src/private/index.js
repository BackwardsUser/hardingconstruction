var { readdirSync } = require("node:fs");
var { join } = require("node:path");
var express = require("express");

var app = express();

var port = "3001";

app.use(express.static(join(__dirname, "..", "public")));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "..", "public", "view", "index.html"));
});

app.get('/status', (req, res) => {
    var status = {
        status: 200
    };
    res.send(status);
})

app.get('/pictures', (req, res) => {
    var images = readdirSync(join(__dirname, '..', 'public', 'assets', 'images', 'jobs'));
    var resBody = [];
    images.forEach(img => {
        resBody.push(`/assets/images/jobs/${img}`);
    })
    res.send(resBody);
})

app.listen(port, () => {
    console.log(`App Listening to Port ${port}.`);
})