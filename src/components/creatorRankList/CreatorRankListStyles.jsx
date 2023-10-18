import styled from "styled-components";

const RankContainer = styled.div`
  max-width: 350px;
  padding: 0.7rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border: 2px solid blue;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 5px black inset, 3px 5px 5px black;
`;

const RankTitle = styled.h2`
  text-align: center;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
`;

const List = styled.div`
  position: relative;
  height: 62px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  background-color: #fff;

  &:hover {
    box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.15);
    transform: scale(1.15);
    filter: blur(0) !important;
    opacity: 1 !important;
  }

  ${Box}:hover & {
    filter: blur(5px);
    opacity: 0.25;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
`;

const Rank = styled.div`
  position: absolute;
  right: -50px;
  color: #03a9f4;
  transition: 0.5s;
  font-size: 2em;

  small {
    font-weight: 500;
    opacity: 0.25;
  }

  ${List}:hover & {
    right: 20px;
  }
`;

const H4 = styled.h4`
  line-height: 5px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 0.75em;
  margin-top: -0.5rem;
`;

export { RankContainer, RankTitle, Box, List, ImgBox, Content, Rank, H4, P };

/* 

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RankTitle = styled.h2`
  text-align: center;
`;

export const RankList = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  background-color: #fff;

  &:hover {
    box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.15);
    transform: scale(1.15);
    filter: blur(0px);
    opacity: 1;
  }
`;

export const RankBox = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  margin-right: 2rem;

  &:hover {
    filter: blur(5px);
    opacity: 0.25;
  }

  &:hover + ${RankList} {
    filter: blur(5px);
    opacity: 0.25;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
`;

export const Rank = styled.h2`
  position: absolute;
  right: -50px;
  color: #03a9f4;
  transition: 0.5s;
  font-size: 2em;
`;

export const ContentTitle = styled.h4`
  line-height: 1.2em;
  font-weight: 600;
`;

export const ContentParaf = styled.p`
  font-size: 0.75em;
`;
*/
