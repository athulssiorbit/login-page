import React from 'react'
import { styled } from 'styled-components'

const CardView = ({country,flag,region}) => {
  return (
    <CardContainer>
        <img src={flag} alt="" />
        <div>
            <p>{country}</p>
            <p>{region}</p>
        </div>
    </CardContainer>
  )
}

export default CardView

const CardContainer = styled.div`
display:flex;
gap:1rem;
border: 2px solid var(--primary-color);
align-items: center;
width:33rem;
padding:.7rem;
background-color:#FFFFFF;
box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.12);
    img {
        height:6rem;
        width:8rem;
        @media (max-width: 768px) {
          height:3rem;
          width:3rem;
         }   
    }

    p:first-child {
      font-size:1.5rem;
      color: var(--primary-color);
      font-weight:600;
      @media (max-width: 768px) {
        font-size:1rem;
      }
    }
    p:last-child {
      font-size:1rem;
      color: #6F6F6F;
      font-weight:400;
      @media (max-width: 768px) {
        font-size:.8rem;
      }
    }
@media (max-width: 768px) {
 margin:0 .8rem;
}     
`
