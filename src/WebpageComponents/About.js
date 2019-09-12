import React, { useEffect, useState } from "react";
import { Heading } from "styles";
import { Octocat } from "images";
import axios from "axios";
import styled from "styled-components";
import getYear from "date-fns/getYear";
import { Image, Button, Table } from "react-bootstrap";

const BioDiv = styled.div`
height: 400px;
width: 600px;
margin: auto;

`;
const GitHubDiv = styled.div`
  height: 200px;
  width: 600px;
  margin: auto;
  background-color: lightgreen;
  padding: 40px;
  border-radius: 25px;
`;

const GitHubButton = styled(Button)`
  height: 85px;
  width: 150px;
  border-radius: 15px;
  background-color: lightgrey;
  :hover {
    background-color: black;
    color: white;
  }
  p {
    width: 60px;
    float: left;
    font-size: 11px;
  }
`;

const SmallOctocat = styled(Image)`
  height: 66px;
  width: 66px;
  float: right;
`;

function About() {
  const [numPublicRepos, setNumPublicRepos] = useState("");
  const [latestCommit, setLatestCommit] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubYearJoined, setGitHubYearJoined] = useState("");
  let gitHubUserName = "TimParrish";

  const handleGitHubButtonSubmit = event => {
    console.log("button pressed");
    // window.location.href = "https://github.com/TimParrish/";
  };

  useEffect(() => {
    axios.get(`https://api.github.com/users/${gitHubUserName}`).then(result => {
      setNumPublicRepos(result.data.public_repos);
      setLatestCommit(result.data.updated_at);
      setGitHubURL(result.data.html_url);
      setGitHubYearJoined(getYear(new Date(result.data.created_at)));
    });
  }, [gitHubUserName]);

  // TODO: format the date of hte last commit
  var commitDate = new Date(latestCommit);
  console.log(commitDate);

  return (
    <>
      <Heading>Hello there this is the future home of about me!</Heading>

    <BioDiv>
      <p>I enjoy working in teams where we learn from each other and share our knowledge. 
        Every member of a team can bring a unique perspective to the table and when a team works well together, 
        the results are incredible! Having worked on multiple teams in various roles, I have had the incredible 
        opportunity to learn about both the front-end and back-end of computer programming. I enjoy the fast pace 
        that front-end development offers and am currently working to further my front-end knowledge through side 
        projects and my final courses at Montana State University. One of the things that draws me towards 
        front-end or full-stack development is the user's experience. Putting myself in the shoes of the end-user 
        of the code as I create it gives me a fun and unique perspective when developing and testing it.</p>

      <p>Working with home automation first sparked my interest in programming and I have studied a broad range 
        of disciplines including CISCO Networking, Computer Information Systems, Business Management, and have 
        now found my true passion in Computer Science. Computer programming is an exciting journey where I am 
        constantly discovering new things to learn and practice. I developed problem-solving skills during my 
        past career with the Geek Squad and am now applying those skills to Computer Science.</p>

      <p>On my GitHub profile, you will find some of the side projects that I have done to further my knowledge 
        and have some fun outside of professional and academic environments.</p>
      </BioDiv>

      <GitHubDiv>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        For the user {gitHubUserName}, {numPublicRepos} public repos were found.
        latestCommit was {latestCommit}, date joined: {gitHubYearJoined}, URL:{" "}
        {gitHubURL}
        <a
          href="https://github.com/TimParrish/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubButton variant="link" onClick={handleGitHubButtonSubmit}>
            <p>View my profile on GitHub</p>
            <SmallOctocat src={Octocat} />
          </GitHubButton>
        </a>
      </GitHubDiv>
    </>
  );
}

export default About;
