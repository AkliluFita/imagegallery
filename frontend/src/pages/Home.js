import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Posts from "../components/Posts";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import AddPic from "../components/AddPic";
import { AuthContext } from "../context/authContext";

function Home() {
  const { currentUser } = useContext(AuthContext);
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
      {currentUser && <AddPic />}
    </Box>
  );
}

export default Home;
