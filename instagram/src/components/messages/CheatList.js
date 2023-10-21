import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import  UserShortProfile  from '../common/UserShortProfile'
import { ExpandMoreOutlined, OpenInNewOutlined } from '@mui/icons-material'

const CheatList = () =>{
  return (
    // <div>dev</div>
      <Stack width='400px' sx={{borderRight:'1px solid #3d3d3d'}}>
          <Stack  sx={{borderBottom:'1px solid #3d3d3d'}} >
              <Stack pt='10px' pb='10px' ml='15px' mr='15px' justifyContent='center' alignItems='center' flexDirection='row'  >
                <Box className='cursur' width='230px' sx={{display:'flex',justifyContent:'center'}} >
                    <Typography variant='body1'>l_._devendra_._l</Typography>
                    <Box className='cursur'>
                        <ExpandMoreOutlined />
                    </Box>
                </Box>
                    <OpenInNewOutlined />
              </Stack>
          </Stack>

              <Stack >
                   <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                    <Box className='chat_user' mt='10px' mb='10px'ml='15px' mr='15px' width='319px' sx={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <UserShortProfile width={'56px'} height={'56px'} element={''} />
                    </Box>
                   
              </Stack>
    </Stack> 
  )
}

export default CheatList