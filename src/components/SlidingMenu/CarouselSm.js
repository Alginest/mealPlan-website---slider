import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: "100%",
    backgroundColor: "#00008B",
    color: "#fff",
    margin: "0 15px;",
    fontSize: "4em",
  },
}));
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const CarouselSm = () => {
  const classes = useStyles();
  return (
    <Carousel breakPoints={breakPoints} className={classes.carousel}>
      <div className={classes.item}>One</div>
      <div className={classes.item}>Two</div>
      <div className={classes.item}>Three</div>
    </Carousel>
  );
};

export default CarouselSm;
