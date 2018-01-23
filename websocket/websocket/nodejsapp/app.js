'use strict';

// @see https://qiita.com/n0bisuke/items/cb6216dbb9c3c13a10a8
// @see https://github.com/theturtle32/WebSocket-Node

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer((req, res) => {
    console.log(`${new Date()} Recived request for ${request.url}`);
    res.writeHead(404);
    response.end();
});

server.listen(8080, () => {
    console.log(`${new Date()} Server is listening on port 8080`);
});

let wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origon) {
    return true;
}

wsServer.on('request', (request) => {
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log(`${new Date()} Connection from origin ${request.origin} rejected.`);
        return;
    }

    let connection = request.accept('echo-protocol', request.origin);
    console.log(`${new Date()} Connection accepted.`);
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(`Received Binary Message of ${message.utf8Data.length} bytes`);
            connection.sendUTF(message.utf8Data);
        }
    });
    connection.on('close', (reeasonCode, description) => {
        console.log(`${new Date()} Peer ${connection.remoteAddress} dissconnected.`);
    });
});
