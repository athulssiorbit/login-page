import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignInPage from './Pages/SignInPage'
import HomePage from './Pages/HomePage'
import { styled } from 'styled-components'

const App = () => {
  return (
    <MainContainer className='apppp'>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <SignInPage /> */}

      </Routes>
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`