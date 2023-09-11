import React from 'react'
import { styled } from 'styled-components'

const CardView = () => {
  return (
    <CardContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" srcset="" />
        <div>
            <p>Country</p>
            <p>Region</p>
        </div>
    </CardContainer>
  )
}

export default CardView

const CardContainer = styled.div`

display:flex;
border: 2px solid var(--primary-color);
align-items: center;
width:33rem;
background-color:#FFFFFF;
    img {
        height:6rem;
        width:8rem;
    }
`
