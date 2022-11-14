import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, TextField } from "@mui/material";
import { AddBox } from "@mui/icons-material";

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

function EditPict() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MyEditBtn = styled(Button)(({ theme }) => ({
    // position: "fixed",
    // bottom: "50px",
    // right: "50px",
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
    <div>
      <MyEditBtn onClick={handleOpen} variant="contained">
        EDIT PICTURE
      </MyEditBtn>
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
              Edit Image Form
            </Typography>
            <MyFormBox>
              <TextField fullWidth label="Picture Title" id="fullWidth" />
              <TextField fullWidth label="Picture Category" id="fullWidth" />
              <TextField
                fullWidth
                label="Picture Desc"
                id="fullWidth"
                multiline
                maxRows={4}
              />
              <Button variant="contained" component="label">
                Change Image
                <input type="file" />
              </Button>
            </MyFormBox>
            <MyButtonBox>
              <Button variant="contained">Edit</Button>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </MyButtonBox>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditPict;
