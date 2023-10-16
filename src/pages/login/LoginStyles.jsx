import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 550px;
  width: 60%;
  max-width: 450px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border: 3px solid red;
  border-radius: 8px;
  box-shadow: 3px 5px 15px #000, 0 5px 9px #000 inset;
`;

export const LoginAvatar = styled.img`
  height: 75px;
  border-radius: 50%;
  margin-bottom: 3rem;
`;

export const LoginInput = styled.input`
  padding: 1rem 1rem;
  width: 80%;
  border: none;
  outline: none;
  border-bottom: 2px solid red;
`;

export const LoginBtn = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 0.7rem 1rem;
  background-color: orangered;
  width: 50%;
  color: #eee;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ff6666;
  }
`;
