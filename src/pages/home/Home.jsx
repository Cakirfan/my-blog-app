import React from "react";
import CreatorRankList from "../../components/creatorRankList/CreatorRankList";
import { HomeContainer, HomeRankList, Left } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Left>
        <img
          src=""
          alt=""
        />
      </Left>
      <HomeRankList>
        <CreatorRankList />
      </HomeRankList>
    </HomeContainer>
  );
};

export default Home;
