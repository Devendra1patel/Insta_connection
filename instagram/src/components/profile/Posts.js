import { Box } from '@mui/material'
import React from 'react'
import { post, } from '../../utils/Constants'
import Profile from './Profile.css'

const Posts = () => {
  return (
    <Box sx={{padding:'15px'}} >
        {
          post.map((element)=>{
            return (
              <>
                 <img className='hoverPost' src={element.url} width='309px' height='309px' style={{margin:'5px',}} ></img>

              </>
            )
          })
        }
    </Box>
  )
}

export default Posts