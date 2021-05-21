const http = require('http');

const host = 'localhost';
const port = 34343;

startServer();

function startServer(){
    http.createServer((req, res) => {
        res.writeHead(404, {"Content-Type" : "text/json"});
        res.end(JSON.stringify("404 : Resource not found!"));
    }).listen(port,host, () => {console.log(`Server listening on port: ${port}.`)})
}