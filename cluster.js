const io = require("socket.io-client");
const perfData = require("./perfMoniter");
const delay = 100;

const socket = io("http://localhost:3000", {
  auth: {
    token: "node",
  },
});

socket.on("connect", () => {
  console.log("Connected To Server");
});


setInterval(() => {
  perfData(socket);
}, delay);


setInterval(() => {
    socket.disconnect();
    
}, 5000);