const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");
const {socketLogger} = require("./logs/winston")
const {newRoom} = require("./types/Room")

const server = http.createServer();
const wss = new WebSocket.Server({server});

const room = newRoom();

wss.on("connection", (ws, req) => {
    ws.on("message", (msg) => {
        console.log(`msg ${msg}`);
    });

    ws.on("close", () => {
        console.log("close");
    });
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    socketLogger.info(`Server Started on port = ${PORT}`);
})
