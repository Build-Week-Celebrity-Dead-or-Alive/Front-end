import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "../AppStyles";

export default function Nav() {
  return (
    <StyledNav>
      <NavLink exact to='/'>Celebrity DoA</NavLink>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/login">
          LogIn
        </NavLink>
        <NavLink exact to="/signup">
          SignUp
        </NavLink>
      </div>
    </StyledNav>
  );
}
