import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import menu from '../assets/menu.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleAction = () => {
    setOpen(!open);
  };


  return (
    <NavbarCont>
      <HeaderContainer>
        <h1>Countries</h1>
        <img src={menu} alt=""  onClick={handleAction} />
      </HeaderContainer>
      <MenuItems open={open}>
        <li> <Link to="/all" className="selected">All</Link></li>
        <li> <Link to="/">Asia</Link></li>
        <li> <Link to="/">Europe</Link></li>
      </MenuItems>
    </NavbarCont>
  );
};

export default Navbar;

const NavbarCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin:2rem 0;
  img{
    display:none;
    @media (max-width: 768px) {
     display:block;
     }
  }

  h1{
    font-size:1.6rem;
    font-weight:700;
    color: var(--primary-color);
    @media (max-width: 768px) {
      font-size:1.2rem;
     }
  }

  ul {
   
  }

  @media (max-width: 768px) {
   padding:0 1.2rem;
   flex-direction: column;
  }
`;

const HeaderContainer = styled.div`
  display:flex;
  justify-content: space-between;
}
`

const MenuItems = styled.ul`
display: flex;
align-items: center;
gap:1rem;
li{
  list-style: none;
}

a{
  text-decoration-line: none;
  padding-bottom:10px
  color:#8B8B8B;

}
.selected {
text-decoration-line: underline;
color: var(--primary-color);
}

@media (max-width: 768px) {
 display: ${props => (props.open ? 'flex' : 'none')};
 flex-direction: column;
 transition: transform 0.5s ease-in-out;
  }

`
