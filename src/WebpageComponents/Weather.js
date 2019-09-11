import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "styles";
import styled from "styled-components";

const WeatherDiv = styled.div`
  height: 200px;
  width: 600px;
  background-color: lightblue;
  margin: auto;
`;

function Weather() {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=59047&APPID=7380c45576916359321eb579dd412930&units=imperial`
      )
      .then(result => {
        setTemp(result.data.list[0].main.temp);
      });
  }, []);

  return (
    <>
      <Heading>Hello there this is the future home of Weather!</Heading>

      {/* <Image src="https://openweathermap.org/img/w/10d.png" rounded /> */}
      <WeatherDiv>
        <h2>{temp}</h2>
      </WeatherDiv>
    </>
  );
}

export default Weather;
