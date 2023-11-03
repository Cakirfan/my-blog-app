import CreatorRankList from "../../components/home/creatorRankList/CreatorRankList";
import Bildung from "../../components/home/education/Bildung";
import { HomeContainer, Image, RankList } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Image>
        <Bildung />
        <RankList>
          <CreatorRankList />
        </RankList>
      </Image>
    </HomeContainer>
  );
};

export default Home;
