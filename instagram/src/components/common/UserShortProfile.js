import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
const UserShortProfile = (props) => {

  const {data} =  useSelector(state=>state.userInfo);

  return (
    // <div></div>
    <Box
      className='cursur'
      pt="10px"
      pb="10px"
      width="319px"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img
          src= { data.profile_pic || `https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg`}
          alt="pic"
          style={{
            width: `${props.width}`,
            height: `${props.height}`,
            borderRadius: "50%",
          }}
        ></img>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="body1">{data.username}</Typography>
          </Box>
          <Typography variant="body1">{data.name}</Typography>{" "}
          {/*depends on situation*/}
        </Box>
      </Box>
      
      <Stack justifyContent='center'  height='50px'>
       {props.element}
      </Stack>
    </Box> 
  );
};

export default UserShortProfile;
