import React, { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, TextField } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import http from "../httpCommon";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

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

function EditUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, setError] = useState(null);
  const { user } = useContext(AuthContext);
  // form data states
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await http.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const profileUrl = await upload();

    const UpdateUser = {
      username: username === "" ? user.username : username,
      email: email === "" ? user.email : email,
      img: file ? profileUrl : user.img,
    };

    try {
      await http.put(`/users/${userId}`, UpdateUser);

      window.location.reload();
      setOpen(false);
    } catch (err) {
      setError(err.response.data);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        <ModeEditSharpIcon /> EDIT YOUR ACCOUNT AND PROFILE PICTURE
      </Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Account Form
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                required
                autoFocus
                fullWidth
                label="username"
                id="fullWidth"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />

              <TextField
                required
                autoFocus
                fullWidth
                label="email"
                id="fullWidth"
                name="email"
                setUsername
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="filled"
                required
                fullWidth
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Box>
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" onClick={handleEdit}>
                Edit
              </Button>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditUser;
