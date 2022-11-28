import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import photo from "../images/comp3.jpg";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import profilePic from "./../images/p6.png";
import { Outlet, Link } from "react-router-dom";
// import { imagePosts } from "../dommyData";
import { doFilter } from "../filterMethod";
import http from "../httpCommon";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Posts() {
  const MyBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#eff3f5",
    flex: "4.5", //its already flexed
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    // boxShadow: "12px 9px 5px -5px rgba(110,91,91,0.75)",
  }));

  const MyFormBox = styled(Stack)(({ theme }) => ({
    // border: "1px solid #b7ced9",
    borderRadius: "10px",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    // boxShadow: "12px 9px 5px -5px rgba(110,91,91,0.75) ",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
      padding: "5px",
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItem: "center",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #b7ced9",
    backgroundColor: "#f4f3f9",
    // boxShadow: "12px 9px 5px -5px rgba(110,91,91,0.75) ",

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  const MySelectBox = styled(Box)(({ theme }) => ({
    minWidth: "220px",
  }));

  const MyPostBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    marginTop: "10px",
    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  }));

  const MyCard = styled(Card)(({ theme }) => ({
    width: "400px",
    border: "1px solid #b7ced9",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "0px",
    },
    position: "relative",
  }));

  const MyUpperCardBox = styled(Box)(({ theme }) => ({
    // display: "none",
    color: "ButtonText",
    background: "white",
    width: "100%",
    opacity: 0.8,
    position: "absolute",
    transform: "translateY(0%)",
  }));

  const MyCardHeader = styled(CardHeader)(({ theme }) => ({
    // border: "1px solid #b7ced9",
    backgroundColor: "1px solid #b7ced9",

    // height: "200px",
  }));

  const MyAvatar = styled(Avatar)(({ theme }) => ({
    border: "1px solid #b7ced9",
    // height: "100px",
  }));

  const MyCardMedia = styled(CardMedia)(({ theme }) => ({
    border: "1px solid #b7ced9",
    height: "300px",
  }));

  const MyCardContentBox = styled(Box)(({ theme }) => ({
    // display: "none",
    // color: "ButtonText",
    background: "white",
    width: "100%",
    opacity: 0,
    position: "absolute",
    bottom: 0,
    transition: 0.5,
    "&:hover": {
      opacity: 0.7,
      transition: 0.5,
    },
  }));

  const MyNoFoundText = styled(Typography)(({ theme }) => ({
    marginTop: "100px",
    backgroundColor: "#bdd7e2",
    padding: "50px",
    borderRadius: "10px",
  }));

  ////function part///////////////
  const [titleQuery, setTitleQuery] = useState("");
  const [imgCategory, setImgCategory] = useState("All");

  // from server
  const [imgPosts, setImgPosts] = useState([]);
  const [filteredImages, setFilteredImages] = useState(imgPosts);
  // const { users } = useContext(AuthContext);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await http.get(`/posts`);
        setImgPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPostData();
  }, []);

  //get all posts

  const handleChange = (event) => {
    setImgCategory(event.target.value);
  };

  // search method(filter)
  function search(items) {
    if (titleQuery)
      return items.filter((item) => item.title.includes(titleQuery));
    return items;
  }

  // category filter function
  useEffect(() => {
    const handleFilter = () => {
      doFilter(imgCategory, setFilteredImages, imgPosts);
    };
    handleFilter();
  }, [imgCategory, imgPosts]);

  // remove underline style
  const style = { textDecoration: "none" };

  return (
    <MyBox>
      <MyFormBox direction="row" gap={4}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search With Picture title..."
            onChange={(e) => setTitleQuery(e.target.value)}
            value={titleQuery}
            autoFocus
          />
        </Search>

        <MySelectBox>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={imgCategory}
              label="imgCategory"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="well-known">Well-Known</MenuItem>
              <MenuItem value="interview">Interview</MenuItem>
              <MenuItem value="events">Event</MenuItem>
              <MenuItem value="gallery">Gallery</MenuItem>
              <MenuItem value="politics">Politics</MenuItem>
              <MenuItem value="sport">Sport</MenuItem>
              <MenuItem value="social">Social</MenuItem>
              <MenuItem value="parliament">Parliament</MenuItem>
            </Select>
          </FormControl>
        </MySelectBox>
      </MyFormBox>

      {search(filteredImages).length !== 0 ? (
        <MyPostBox>
          {search(filteredImages).map((img) => (
            <Link to={`/posts/${img.id}`} key={img.id} style={style}>
              <MyCard key={img.id}>
                <MyUpperCardBox>
                  <MyCardHeader
                    avatar={
                      <MyAvatar
                        aria-label="recipe"
                        src={`../upload/${img?.userImg}`}
                      ></MyAvatar>
                    }
                    title={img.username}
                    subheader={moment(img.date).fromNow()}
                  />
                  <Typography variant="body2" color="text.secondary">
                    <strong>Title</strong>: {img.title}
                  </Typography>
                </MyUpperCardBox>
                <MyCardMedia
                  component="img"
                  height="100"
                  image={`../upload/${img?.img}`}
                  alt="Paella dish"
                />
                <MyCardContentBox>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Category</strong>: {img.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Disc</strong>: {img.disc}
                    </Typography>
                  </CardContent>
                </MyCardContentBox>
              </MyCard>
            </Link>
          ))}
        </MyPostBox>
      ) : (
        <MyNoFoundText>no result found</MyNoFoundText>
      )}
    </MyBox>
  );
}

export default Posts;
