const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");
const {socketLogger} = require("./logs/winston")
const {newRoom} = require("./types/Room")

const server = http.createServer();
const wss = new WebSocket.Server({server});

const room = newRoom();

wss.on("connection", (ws, req) => {

    room.join(ws);

    const cookie = req.headers.cookie;
    const [_, user] = cookie.split("=");

    ws.on("message", (msg) => {

        const jsonMsg = JSON.parse(msg);
        jsonMsg.Name = user;

        room.forwardMessage(jsonMsg);
    });

    ws.on("close", () => {
        room.leave(ws);
    });
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    socketLogger.info(`Server Started on port = ${PORT}`);
})
