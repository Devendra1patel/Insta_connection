import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Stack, Typography, Box } from '@mui/material';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const Create = () => {
  return (
      <Stack m='auto' alignItems='center' justifyContent='center' >
       <Stack  direction="column" alignItems="center" justifyContent='space-between'  height='420px' width={{md:'348px' ,lg:'360px',xs:'348px'}} sx={{backgroundColor:'#1b1c1c', borderRadius:'15px'}}>
          <Box height='42.2px' width='100%' sx={{display:'flex', justifyContent:'center',alignItems:'center', borderBottom:'1px solid #3d3d3d'}}>
            <Typography>
                 Create new post
            </Typography>
          </Box>
          <Stack p='25px' direction="column" alignItems="center" spacing={2}>
            <Box p='8px'>
               <AddPhotoAlternateOutlinedIcon fontSize='large' />
            </Box>
            <Box sx={{textAlign:'center',display:'flex'}}>
              <Typography variant='h5'>Drag photos and videos here</Typography>
            </Box>
            <Button variant="contained" component="label"  >
                Select from computers
                <input hidden accept="image/*" type="file" />
           </Button>
          </Stack>
       </Stack>
      </Stack>
  )
}

export default Create