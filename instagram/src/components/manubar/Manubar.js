import React, { useEffect, useState } from "react";
import "./Manubar.css";
import { manubar_category } from "../../utils/Constants";
// import manubar_category from '.../utils/Constants.js'
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoginDialogue from "./loginDialoge";
import SignUpDialogue from "./signUpDialoge";
import { useSelector } from "react-redux";


const Manubar = () => {
 
// -----exerimental row
  const {data} = useSelector(state=>state.userInfo)
  // console.log(Name);

  const [dialog, setDialog] = useState({
    logIn:false,
    signUp:false,
    present:false
  });

  function handlDialog(dialogName)
  {
    // if(dialogName === dialog.)
    setDialog({...dialog,[dialogName]:true});
  }
  

  return (  
    // <Stack width='300px' sx={{backgroundColor:'yellow'}} >
    // <div   style={{
     
    //   height:'100%',
    //   position:'sticky'
    // }}>
    <Stack className="scrollbar"
      height="100vh"
      width="280px"
      direction="column"
      justifyContent="space-between"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        borderRight: "1px solid #3d3d3d",
        position:'sticky',
        // overflow:'auto'
        // top:'0px'
      }}
    >
      <Box>
      <Box p="15px" sx={{ height: "92", marginBottom: "19px" }}>
        <Typography variant="h6">Instagram-{data.username}</Typography>
        {
          dialog.present === true ||
         <Box>
          <button  onClick={()=>handlDialog('logIn')}  style={{backgroundColor:'#0095F6',color:'#FFFFFF', borderRadius:'5px',fontWeight:'600',fontSize:'18px',marginLeft:'10px'}} >Login</button>
          <button  onClick={()=>handlDialog('signUp')}  style={{backgroundColor:'#0095F6',color:'#FFFFFF', borderRadius:'5px',fontWeight:'600',fontSize:'18px',marginLeft:'10px'}} >SignUp</button>
         </Box>
        }
        
      </Box>
        {manubar_category.map((element, index) => {
          return (
            <>
              <Link to={element.name} className="Link" key={Math.random()}>
                <Box
                  p="10px"
                  mt="4px"
                  mb="4px"
                  sx={{
                    width: "220px",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Box
                    className="manuButton "
                    width="180px"
                    p="6px"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="zoom" style={{ fontSize: "small" }}> {element.icon} </div>
                    <Typography variant="body1" sx={{ pl: "20px" }}>
                      {element.name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </>
          );
        })}
      <Box p="15px">
        <Typography variant="h6">More</Typography>
      </Box>
      </Box>
      <LoginDialogue dialog={dialog} setDialog={setDialog} />
      <SignUpDialogue dialog={dialog} setDialog={setDialog} />

    </Stack>
  
    // </div>
  );
};

export default Manubar;
