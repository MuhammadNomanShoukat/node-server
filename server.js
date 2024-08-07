const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log('A user connected');

  
  socket.on('disconnect', () => {
    console.log('User disconnected');

  });
});

httpServer.listen(3000);