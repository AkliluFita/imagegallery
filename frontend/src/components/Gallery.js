import styled from "@emotion/styled";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { imageGalleryList } from "../ImageData";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  marginTop: "60px",
}));

const MyTypography = styled(Typography)(({ theme }) => ({
  border: "1px solid #b7ced9",
  borderRadius: "10px",
  padding: "10px",
  marginTop: "40px",
}));

const MyImageList = styled(ImageList)(({ theme }) => ({
  border: "1px solid #b7ced9",
  padding: "10px",
}));

function Gallery() {
  return (
    <MyBox>
      <MyTypography variant="h3">Gallery Image List</MyTypography>
      <MyImageList
        sx={{ width: 1000, height: 950 }}
        variant="quilted"
        cols={4}
        rowHeight={147}
      >
        {imageGalleryList.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </MyImageList>
    </MyBox>
  );
}

export default Gallery;
