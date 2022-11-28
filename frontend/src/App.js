import "./App.css";
import { Divider, Stack, styled, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "./theme";
import Home from "./pages/Home";
import GalleryPg from "./pages/GalleryPg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import ProfilePg from "./pages/ProfilePg";
import SinglePicPg from "./pages/SinglePicPg";
import DashboardPg from "./pages/DashboardPg";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<GalleryPg />} />
          <Route
            path="/users/:id"
            element={currentUser ? <ProfilePg /> : <Home />}
          />
          <Route path="/posts/:id" element={<SinglePicPg />} />
          <Route path="/dashboard" element={<DashboardPg />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
