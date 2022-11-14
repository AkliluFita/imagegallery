import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Posts from "../components/Posts";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import { Divider, Stack, styled } from "@mui/material";
import { Box } from "@mui/system";
import AddPic from "../components/AddPic";

function Home() {
  return (
    <Box>
      <Navbar />
      <Header />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <LeftBar />
        <Posts />
        <RightBar />
      </Stack>
      <Footer />
      <AddPic />
    </Box>
  );
}

export default Home;
