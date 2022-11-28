import React, { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import http from "../httpCommon";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

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

function AddPic() {
  // functions parts
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  // form data states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [disc, setDisc] = useState("");
  const [file, setFile] = useState(null);

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

  const handlePublish = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    const newPost = {
      title: title,
      disc: disc,
      category: category,
      img: file ? imgUrl : "",
      uid: currentUser.id,
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };

    if (title === "" || category === "" || file === null) {
      setError("the title, category and image should be filled");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      try {
        await http.post(`/posts`, newPost);

        window.location.reload();
        setOpen(false);
      } catch (err) {
        setError(err.response.data);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    }
  };

  console.log(title);
  console.log(disc);
  console.log(category);
  console.log(file);
  console.log(currentUser);

  return (
    <div>
      <Button
        sx={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
        onClick={handleOpen}
        variant="contained"
      >
        <AddCircleSharpIcon style={{ color: "#090979", fontSize: "60px" }} />{" "}
        ADD PICTURE
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
              Picture Add Form
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
                variant="filled"
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
                    category(must filled)
                  </InputLabel>
                  <Select
                    variant="filled"
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
                type="area"
                variant="filled"
                fullWidth
                label="description(optional)"
                id="fullWidth"
                multiline
                maxRows={4}
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
              />
              Upload Image(must filled)
              <TextField
                variant="filled"
                required
                fullWidth
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Box>
            {err && <Alert severity="error">{err}</Alert>}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" onClick={handlePublish}>
                Publish
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

export default AddPic;
