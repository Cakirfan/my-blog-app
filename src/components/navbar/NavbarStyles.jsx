import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbarr = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 1rem;
  background-color: #000;
  color: #eee;
  box-shadow: 0 3px 3px #000;
`;

export const DuslerLogo = styled.div`
  font-size: 1rem;
  color: #eee;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    font-size: 1.05rem;
    font-weight: 600;
    background-color: #eee;
    color: #000;
    padding: 0.3rem 1rem;
    border-radius: 8px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-right: 2rem;
`;

export const MenuLink = styled(Link)`
  color: #eee;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    border-radius: 8px;
    border-bottom: 2px solid #eee;
  }
`;

export const MenuImage = styled.img`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #eee;
  }
`;

export const MenuImageDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuImageShow = styled.div`
  position: absolute;
  padding-bottom: .3rem;
  width: 8rem;
  height: 6rem;
  color: #000;
  top: 2.8rem;
  right: -0.8rem;
  border-radius: 9px;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  cursor: pointer;
`;

export const MenuImageShowLink = styled(MenuLink)`
  width: 100%;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0;
    outline: none;
    border-bottom: .07rem solid #eee;
  }
`;
