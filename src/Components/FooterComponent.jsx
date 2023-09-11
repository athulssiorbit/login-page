import React from 'react'
import styled from 'styled-components'
import { LoginButtons } from '../Designs'
import RoundedButtons from './RoundedButtons'

const FooterComponent = () => {
    return (
        <FooterContainer>
            <LoginButtons>
                <RoundedButtons link="#google" icon="google_icon" />
                <RoundedButtons link="#fb" icon="fb_icon" />
                <RoundedButtons link="#linkedin" icon="linked_icon" />
                <RoundedButtons link="#twitter" icon="x_icon" />
            </LoginButtons>
            <p>Example@mail.com</p>
            <p>Copyright © 2020 Name. All rights reserved.</p>
        </FooterContainer>
    )
}

export default FooterComponent

const FooterContainer = styled.div`
    margin-top: 9rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1.6rem;
    // bottom:0;
    // position:absolute;
    p {
        font-size:.8rem;
        font-weight:700;
        color:var(--pimary-color)
    }

`