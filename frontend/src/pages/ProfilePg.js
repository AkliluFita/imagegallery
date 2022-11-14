import { Box, styled } from "@mui/material";
import React from "react";
import RightBar from "../components/RightBar";
// import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/material";

function ProfilePg() {
  const MyBox = styled(Box)(({ theme }) => ({
    // border: "1px solid black",
  }));
  return (
    <MyBox>
      <Navbar />

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Profile />
        <RightBar />
      </Stack>
      {/* <Footer /> */}
    </MyBox>
  );
}

export default ProfilePg;
