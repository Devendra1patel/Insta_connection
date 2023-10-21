import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import UserShortProfile from "../common/UserShortProfile";

const LeftHead = () => {
    return (
      <>
        <Stack flexDirection="column" mt="30px">
          <Box justifyContent="center" alignItems="center">
            <UserShortProfile
              width={"50px"}
              height={"50px"}
              element={<b className="main-col">Switch</b>}
            />
          </Box>
          <Box
            sx={{
              direction: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography variant="body1" className="opacityDowned">
              Sugeestions for you
            </Typography>
            {/* <span><b>Seeall</b></span> */}
          </Box>
        </Stack>
      </>
    );
  }

export default LeftHead