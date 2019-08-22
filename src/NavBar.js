import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to="/website/">HomePage</NavLink>
      <NavLink to="/website/blackjack">Blackjack</NavLink>
    </>
  );
}

export default NavBar;
