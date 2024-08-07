const { Hono } = require("hono");
const { serve } = require("@hono/node-server");
const { Server } = require("socket.io");

const app = new Hono();

const httpServer = serve({
    fetch: app.fetch,
    port: 3000,
});

const io = new Server(httpServer, {
    /* options */
});

io.on("connection", (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});