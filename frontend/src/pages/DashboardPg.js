import { Box, Stack } from "@mui/material";
import React from "react";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function DashboardPg() {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Dashboard />
      </Stack>
      <Footer />
    </Box>
  );
}

export default DashboardPg;
