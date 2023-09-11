import React from "react";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <NavbarCont>
      <h1>Countries</h1>
      <ul>
        <li>All</li>
        <li>Asia</li>
        <li>Europe</li>
      </ul>
    </NavbarCont>
  );
};

export default Navbar;

const NavbarCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    gap:1rem;
    li {
      list-style: none;
    }
  }
`;
