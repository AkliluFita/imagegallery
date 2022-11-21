import { Box, Button, styled, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { items } from "../ImageData";

function Header() {
  const MyBox = styled(Box)(({ theme }) => ({
    height: "800px",
    width: "100%",
    // backgroundColor: "#b3f6ac",
    padding: "5px",
    // border: "1px solid black",
    zIndex: 2,
    marginTop: "90px",
  }));

  return (
    <MyBox>
      <Carousel>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </MyBox>
  );
}

export default Header;

function Item(props) {
  const MySlideTex = styled(Box)(({ theme }) => ({
    border: "1px solid #eff3f5",
  }));

  const MYImage = styled("img")(({ theme }) => ({
    height: "650px",
    width: "100%",
  }));

  return (
    <Paper>
      <MySlideTex>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </MySlideTex>
      <MYImage src={props.item.img} alt="" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
