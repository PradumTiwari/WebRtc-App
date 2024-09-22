"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const serverConfig_1 = require("./config/serverConfig");
const socket_io_1 = require("socket-io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
console.log("PORT ", serverConfig_1.PORT);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});
io.on("connection", (socket) => {
});
server.listen(serverConfig_1.PORT, () => {
    console.log(`Server is up at port ${serverConfig_1.PORT}`);
});
