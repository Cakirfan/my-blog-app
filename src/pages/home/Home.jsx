import CreatorRankList from "../../components/creatorRankList/CreatorRankList";
import { HomeContainer, Image, RankList } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Image>
        <RankList>
          <CreatorRankList />
        </RankList>
      </Image>
    </HomeContainer>
  );
};

export default Home;
