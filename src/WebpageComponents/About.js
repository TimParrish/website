import React from "react";
import { Heading } from "styles";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto 25px auto;
  width: 700px;
  height: 38px;
  padding: 0px;
`;

const Link = styled.div`
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: darkblue;
    display: block;
    padding: 10px 34px;
    background-color: grey;
    float: left;
    width: 60 px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const BioDiv = styled.div`
  height: 400px;
  width: 600px;
  margin: auto;
  p {
    color: black;
  }
`;

function About() {
  return (
    <>
      <Heading>Hello! Here is a little about me!</Heading>

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
          in my portfolio and on my GitHub page.
        </p>
      </BioDiv>
      <LinksContainer>
        <Link>
          <a
            href="https://timothyparrish.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </Link>
        <Link>
          <a
            href="https://github.com/TimParrish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </Link>
      </LinksContainer>
    </>
  );
}

export default About;
