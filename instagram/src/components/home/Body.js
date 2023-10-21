import { Box, Typography, Stack } from "@mui/material";
import {
  FavoriteBorderIcon,
  AccessTime,
  FavoriteBorder,
  MoreHoriz,
  Favorite,
  ModeCommentOutlined,
  SendOutlined,
  BookmarkBorderOutlined,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const Body = () => {
  const [like, setLike] = useState(0);
  let fav =
    "<FavoriteBorderIcon onClick={fun} className='opacityDown cursur'/>";
  function fun() {
    if (like == 0) setLike(1);
    else setLike(0);
    // console.log("Devendra",like);
  }
 
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        width="467px"
        mb="20px"
        pb="20px"
        sx={{ borderBottom: "1px solid #3d3d3d" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "467px",
          }}
        >
          <Box
            className="cursur"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
              alt="pic"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            ></img>
            <Box
              className="opacityDown"
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="body1">jimkwik</Typography>
                <Typography variant="caption"> . 1h </Typography>
              </Box>
              <Typography variant="body1">Original audio</Typography>{" "}
              {/*depends on situation*/}
            </Box>
          </Box>
          <MoreHoriz className="cursur opacityDown" />
        </Box>
        <Box
          sx={{
            width: "467px",
            height: "467px",
            border: "1px solid #3d3d3d",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
            style={{ width: "470px", height: "467px" }}
            alt="pic"
          ></img>
          {/* any photo,vedio can be dynamic*/}
        </Box>
        <Stack>
          <Box
            width="467px"
            mt="5px"
            mb="5px"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                width="40px"
                heigh="40px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {like == 0 && (
                  <FavoriteBorder
                    onClick={fun}
                    className="opacityDown cursur"
                  />
                )}
                {like == 1 && (
                  <Favorite onClick={fun} className="opacityDown cursur" />
                )}
              </Box>
              <Box
                width="40px"
                heigh="40px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ModeCommentOutlined
                  className="opacityDown cursur"
                />
              </Box>
              <Box
                width="40px"
                heigh="40px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SendOutlined className="opacityDown cursur" />
              </Box>
            </Box>
            <Box
              width="40px"
              heigh="40px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BookmarkBorderOutlined className="opacityDown cursur" />
            </Box>
          </Box>
          <Box p="5px" pl="10px">
            {like} Like
          </Box>
          <Box>
            <Typography variant="body1" className="cursur">
              some text over hear....
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption" className="cursur">
              <input
                autofocus
                id="text"
                type="text"
                placeholder="Add comment...."
                style={{
                  width: "27rem",
                  backgroundColor: "black",
                  border: "none",
                  height: "25px",
                  color: "white",
                }}
              ></input>{" "}
            </Typography>
            <Box
              width="40px"
              heigh="40px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SentimentSatisfiedOutlined
                className="opacityDown cursur zoom"
                fontSize="smaller"
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Body;
