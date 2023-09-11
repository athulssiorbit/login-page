import React from "react";
import { styled } from "styled-components";
import HorizontalDividerWithText from "./Divder";
import RoundedButtons from "./RoundedButtons";
import { useNavigate } from "react-router-dom";
import { LoginButtons } from "../Designs";

const SignInForm = () => {

  const nav = useNavigate()
  const handleSignIn = () => {
    //After successfull login
    nav("/home")
  }

  return (
    <SignInFormMainContainer>
      <SignInformCont>
        <HeaderContainer>
        <h3>Sign in</h3>
          <p>
            New user ? <span>Create an account</span>
          </p>
        </HeaderContainer>
        <TextBox type="text" placeholder="Username or email" />
        <TextBox type="password" placeholder="password" />
        <label>
          <CheckBox type="checkbox" name="" id="" />
          Keep me signed in
        </label>
        <SignInButton onClick={handleSignIn}>Sign in</SignInButton>{" "}
        <HorizontalDividerWithText text="Or Sign In With" />
        <LoginButtons>
          <RoundedButtons link="#google" icon="google_icon" />
          <RoundedButtons link="#fb" icon="fb_icon" />
          <RoundedButtons link="#linkedin" icon="linked_icon" />
          <RoundedButtons link="#twitter" icon="x_icon" />
        </LoginButtons>
      </SignInformCont>
    </SignInFormMainContainer>
  );
};

export default SignInForm;

const SignInFormMainContainer = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;


  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const SignInformCont = styled.div`
  display: flex;
  max-width: 18rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  label {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 17.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 700;

    span {
      font-weight: 600;
      color: #587fff;
    }
  }
`;

// const LoginButtons = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

const SignInButton = styled.button`
  width: 17.5rem;
  padding: 0.7rem 0;
  background-color: var(--primary-color);
  color: #fcfcfc;
  font-size: 1rem;
`;

const CheckBox = styled.input`
  height: 2rem;
  width: 2rem;
  background-color: #f2f2f2;
  border: 2px solid var(--primary-color);
`;
const TextBox = styled.input`
  width: 17.5rem;
  font-size: 1rem;
  border: 2px solid var(--primary-color);
  padding: 1rem;

  &::placeholder {
    font-size: 1rem;
    color: var(--primary-color);
  }
`;

const HeaderContainer = styled.div`
  width:17.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  h3{

      font-size:2rem;
      font-weight:700;
      
  }
  
  @media (max-width: 768px) {
    align-items: center;
  }
`
