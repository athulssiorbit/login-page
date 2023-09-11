import React from "react";
import SignInForm from "../Components/SignInForm";
import { styled } from "styled-components";
import illustration from '../assets/Illustration.svg'

const SignInPage = () => {
  return (
    <MainSignInContainer>
      <SignInForm />
      <IllustrationContainer>
        <img src={illustration} alt=""/>
      </IllustrationContainer>
    </MainSignInContainer>
  );
};

export default SignInPage;

const MainSignInContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const IllustrationContainer = styled.div`
  width: 50vw;
  display:flex;
  justify-content:center;

  @media (max-width: 768px) {
    display:none;
  }

`;
