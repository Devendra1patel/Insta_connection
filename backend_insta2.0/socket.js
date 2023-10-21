import { io } from ".";

io.on("connection",(socket)=>{
    console.log("socket conneted");
    socket.on("message",()=>{
        console.log("now mess accepting");
    })
    socket.on("disconnect", (reason) => {
        console.log("user disconnecting");
      });
})