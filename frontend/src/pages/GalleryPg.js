import React from "react";
import Navbar from "../components/Navbar";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const rightBarStyle = {
  color: "black",
};

function GalleryPg() {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Gallery />
        <RightBar rightBarStyle={rightBarStyle} />
      </Stack>
      <Footer />
    </Box>
  );
}

export default GalleryPg;
