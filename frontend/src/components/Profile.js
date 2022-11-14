import {
  Avatar,
  Box,
  Button,
  buttonBaseClasses,
  Fade,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import profilePic from "./../images/p6.png";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const MyEditBox = styled(Box)(({ theme }) => ({
    // width: "50%",
  }));

  const MyButton = styled(Button)(({ theme }) => ({
    width: "50%",
  }));

  const MyFormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "10px",
  }));

  const MyButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  }));

  return (
    <MyBox>
      <MyProfileBox
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <MyLeftBox>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={3}>
              <MyAvatar alt="Remy Sharp" src={profilePic} />
              <Stack direction="column">
                <Typography variant="subtitle1" gutterBottom>
                  subtitle1.
                </Typography>
                <Button variant="contained" component="label">
                  Change Profile Picture
                  <input type="file" />
                </Button>
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
                Aklilu Fita
              </Typography>
            </MyListItem>
            <MyListItem>
              <Typography variant="subtitle1" gutterBottom>
                Email
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                weaba123abdu@gmail.com
              </Typography>
            </MyListItem>
            <MyListItem>
              <Typography variant="subtitle1" gutterBottom>
                Password
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                weaba123
              </Typography>
            </MyListItem>
            <MyEditBox>
              <MyButton variant="contained" onClick={handleOpen}>
                Edit Your account
              </MyButton>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Edit Account Form
                    </Typography>
                    <MyFormBox>
                      <TextField fullWidth label="User Name" id="fullWidth" />
                      <TextField fullWidth label="Email" id="fullWidth" />
                      <TextField fullWidth label="Password" id="fullWidth" />
                      <Button variant="contained" component="label">
                        Finish Edit
                      </Button>
                    </MyFormBox>
                    <MyButtonBox>
                      <Button onClick={handleClose} variant="contained">
                        Close
                      </Button>
                    </MyButtonBox>
                  </Box>
                </Fade>
              </Modal>
            </MyEditBox>
          </MyListBox>
        </MyRightBox>
      </MyProfileBox>
    </MyBox>
  );
}

export default Profile;
