import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { styled } from "styled-components";
import CardView from "../Components/CardView";
import FooterComponent from "../Components/FooterComponent";
import { getApi } from "../webservice/websevice";


const HomePage = () => {

  const [countryData, setCountryData] = useState([])
  const [pageRange, setPageRange] = useState({
    from: 0,
    to: 12
  })

 
  useEffect(() => {
    
      getApi("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => {
        setCountryData(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <HomepageContainer>
      <Navbar />
      <CardList>
        {
          countryData && countryData.slice(pageRange.from, pageRange.to).map((item, index) => {
            return (
              <CardView key={index} country={item.name} flag={item.flag} region={item.region}  />
            )
          })
        }
      </CardList>
      <FooterComponent />
    </HomepageContainer>
  );
};

export default HomePage;

const HomepageContainer = styled.div`
  padding: .5rem;
  width: 68rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardList = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:1rem;
   
`
