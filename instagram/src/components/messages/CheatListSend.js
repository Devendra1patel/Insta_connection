import React from 'react';
import { Stack, Typography,Button  } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowOutward } from '@mui/icons-material';

const CheatListSend = ({open,setDialog}) =>{
    const handleOpen = ()=>{
        setDialog('true');
        // console.log({open});
    }
   return (
    <>
        <Stack width='100%' height='100%' alignItems="center" justifyContent='space-around'   sx={{backgroundColor:'#3d3d3d'}}>
          <Stack width='100%' p='25px' direction="column" justifyContent='center' alignItems="center" spacing={2}>
            <ArrowOutward fontSize='large'/>
            <Stack flexDirection='column' sx={{textAlign:'center',display:'flex'}}>
              <Typography variant='h4'>Your message</Typography>
              <Typography variant='body2'>Send private photos and messages to a friend or group.</Typography>
            </Stack>
            <Button variant="contained" component="label" onClick={()=>{handleOpen()}}>
                {/* <input hidden accept="image/*" type="file" />      this button open New message component */}
                {/* <Link to="/Messages/NewMessages" > Send Message</Link> */}
                Send Message
           </Button>
          </Stack>
       </Stack>
    </>
  )
}

export default CheatListSend