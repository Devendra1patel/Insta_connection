import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

const ShortShowProfile = (props,obj) => {
    console.log(obj);
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
              src= {  `https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg`}
              alt="pic"
              style={{
                width: `${props.width} || 50px`,
                height: `${props.height} || 50px`,
                borderRadius: "50%",
              }}
            ></img>
            <Box
              sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="body1">{}</Typography>
              </Box>
              <Typography variant="body1">{}</Typography>{" "}
              {/*depends on situation*/}
            </Box>
          </Box>
          
          <Stack justifyContent='center'  height='50px'>
           {props.element || 'Follow' }
          </Stack>
        </Box> 
      );
}

export default ShortShowProfile
