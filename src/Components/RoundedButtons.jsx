import React from "react";
import { styled } from "styled-components";
import google_icon from "../assets/google_icon.svg";
import fb_icon from "../assets/fb_icon.svg";
import linked_icon from "../assets/linked_icon.svg";
import x_icon from "../assets/x_icon.svg";


const RoundedButtons = ({ text,icon,link }) => {
    const icons = {
        fb_icon,
        linked_icon,
        x_icon,
        google_icon
    }

  return (
    <a href={link}>
      <RoundIconButtons>
        <img src={icons[`${icon}`]} alt="" />
      </RoundIconButtons>
    </a>
  );
};

export default RoundedButtons;

const RoundIconButtons = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px var(--primary-color) solid;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 1.3rem;
    width: 1.3rem;
  }

  &hover:{
    cursor:pointer;
  }
`;
