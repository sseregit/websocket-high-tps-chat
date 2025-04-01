const {socketLogger} = require("../logs/winston")

class Room {
    constructor() {
        this.forward = new Map();
        this.clients = new Map();
    }

    join(client) {
        socketLogger.info("new client");
        this.clients.add(client);
    }

    leave(client) {
        socketLogger.info("deleted client");
        this.clients.delete(client);
    }

    forwardMessage(message) {
        socketLogger.info("send message to all client")
        for (const client of this.clients) {
            client.send(JSON.stringify(message));
        }
    }
}