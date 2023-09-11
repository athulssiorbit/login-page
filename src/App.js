import React from 'react'
import SignInPage from './Pages/SignInPage'
import HomePage from './Pages/HomePage'
import { styled } from 'styled-components'

const App = () => {
  return (
    <MainContainer className='apppp'>
      {/* <SignInPage /> */}
      <HomePage />
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`