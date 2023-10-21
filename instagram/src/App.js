import './App.css';
// import {useEffect, useState} from 'react'
import { Manubar, Home, Create, Search, Reels, Messages,Profile,EditProfilepop } from './components/index.js';
import { Box, Typography, Stack } from '@mui/material';
import { manubar_category } from './utils/Constants'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';



function App() {

  return (
   <>
   

    <Box  m='auto' sx={{display:'flex'}} >
       <Router>
          <Manubar style={{border:'2px solid yellow'}}/>
          {/* <EditProfilepop/> */}

          {/* <ButtonAppBar/> */}
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Search' element={<Search/>} />
            {/* <Route path='/Explore' element={<Explore/>} /> */}
            <Route path='/Reels' element={<Reels/>} />
            <Route path='/Messages' element={<Messages/>}>
                {/* <Route path='NewMessage' element={<CheatList/>} /> */}
            </Route>
            {/* <Route path='/Notification' element={<Notification/>} /> */}
            <Route path='/Create' element={<Create/>} />
            <Route path='/Profile' element={<Profile/>} ></Route>
            <Route path='/Profile/accounts/edit/' element={<EditProfilepop/>} ></Route>

          </Routes>
      </Router>
    </Box>

 
   </>
  );
}

export default App;
