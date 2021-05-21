require('dotenv').config()
const http = require('http');

const host = 'localhost';
const port = 34343;

const revealDate = new Date(Date.UTC(2021, 4, 23, 21, 59, 50));

process.on('uncaughtException', function (err) {
    console.error((err && err.stack) ? err.stack : err);
});

process.on('exit', function (err) {
    console.log('-----Exiting-----\n\n');
});

process.on('SIGINT', function (err) {
    console.log('-----Forced Exit');
    process.exit();
});


startServer();

function startServer() {
    console.log('-----Starting-----');

    http.createServer((req, res) => {
        console.log('Request from: ' + req.socket.remoteAddress);

        res.setHeader('Access-Control-Allow-Origin', '*');

        const millis = revealDate.valueOf() - Date.now();
        if (millis <= 0) {
            res.writeHead(200, { "Content-Type": "text/json" });
            res.end(JSON.stringify(`${process.env.theme}`));
        } else {
            res.writeHead(404, { "Content-Type": "text/json" });
            res.end(JSON.stringify("404 : Resource not found! Nice try ;)"));
        }

    }).listen(port, host, () => { console.log(`Server listening on port: ${port}.`) })
}