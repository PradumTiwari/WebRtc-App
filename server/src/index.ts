import express from "express";
import http from "http";
import {PORT} from "./config/serverConfig";
import {Server} from "socket.io";
import cors from "cors";
const app=express();

app.use(cors());

const server=http.createServer(app);
console.log("PORT ",PORT);


const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
    }
});


io.on("connection",(socket)=>{
    console.log("New User connection");

    socket.on("disconnect",()=>{
        console.log("User Disconnected");
        
    })
})
server.listen(PORT,()=>{
    console.log(`Server is up at port ${PORT}`);

})