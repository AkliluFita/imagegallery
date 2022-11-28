import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { AddBox } from "@mui/icons-material";
import http from "../httpCommon";
import { useLocation } from "react-router-dom";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";

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

function EditPict({ imgPost, setImgPost }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, setError] = useState(null);
  // const { currentUser } = useContext(AuthContext);

  // form data states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [disc, setDisc] = useState("");

  const location = useLocation();
  const ImgId = location.pathname.split("/")[2];

  const handleEdit = async (e) => {
    e.preventDefault();

    const UpdatedPost = {
      title: title === "" ? imgPost.title : title,
      disc: disc === "" ? imgPost.disc : disc,
      category: category === "" ? imgPost.category : category,
      img: imgPost.img,
    };

    try {
      await http.put(`/posts/${ImgId}`, UpdatedPost);

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
        <ModeEditSharpIcon /> EDIT PICTURE
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
              Edit Picture Form
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
                label="Title(must filled)"
                id="fullWidth"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Box sx={{ minWidth: "220px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    category
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="well-known">Well-Known</MenuItem>
                    <MenuItem value="interview">Interview</MenuItem>
                    <MenuItem value="events">Event</MenuItem>
                    <MenuItem value="gallery">Gallery</MenuItem>
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="politics">Politics</MenuItem>
                    <MenuItem value="sport">Sport</MenuItem>
                    <MenuItem value="social">Social</MenuItem>
                    <MenuItem value="parliament">Parliament</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                fullWidth
                label="description(optional)"
                id="fullWidth"
                multiline
                maxRows={4}
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
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

export default EditPict;
