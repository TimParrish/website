import React from "react";
import { Heading } from "styles";
import styled from "styled-components";

const BioDiv = styled.div`
  height: 400px;
  width: 600px;
  margin: auto;
`;

function About() {
  return (
    <>
      <Heading>Hello here is a little about me!</Heading>

      <BioDiv>
        <p>
          I enjoy working in teams where we learn from each other and share our
          knowledge. Every member of a team can bring a unique perspective to
          the table and when a team works well together, the results are
          incredible! Having worked on multiple teams in various roles, I have
          had the incredible opportunity to learn about both the front-end and
          back-end of computer programming. I particularly enjoy putting myself
          in the shoes of the end-user as I develop and test my code.
        </p>

        <p>
          Working with home automation first sparked my interest in programming
          and I have studied a broad range of disciplines including CISCO
          Networking, Computer Information Systems, Business Management, and
          have now found my true passion in Computer Science. Computer
          programming is an exciting journey where I am constantly discovering
          new things to learn and practice. I developed problem-solving skills
          during my past career with the Geek Squad and am now applying those
          skills to Computer Science.
        </p>

        <p>
          Some side-projects that I have done to further my knowledge are listed
          in my portfolio. https://timothyparrish.com/ You can also see more of
          my work on my GitHub page. https://github.com/TimParrish/
        </p>
      </BioDiv>
    </>
  );
}

export default About;
