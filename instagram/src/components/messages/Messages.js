import { io } from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';

import React, { useEffect, useState } from "react";
import "./Message.css";
import { Stack, Box, Typography, Button, Input, Dialog } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Link } from "react-router-dom";
// import NewMessage from '../Common/NewMessage';
// import AddPhotoAlternateOutlinedIcon from '@mui/icons-material'
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ClearIcon from "@mui/icons-material/Clear";
// import UserShortProfile from '../Common/UserShortProfile';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import UserShortProfile from "../common/UserShortProfile";

import CheatListSend from "./CheatListSend";
import CheatList from "./CheatList";
import PopNewMessage from "./PopNewMessage";
import { useSelector } from "react-redux";

const container = {
  display: "flex",
  width: "60vw",
  height: "100vh",
  margin: "auto",
};
const tmp_left = {
  width: "30%",
  height: "100%",
  backgroundColor: "yellow",
};
const tmp_right = {
  width: "60%",
  height: "100%",
  backgroundColor: "green",
};

  const Messages = () => {

    const {data} = useSelector(state=>state.userInfo);
    const [message,setMessage] = useState({
      name:data.username,
      room:'hostal',
      mass:''
    })

    const [messages,setMessages] = useState([])

  const socket = io("http://localhost:5500/");
  // socket.on("connect", () => {
  //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });

  function handleSubmit(){
    socket.emit("message","IamBack");
  }
  function handleClick(){
    console.log(message);
    socket.emit('message',message);
    setMessage({...message, mass:'' });

  }
  useEffect(()=>{
    socket.on("message",(payload)=>{
      console.log("on client -" , payload);
      setMessages([...payload] );
      console.log(payload);
     })
  },[socket]);
  function handleText(e){
    setMessage({...message, mass: e.target.value });
  }
  function handleJoining(){
     socket.emit('join',message.room);
     console.log("join event send");
  }
  // const [open,setDialog] = useState('');
  // console.log(data);

  return (
    //    <Box sx={{marginLeft:'2%'}}>
    //     <Stack m='20px auto' justifyContent='center' alignItems='center'>
    //         <Stack width='960px' height='90vh' flexDirection='row'  sx={{border:'1px solid #3d3d3d'}}>
    //             <CheatList/>
    //             <CheatListSend open={open} setDialog={setDialog} />
    //         </Stack>
    //     </Stack>
    //     <PopNewMessage open={open} setDialog={setDialog} />
    //    {/* <NewMessage/> */}
    //   </Box>
    <>
      <Box sx={container}>
        <Box sx={tmp_left}>
          <button onClick={(e)=>handleSubmit(e)} >left</button>
        </Box>
        <Box sx={tmp_right}>
          <h1>right</h1>
          <input type="text" value={message.mass}  onChange={(e)=>handleText(e)} ></input>
          <button onClick={(e)=>handleClick(e)}>submit</button>
          <button onClick={(e)=>handleJoining(e)}>join</button>

          <Box>
            {
              messages.map(ele=>(
                <>
                <h2 key={uuidv4()} >{ele.name}-{ele.mass}</h2>
                </>
              ))
            }
          </Box>
        </Box>
      </Box>
    </>
  );
};

// function CheatListSend()
// {
//   return (
//     <>
//         <Stack width='100%' height='100%' alignItems="center" justifyContent='space-around'   sx={{backgroundColor:'#3d3d3d'}}>
//           <Stack width='100%' p='25px' direction="column" justifyContent='center' alignItems="center" spacing={2}>
//             <ArrowOutwardIcon fontSize='large'/>
//             <Stack flexDirection='column' sx={{textAlign:'center',display:'flex'}}>
//               <Typography variant='h4'>Your message</Typography>
//               <Typography variant='body2'>Send private photos and messages to a friend or group.</Typography>
//             </Stack>
//             <Button variant="contained" component="label" >
//                 {/* <input hidden accept="image/*" type="file" />      this button open New message component */}
//                 <Link to="/Messages/NewMessages" > Send Message</Link>
//            </Button>
//           </Stack>
//        </Stack>
//     </>
//   )
// }

export default Messages;
