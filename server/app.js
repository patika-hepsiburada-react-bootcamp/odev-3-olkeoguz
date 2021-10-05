const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.end('Live Voting App');
});

let serverResults = {};

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('new-vote', serverResults);

  socket.on('new-vote', (results) => {
    // console.log('New Vote 1 :', results);
    serverResults = results;

    io.emit('new-vote', results);
    serverResults = results;
    console.log('server-res', results);
  });

  socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});
