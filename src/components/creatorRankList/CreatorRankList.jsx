import React from "react";
import {
  Box,
  Content,
  H4,
  ImgBox,
  List,
  P,
  Rank,
  RankContainer,
  RankTitle,
} from "./CreatorRankListStyles";
import { RankData } from "../../helpers/data";

const CreatorRankList = () => {
  return (
    <>
    <RankContainer>
      <RankTitle>Popular Creator Rank List</RankTitle>
      <Box>
        {RankData.map((rank) => (
          <List key={rank.rankId}>
            <ImgBox>
              <img src={rank.image} alt="" />
            </ImgBox>
            <Content>
              <Rank>
                <small>#</small>
                {rank.rankId}
              </Rank>
              <H4>{rank.fullname}</H4>
              <P>{rank.job}</P>
            </Content>
          </List>
        ))}
      </Box>
    </RankContainer>    
    </>
    
  );
};

export default CreatorRankList;
