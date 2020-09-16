const http = require('http');

const port = process.env.PORT || 5000;
//added
const $ = require('jQuery');

$("<h1>Include this using jquery</h1>").appendTo("body");
console.log($("body").html());
//added
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n\nCool!');
});

server.listen(port, (err) => {
    if(err){
        return console.log('Something went wrong', err)
    }
    console.log('Server Listening on: ${port}');
});
