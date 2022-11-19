import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import profilePic from "./../images/p6.png";
// import { users } from "../dommyData";
import http from "../httpCommon";

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


  // function part
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await http.get(`/users`);
        setUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <MyBox>
      <Typography variant="h5">users List</Typography>
      <hr />
      <MyUserList>
        {users.map((user) => (
          <MyListItemButton key={user.id}>
            <ListItemIcon>
              <MyAvatar alt="profile" src={user.imgUrl} />
            </ListItemIcon>
            <ListItemText primary={user.username} />
          </MyListItemButton>
        ))}
      </MyUserList>
    </MyBox>
  );
}

export default LeftBar;
