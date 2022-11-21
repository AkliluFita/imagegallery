import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import http from "../httpCommon";
// import singlePic from "./../images/comp4.jpg";
// import profilePic from "./../images/p6.png";
import EditPict from "./EditPict";
import moment from "moment";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

function SinglePic() {
  const MyBox = styled(Box)(({ theme }) => ({
    marginTop: "100px",
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    flex: "3",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }));

  const MyPicBox = styled("img")(({ theme }) => ({
    width: "100%",
    height: "550px",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
  }));
  const MyPicControlBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
  }));

  const MyBtnBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    height: "40px",
  }));

  const MyDeleteBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  }));

  const MyTextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    border: "1px solid #b7ced9",
    padding: "5px",
    borderRadius: "5px",
  }));

  const MyAvatarBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "3px",
    alignItem: "center",
    justifyContent: "space-between",
  }));

  const MyAvatarTextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  }));

  // function part
  // from server
  const [imgPost, setImgPost] = useState({});
  const location = useLocation();
  const ImgId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get(`/posts/${ImgId}`);
        setImgPost(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ImgId]);

  const handleDelete = async () => {
    try {
      await http.delete(`/posts/${ImgId}`);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MyBox>
      <MyPicBox src={`../upload/${imgPost?.img}`} alt="" />
      <MyPicControlBox>
        {currentUser?.username === imgPost?.username && (
          <MyBtnBox>
            <EditPict imgPost={imgPost} setImgPost={setImgPost} />
            <MyDeleteBtn variant="contained" onClick={handleDelete}>
              <DeleteSharpIcon />
              Delete
            </MyDeleteBtn>
          </MyBtnBox>
        )}

        <MyTextBox>
          <Typography variant="body2" color="text.secondary">
            <strong>Title</strong>: {imgPost.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category</strong>: {imgPost.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Disc</strong>:{imgPost.disc}
          </Typography>
        </MyTextBox>

        <MyAvatarBox>
          <Avatar alt="avatar" src={`../upload/${imgPost?.userImg}`} />

          <MyAvatarTextBox>
            <Typography variant="subtitle1" gutterBottom>
              {imgPost.username}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {moment(imgPost.date).fromNow()}
            </Typography>
          </MyAvatarTextBox>
        </MyAvatarBox>
      </MyPicControlBox>
    </MyBox>
  );
}

export default SinglePic;
