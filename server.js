const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const server = require('http').createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Server Running...');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
