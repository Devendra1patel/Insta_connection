import express from 'express';
import { Server } from 'socket.io';
import {createServer} from "http"
import connect from './connection.js';
import { router } from './routes/usersRoute.js';
import cors from 'cors'

const app = express();

const http = createServer(app);

export const io = new Server(http,{
    cors: {
        origin: "*",
        credentials: true,
      }
    });

let group_messages = [];
    io.on("connection",(socket)=>{
        console.log("socket conneted");
         
            socket.on("join",(room)=>{
                socket.join(room);
                console.log("room name joined -",room);
                // socket.to('room').emit("message",payload);
            })
            socket.on("message",(data)=>{
                group_messages.push(data);
                console.log("user, room ,mass- ",data);
                socket.to(data.room).emit('message',group_messages); 
            })
       

        socket.on("disconnect", (reason) => {
            console.log("user disconnecting");
          });
    })

app.use(express.json());
app.use(cors());
app.use('/user', router);

connect('mongodb://127.0.0.1:27017/instagram')
.then((res)=> 
{
    console.log("Database now connected");
})
.catch((err) => {
    console.log("Invalid Connection-" ,err);
})


http.listen(5500,()=>{
    console.log("Server is running Now on -",5500);
})