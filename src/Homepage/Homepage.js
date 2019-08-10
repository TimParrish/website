import React from "react";
import SedanMT from "images/Sedan-MT.jpg";
import { Heading, HeroImg, CenteredP } from "styles";

function Homepage() {
  return (
    <>
      <HeroImg src={SedanMT} alt="Sedan, Montana" />
      <Heading>Welcome to my first deployed React App!</Heading>
      <CenteredP>
        This is still a work in progress but will eventually replace the static
        site that can be found at www.timothyparrish.com
      </CenteredP>
    </>
  );
}

export default Homepage;
