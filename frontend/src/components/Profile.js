import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
// import profilePic from "./../images/p6.png";
// import Backdrop from "@mui/material/Backdrop";

import EditUser from "./EditUser";

function Profile() {
  const MyBox = styled(Box)(({ theme }) => ({
    marginTop: "100px",
    border: "1px solid #b7ced9",
    flex: "3",
    padding: "10px",
  }));

  const MyProfileBox = styled(Box)(({ theme }) => ({
    border: "1px solid #b7ced9",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
  }));

  const MyLeftBox = styled(Box)(({ theme }) => ({
    flex: "1",
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",

    width: "100%",
    backgroundColor: "#eff3f5",
  }));

  const MyAvatar = styled(Avatar)(({ theme }) => ({
    width: "100px",
    height: "100px",
    border: "1px solid #b7ced9",
    background: "white",
  }));

  const MyRightBox = styled(Box)(({ theme }) => ({
    flex: "2",
    border: "1px solid #b3f6a",
    padding: "10px",
    display: "flex",
    width: "100%",
  }));

  const MyListBox = styled(Box)(({ theme }) => ({
    border: "1px solid #b3f6a",
    borderRadius: "10px",
    width: "100%",
    // background: "#b3f6ac",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }));

  const MyListItem = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    backgroundColor: "#eff3f5",
    padding: "10px",
  }));

  const { user } = useContext(AuthContext);

  return (
    <MyBox>
      <MyProfileBox
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <MyLeftBox>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={3}>
              <MyAvatar alt="Remy Sharp" src={`../upload/${user?.img}`} />
              <Stack direction="column">
                <Typography variant="subtitle1" gutterBottom>
                  subtitle1.
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
            </Stack>
          </Stack>
        </MyLeftBox>
        <MyRightBox>
          <MyListBox>
            <MyListItem>
              <Typography variant="subtitle1" gutterBottom>
                User Name
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {user.username}
              </Typography>
            </MyListItem>
            <MyListItem>
              <Typography variant="subtitle1" gutterBottom>
                Email
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {user.email}
              </Typography>
            </MyListItem>
            <MyListItem>
              <Typography variant="subtitle1" gutterBottom>
                Password
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {user.password}
              </Typography>
            </MyListItem>
            <EditUser /> {/* came from new component*/}
          </MyListBox>
        </MyRightBox>
      </MyProfileBox>
    </MyBox>
  );
}

export default Profile;
