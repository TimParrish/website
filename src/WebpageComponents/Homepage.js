import React from "react";
import {
  SedanMT,
  BigHorn,
  BuckElkRMNP,
  BuckElkYNP,
  Chipmunk,
  Chipmunk2,
  ChipmunkRMNP,
  MarmutRMNP,
  OldTruckJacksonCreek,
  WaterfallGrandCanyonYellowstone,
  CentralMontana,
  CentralMontana2,
  CentralMontana3,
  CentralMontana4,
  CentralMontana5,
  CentralMontana6
} from "images";
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
          <img
            src={MarmutRMNP}
            alt="Marmut Rocky Mountain National Park, CO"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={OldTruckJacksonCreek}
            alt="Old truck in Jackson Creek, MT"
            data-action="http://timparrish.github.io/website"
          />
          {/* <img
            src={WaterfallGrandCanyonYellowstone}
            alt="Waterfall in the Grand Canyon of Yellowstone National Park, WY"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana2}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana3}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana4}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana5}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          />
          <img
            src={CentralMontana6}
            alt="Central Montana"
            data-action="http://timparrish.github.io/website"
          /> */}
        </Coverflow>
        <Heading>Welcome to my first deployed React App!</Heading>
        <CenteredP>
          This is still a work in progress but will eventually replace the
          static site that can be found at{" "}
          <a href="https://timparrish.github.io/legacy_website/index.html">
            https://timparrish.github.io/legacy_website/index.html
          </a>
        </CenteredP>
      </StyleRoot>
    </>
  );
}

export default Homepage;
