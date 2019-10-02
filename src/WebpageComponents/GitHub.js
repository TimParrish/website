import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Heading } from "styles";
import { Octocat } from "images";
import axios from "axios";
import styled from "styled-components";
import getYear from "date-fns/getYear";
import { Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

const BioDiv = styled.div`
  height: 80px;
  width: 600px;
  margin: auto;
  p {
    text-transform: underline;
    color: black;
  }
`;
const GitHubDiv = styled.div`
  height: 335px;
  width: 600px;
  margin: auto;
  background-color: grey;
  padding: 40px;
  border-radius: 25px;
  h3 {
    text-align: center;
    color: black;
  }
`;

const GitHubButton = styled.button`
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
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SmallOctocat = styled(Image)`
  height: 66px;
  width: 66px;
  float: right;
`;

function About() {
  const [numPublicRepos, setNumPublicRepos] = useState("");
  const [numPublicGists, setNumPublicGists] = useState("");
  const [latestCommit, setLatestCommit] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubYearJoined, setGitHubYearJoined] = useState("");
  let gitHubUserName = "TimParrish";
  let updateCounter = false;

  // const handleGitHubButtonSubmit = event => {
  //   console.log("button pressed");
  //   // window.location.href = "https://github.com/TimParrish/";
  // };

  useEffect(() => {
    axios.get(`https://api.github.com/users/${gitHubUserName}`).then(result => {
      setNumPublicRepos(result.data.public_repos);
      setLatestCommit(result.data.updated_at);
      setGitHubURL(result.data.html_url);
      setGitHubYearJoined(getYear(new Date(result.data.created_at)));
      setNumPublicGists(result.data.public_gists);
    });
  }, [gitHubUserName, updateCounter]);

  // TODO: format the date of hte last commit
  var commitDate = new Date(latestCommit);
  console.log(commitDate);

  return (
    <>
      <Heading>RESTful API Calls to GitHub</Heading>

      <BioDiv>
        <p>
          This uses Axios to make a HTTP GET request to the GitHub API and
          retrive the data based on a GitHub profile.
        </p>
      </BioDiv>

      {/* <Formik
        gitHubUserName={gitHubUserName}
        initialValues={{ name: `${gitHubUserName}` }}
        onSubmit={(values, actions) => {
          gitHubUserName = values.name;
          updateCounter = !updateCounter;
          console.log(`inside onSubmit: username is: ${gitHubUserName}`);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      /> */}

      {console.log(`outside formik: username is: ${gitHubUserName}`)}

      <GitHubDiv>
        <h3>GitHub RESTful API results:</h3>

        <Table striped bordered hover size="sm" variant="dark">
          <thead></thead>
          <tbody>
            <tr>
              <td>Github Username</td>
              <td>{gitHubUserName}</td>
            </tr>
            <tr>
              <td>Number of public repositories</td>
              <td>{numPublicRepos}</td>
            </tr>
            <tr>
              <td>Number of public gists</td>
              <td>{numPublicGists}</td>
            </tr>
            <tr>
              <td>Year joined</td>
              <td>{gitHubYearJoined}</td>
            </tr>
            <tr>
              <td>Most recent commit</td>
              <td>{latestCommit}</td>
            </tr>
            <tr>
              <td>Profile URL</td>
              <td>
                <a
                  href="https://github.com/TimParrish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {gitHubURL}
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </GitHubDiv>
      <a
        href="https://github.com/TimParrish/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubButton variant="link">
          <p>View my profile on GitHub</p>
          <SmallOctocat src={Octocat} />
        </GitHubButton>
      </a>
    </>
  );
}

export default About;
