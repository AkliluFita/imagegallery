import React, { useState } from "react";
import RightBar from "../components/RightBar";
// import Footer from "../components/Footer";
import SinglePic from "../components/SinglePic";
import Navbar from "../components/Navbar";
import { Box, Stack, styled } from "@mui/material";

function SinglePicPg() {
  const MyBox = styled(Box)(({ theme }) => ({
    // border: "1px solid black",
  }));


  const [imgPost, setImgPost] = useState({});

  return (
    <MyBox>
      <Navbar />

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <SinglePic imgPost={imgPost} setImgPost={setImgPost} />
        <RightBar />
      </Stack>
      {/* <Footer /> */}
    </MyBox>
  );
}

export default SinglePicPg;
