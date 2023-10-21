import React from "react";
import { Stack } from '@mui/material'
import videobg from "./videobg.mp4";
import videobg2 from "./videobg2.mp4";

const Reels = () => {
  return (
    // <div className='main'>
      // <video autoplay loop>
      //   <source src={videobg} type="video/mp4" />
      // </video>
    // </div>
    <Stack width='100%' justifyContent='center' alignItems='center' >
        <video id='reelVideo' width='380px' height='600px' controls autoplay loop cover>
          <source src={videobg2} type="video/mp4" />
        </video>
    </Stack>
  );
};

export default Reels;
