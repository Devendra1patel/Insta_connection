import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Stack, Typography, Box, Dialog } from '@mui/material';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const PopNewMessage = ({open,setDialog}) => {
   
    const handleClose = () =>{
        setDialog('');
            // jj='';
            // console.log('jj=',jj);
    }
  return (
    <Dialog open={open} onClose={()=>handleClose()} >
      <Stack m='auto' alignItems='center' justifyContent='center' sx={{color:'white'}} >
       <Stack  direction="column" alignItems="center" justifyContent='space-between'  height='420px' width={{md:'348px' ,lg:'360px',xs:'348px'}} sx={{backgroundColor:'#1b1c1c'}}>
          <Box height='42.2px' width='100%' sx={{display:'flex', justifyContent:'center',alignItems:'center', borderBottom:'1px solid #3d3d3d'}}>
            <Typography>
                 New Message
            </Typography>
          </Box>
          <Box>
          </Box>

          <Stack p='5px' direction="column" alignItems="center" spacing={1}>
            
            <Button variant="contained" component="label" sx={{width:'100%'}} >
                Select from computers
                <input hidden accept="image/*" type="file" />
           </Button>
          </Stack>
       </Stack>
      </Stack>
    </Dialog>
  )
}

export default PopNewMessage;