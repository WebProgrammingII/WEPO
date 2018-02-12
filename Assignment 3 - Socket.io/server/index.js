/*
    Server code for creating a chat server
**/

const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Default constants
const PORT = 3000;

io.on('connection', (connectingSocket) => {
    console.log(`User connected (${connectingSocket})`);

    // Define messages to emit
    connectingSocket.on('msg', (msg) => {
        console.log(msg);
        // Emit the message to everyone
        io.emit('msg', msg);
    });

    connectingSocket.on('disconnect', () => {
        console.log(`User disconnected (${connectingSocket})`);
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
