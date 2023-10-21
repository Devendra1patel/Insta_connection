import React from 'react'
import './Home.css';
import {Box, Typography} from '@mui/material'
import {profiles} from '../../utils/Constants' ;
const Head= () => {
    return (
      <>
        {/* <Carousel  selectedItem={4} showStatus={true} > */}
          <Box
            className="head"
            sx={{
              width:'630px',
              height: "117px",
              marginTop: "15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
              visibility: "hedden",
              overflow:'auto',
              overscrollBehavior: 'contain'
            }}
          >
            {profiles.map((element) => {
              return (
                <>
                  <Box
                    key={element.id}
                    sx={{
                      width: "px",
                      height: "px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={element.url}
                      alt="pic"
                      style={{
                        width: "66px",
                        height: "66px",
                        border: "3px solid transparent",
                        borderRadius: "50%",
                        background:"linear-gradient(#151515, #151515) padding-box, linear-gradient(45deg, yellow,orange, #f72398) border-box",
                        // boxShadow: "0 3px 10px rgb(0 0 0 / 0.4)",
                        padding: "2.5px",
                      }}
                    ></img>
                    <Typography variant="caption">
                      {element.profile_name}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
        {/* </Carousel> */}
        
      </>
    );
}

export default Head;