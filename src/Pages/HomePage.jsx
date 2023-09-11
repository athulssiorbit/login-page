import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { styled } from "styled-components";
import CardView from "../Components/CardView";
const HomePage = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <HomepageContainer>
      <Navbar />
      <CardList>
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </CardList>
    </HomepageContainer>
  );
};

export default HomePage;

const HomepageContainer = styled.div`
  padding: .5rem;
  width: 68rem;
`;

const CardList = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:1rem;
   
`
