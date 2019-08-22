import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/blackjack">Blackjack</NavLink>
    </>
  );
}

export default NavBar;
