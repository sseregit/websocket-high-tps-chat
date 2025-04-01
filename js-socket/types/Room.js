class Room {
    constructor() {
        this.forward = new Map();
        this.clients = new Map();
    }

    join(client) {
        this.clients.add(client);
    }

    leave(client) {
        this.clients.delete(client);
    }

    forwardMessage(message) {
        for (const client of this.clients) {
            client.send(JSON.stringify(message));
        }
    }
}