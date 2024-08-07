const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require('path');
const cors = require('cors');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use('/socket.io', express.static(path.join(__dirname, 'node_modules/socket.io/client-dist')));

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = (req, res) => {
  app(req, res);
};
