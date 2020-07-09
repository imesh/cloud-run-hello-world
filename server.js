const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Request received: [url] ' + req.url);
    res.end('Hello world from Cloud Run!');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => { console.log('Listening on port ' + PORT);});
