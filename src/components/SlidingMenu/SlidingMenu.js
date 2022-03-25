import { Box, Container } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import breakfastMenu from "../../images/breakfast_menu.jpg";
import CarouselSm from "./CarouselSm";

const SlidingMenu = () => {
  const classes = useStyles();
  return (
    <section className={classes.slideMenu}>
      <Container className={classes.bigCont}>
        <Box className={classes.blueBox}>
          <Box className={classes.imageLeft}>
            <img src={breakfastMenu} alt="milk" className={classes.img} />
          </Box>
          <Box className={classes.rightBox}></Box>
        </Box>
      </Container>
    </section>
  );
};

export default SlidingMenu;
