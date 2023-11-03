import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 1240px;
  height: 500px;
  margin-top: 0.7rem;
  display: flex;
  padding: 0.3rem;
  background-color: orange;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem auto;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #eee;
  padding: 0.5rem;
  border-radius: 8px;

  img {
    width: 100%;
    height: 180px;
    border-radius: 8px;
  }
`;

const CBody = styled.p`
  font-size: 1rem;
  color: black;
`;

const CFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0.3rem;
  left: 0.3rem;
  right: 0.3rem;
`;

const BDetail = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px gray;
  padding: 0.3rem 1rem;
  background-color: red;
  font-size: 1rem;
  color: #eee;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: none;
  }
`;

const BSlider = styled(BDetail)``;

const SContainer = styled.div`
  position: absolute;
  left: 45%;
  bottom: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export {
  Container,
  CardContainer,
  Card,
  CBody,
  CFooter,
  BDetail,
  SContainer,
  BSlider,
};
