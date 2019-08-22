import React from "react";
import SedanMT from "images/Sedan-MT.jpg";
import BigHorn from "images/bigHornSheep.jpg";
import BuckElkRMNP from "images/buckElkRMNP.jpg";
import BuckElkYNP from "images/buckElkYNP.jpg";
import Chipmunk from "images/chipmunk.jpg";
import Chipmunk2 from "images/chipmunk2.jpg";
import ChipmunkRMNP from "images/chipmunkRMNP.jpg";
import { Heading, CenteredP } from "styles";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

function Homepage() {
  return (
    <>
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={1}
          enableScroll
          clickable={true}
          active={0}
          enableHeading={false}
          currentFigureScale={2}
          media={{
            "@media (max-width: 900px)": {
              width: "100%",
              height: "auto"
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px"
            }
          }}
        >
          <img
            src={SedanMT}
            alt="Sedan, Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={BigHorn}
            alt="Yellowstone National Park, Wyoming"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={BuckElkRMNP}
            alt="Buck Elk in Rocky Mountain National Park, CO"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={Chipmunk}
            alt="Chipmonk 1"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={Chipmunk2}
            alt="Chipmonk 2"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={ChipmunkRMNP}
            alt="Chipmonk Rocky Mountain National Park, CO"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={BuckElkYNP}
            alt="Buck Elk in Yellowston National Park, Wyoming"
            data-action="http://timparrish.github.io/website"
          />
        </Coverflow>
        <Heading>Welcome to my first deployed React App!</Heading>
        <CenteredP>
          This is still a work in progress but will eventually replace the
          static site that can be found at{" "}
          <a href="http://www.timothyparrish.com">www.timothyparrish.com</a>
        </CenteredP>
      </StyleRoot>
    </>
  );
}

export default Homepage;
