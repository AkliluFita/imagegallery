import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
// import { MenuIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./../images/reporterR.png";
import profilePic from "./../images/p6.png";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const MyNav = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "red",
    zIndex: 2,
    position: "",
  }));

  const MyToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: "#eff3f5",
    color: "red",
    display: "flex",
    justifyContent: "space-between",
    height: "90px",
  }));

  const MyLogo = styled("img")(({ theme }) => ({
    paddingRight: "20px",
    width: "100px",
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
  }));

  const MyMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    flex: "2",
    gap: "20px",
    // backgroundColor: "#81dc6f",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const MyAccount = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    // backgroundColor: "#97a5db",
    colo: "black",
    flex: "1",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const MyButton = styled(Button)(({ theme }) => ({
    border: "1px solid #b7ced9",
    color: "#2a342d",
    padding: "10px",

    "&:hover": {
      borderBottom: "1px solid black",
      color: "#021608",
    },
  }));

  const MyMenubar = styled(Menu)(({ theme }) => ({
    marginTop: "75px",
    // backgroundColor: "red",
    // border: "1px solid red",
    height: "700px",
  }));

  const MyAvatar = styled(Avatar)(({ theme }) => ({
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  }));

  // function part
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };

  return (
    <MyNav>
      <AppBar position="fixed">
        <MyToolbar>
          <MyLogo src={logo} alt="logo" />

          <MyMenu>
            <Link to="/">
              <MyButton>HOME</MyButton>
            </Link>

            <MyButton>EVENT</MyButton>
            <MyButton>INTERVIEW</MyButton>
            <MyButton> GENERAL</MyButton>
            <Link to="/Gallery">
              <MyButton> GALLERY</MyButton>
            </Link>

            <MyButton>WELL_KNOWN</MyButton>
          </MyMenu>

          <MyAccount>
            {!currentUser && (
              <Link to="/Login">
                <MyButton>LOGIN</MyButton>
              </Link>
            )}

            {!currentUser && (
              <Link to="/Register">
                <MyButton>REGISTER</MyButton>
              </Link>
            )}
          </MyAccount>

          <Box sx={{ contentItem: "center" }}>
            <MyAvatar
              alt="avatar"
              src={profilePic}
              onClick={(e) => setOpenMenuBar(true)}
              id="demo-positioned-menu"
              aria-controls={openMenuBar ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenuBar ? "true" : undefined}
            />
            <Typography variant="subtitle1" gutterBottom>
              {currentUser?.username}
            </Typography>
          </Box>
        </MyToolbar>
      </AppBar>

      <MyMenubar
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenuBar}
        onClose={(e) => setOpenMenuBar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem>
          <Link to="/Profile">
            <MyButton>Profile</MyButton>
          </Link>
        </MenuItem>
        <MenuItem>My account</MenuItem>
        {currentUser ? (
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        ) : (
          <MenuItem disabled>Logout</MenuItem>
        )}
      </MyMenubar>
    </MyNav>
  );
}

export default Navbar;
