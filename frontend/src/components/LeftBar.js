import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import profilePic from "./../images/p6.png";
// import { users } from "../dommyData";

function LeftBar() {
  const MyBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#eff3f5",
    flex: ".5", //its already flexed
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "10px",
    // boxShadow: "12px 9px 5px -5px rgba(110,91,91,0.75) ",
  }));

  const MyUserList = styled(Box)(({ theme }) => ({
    // border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  }));

  const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "7px",
    display: "flex",
    gap: "4px",
  }));

  const MyAvatar = styled(Avatar)(({ theme }) => ({
    border: "1px solid #b7ced9",
    padding: "3px",
  }));

  const { users } = useContext(AuthContext);

  return (
    <MyBox>
      <Typography variant="h5">users List</Typography>
      <hr />
      <MyUserList>
        {users.map((user) => (
          <MyListItemButton key={user.id}>
            <ListItemIcon>
              <MyAvatar src={`../upload/${user?.img}`} aria-label="recipe" />
            </ListItemIcon>
            <ListItemText primary={user.username} />
          </MyListItemButton>
        ))}
      </MyUserList>
    </MyBox>
  );
}

export default LeftBar;
