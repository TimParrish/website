import React from "react";
import { StyledLink, NavBarContainer } from "styles";

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <StyledLink type="first" to="/website/">
          HomePage
        </StyledLink>
        <StyledLink to="/website/github">GitHub API</StyledLink>
        <StyledLink type="last" to="/website/about">
          About Me
        </StyledLink>
      </NavBarContainer>
    </>
  );
}

export default NavBar;
