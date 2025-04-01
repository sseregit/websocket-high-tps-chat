const express = require("express");
const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
