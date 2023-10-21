import styled from '@emotion/styled';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../redux/slices/user';


const Container = styled('Box')`
  
    
    margin:auto;
    width:60vw;
    height:90vh;
    border:1px solid #363636;
    border-radius:5px;
    display:flex;
`;

const Row ={
    width:'100%',
    height:'77px',
    display:'flex',
    // border:'2px solid blue'

    // justifyContent:'right',
    // backgroundColor:'orange',
    // textAlign:'right'

};
const leftRow ={
    width:'28%',
    height:'77px',
    flexDirection:'row',
    justifyContent:'right',
    alignItems:'center',
    color:'white',
    // backgroundColor:'yellow',
    textAlign:'right',
    display:'flex',
    fontWeight:'800',
    fontSize:'18px',
    fontStyle:'sans-serif',
    paddingRight:'36px'

};
const RigthRow ={
    margin:'0 10px',
    width:'65%',
    height:'77px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    // backgroundColor:'green',
    // justifyContent:'right',
    // textAlign:'right'

};

const sendData = {
    name:'',
    bio:'',
    gender:'',
    showSuggestions:'',
    _id:''
}

const EditProfilepop = () => {

    const {data} = useSelector(state=>state.userInfo);
    const dispatch = useDispatch();

    const [input,setInput] = useState('')

    const [inputData,setInputData] = useState({
        ...sendData
    }) 
    function handleInput(e)
    {
        setInputData({...inputData, [e.target.name]:e.target.value })
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("submit edit");
        console.log(inputData);
        
        setInputData({...inputData,_id:data._id})
        console.log("useSelector data- " ,data);
        console.log("submit edit id -",inputData);
        
        dispatch(updateUserInfo(inputData));
    }

  return (
    <Container >
        <Box sx={{width:'25%',backgroundColor:'',height:'100%',
                  borderRight:'1px solid #363636'                
                }}>
         
        </Box>
        <Box sx={{width:'75%',backgroundColor:'',height:'100%',color:'#363636'}}>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='h4' sx={{color:'white',margin:'32px 0 0 45px'}} >Edit Profile</Typography>

                    <Box sx={Row}>
                        <Box sx={leftRow}><img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt='pic' style={{width:'38px',height:'38px',borderRadius:'50%'}} ></img></Box>
                        <Box sx={RigthRow}>
                            <Typography color='white' >{data.username}</Typography>
                            <button style={{display:'flex',justifyContent:'left',color:'#00599b',backgroundColor:'#000000',border:'0'}}><Typography variant="button" display='span'>Change profile photo</Typography></button>
                        </Box>
                    </Box>

                    <Box sx={Row}>
                        <Box sx={leftRow}>Website</Box>
                        <Box sx={RigthRow}>
                            <button disabled style={{backgroundColor:'#363636',color:'#666564'}} >Website</button>
                            <Typography variant='caption'>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</Typography>
                        </Box>
                    </Box>

                    <Box sx={Row}>
                        <Box sx={leftRow}>Name</Box>
                        <Box sx={RigthRow}>
                            <input type='text' name='name' onChange={(e)=>handleInput(e)}  style={{width:'100%',height:'',backgroundColor:'#000000',color:'white',border:'1px solid #363636',borderRadius:'3px'}}></input>
                            {/* <Typography variant='caption' >0/150</Typography> */}
                        </Box>
                    </Box>

                    <Box sx={Row}>
                        <Box sx={leftRow}>Bio</Box>
                        <Box sx={RigthRow}>
                            <input type='text' name='bio'  onChange={(e)=>handleInput(e)} style={{width:'100%',height:'80%',backgroundColor:'#000000',color:'white',border:'1px solid #363636',borderRadius:'3px'}}></input>
                            <Typography variant='caption' >0/150</Typography>
                        </Box>
                    </Box>

                    <Box sx={Row}>
                        <Box sx={leftRow}>Gender</Box>
                        <Box sx={RigthRow}> <input type='text' name='gender' onChange={(e)=>handleInput(e)} style={{width:'100%',backgroundColor:'#000000',color:'white',border:'1px solid #363636',borderRadius:'2px'}}></input></Box>
                    </Box>

                    <Box sx={Row}>
                        <Box sx={leftRow}>Show account suggestions on profiles</Box>
                        <Box sx={RigthRow} style={{color:'white',flexDirection:'row'}}>
                            <Checkbox name='showSuggestions' value onChange={(e)=>handleInput(e)} color='primary' sx={{color:'white'}} />
                            <Typography>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</Typography>
                        </Box>
                    </Box>
                    <Box sx={Row} style={{display:'flex',justifyContent:'center',alignItems:'center' }} >
                        <Button type='submit' variant="contained" style={{width:'100px',height:'30px'}} >Submit</Button>
                    </Box>

                </Box>
            </form>
        </Box>
    </Container>
  )
}

export default EditProfilepop;
