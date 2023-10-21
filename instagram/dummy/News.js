import React from 'react'
import { Typography,Box,Stack,Input,Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from 'react-router-dom'
import UserShortProfile from './UserShortProfile';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const News = () => 
{
  
    return (
        <>
        {/* <div>soijfoarjrfoergher</div> */}
       <Stack  direction="column" alignItems="center" justifyContent=''  height='420px' width={{md:'348px' ,lg:'400px',xs:'348px'}} sx={{backgroundColor:'#3d3d3d', borderRadius:'15px'}}>
            <Box  pl='10px' pr='10px'  width="100%" height='42.2px' sx={{display:'flex', justifyContent:'space-between',alignItems:'center', borderBottom:'1px solid white',boxSizing:'border-box'}}>
                <ClearIcon/>
                <Typography>
                    New message
                </Typography>
                <Typography>
                    <Link to='' path='' sx={{color:'skyblue',textDecoration:'none'}} >Next</Link>
                </Typography>
            </Box>
        
            <Box width='100%' p='8px 12px' sx={{boxSizing:'border-box', display:'flex',justifyContent:'center',alignItems:'center' }} >
                <Typography variant='body2'>T0:</Typography>
                <Stack alignItems='center' width='100%' height='38px' justifyContent='center' padding='0 8px' >
                   <Input placeholder="Placeholder" sx={{color:'white', pl:'12px', pr:'12px',border:'0',width:'100%'}}  />
                </Stack>
          </Box>

          <Stack>
                <Box justifyContent='left' alignItems='left' p='8px 12px' width='100%' sx={{}}>
                     <Typography variant='body2' sx={{}} >Suggested</Typography>
                </Box>
          </Stack>

          <Stack sx={{}}>
               <UserShortProfile sx={{color:'white'}} width={'46px'} height={'46px'} element={<FormControlLabel value="female" control={<Radio />}  />} />
          </Stack>

          <Stack p='25px' direction="column" alignItems="center" spacing={2}>
                <Box sx={{textAlign:'center',display:'flex'}}>
                <Typography variant='h5'>Drag photos and videos here</Typography>
                </Box>
                <Button variant="contained" component="label"  >
                    Select from computers
                    <input hidden accept="image/*" type="file" />
                </Button>
          </Stack>
       </Stack>
        </>
    )
}

// export default News