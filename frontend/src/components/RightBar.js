import {
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { itemData } from "../ImageData";

function RightBar({ rightBarStyle }) {
  const MyBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#eff3f5",
    flex: "1", //its already flexed
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    // border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    zIndex: -1,
  }));

  // const MyBoxWrap = styled(Box)(({ theme }) => ({
  //   position: "fixed",
  //   top: "50px",
  //   marginTop: "60px",
  // }));

  const MyImageBox = styled(Box)(({ theme }) => ({
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const MyTaskBox = styled(Box)(({ theme }) => ({
    border: "1px solid #b7ced9",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const MyTaskList = styled(Box)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  }));

  return (
    <MyBox>
      {/* <MyBoxWrap sx={rightBarStyle}> */}
      <MyImageBox>
        <Typography variant="h5">recent Post images</Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </MyImageBox>

      <MyTaskBox>
        <Typography variant="h5">Service</Typography>
        <MyTaskList>
          <span>Service one</span>
          <span>Service two</span>
          <span>Service three</span>
          <span>Service four</span>
          <span>Service five</span>
        </MyTaskList>
      </MyTaskBox>
      {/* </MyBoxWrap> */}
    </MyBox>
  );
}

export default RightBar;
