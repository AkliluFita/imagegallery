import { Box } from "@mui/material";
import React from "react";
import RightBar from "../components/RightBar";
// import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";

import { Stack } from "@mui/material";

function ProfilePg() {
  const style = { marginTop: "100px" };
  return (
    <Box>
      <Navbar />

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Profile />
        <RightBar style={style} />
      </Stack>
      {/* <Footer /> */}
    </Box>
  );
}

export default ProfilePg;
