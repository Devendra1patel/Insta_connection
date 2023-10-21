import { Box, Typography, Stack, styled } from "@mui/material";
import Head from './Head';
import Body from './Body'
import LeftHead from "./LeftHead";




//////////////////////////////////////////////////////
//head- need to get profile pic and username , and currrent story
//body- need current post of following, like and comment
//left- profile,name ,username
//pathway- profile page,self or related people, login page



const Home = () => {
  return (
    <Stack width="100%" flexDirection="row" justifyContent="center" sx={{marginLeft:''}} >
      <Stack
        mr="50px"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "630px", heigth: "100vh", color: "white" }}
      >
        <Head />
        <Body />
      </Stack>
      <LeftHead />
    </Stack>
  );
};

export default Home;
