import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 550px;
  width: 60%;
  max-width: 450px;
  margin: 3rem auto;
  padding: 2rem;
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

export const RegisterForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormTitel = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: -0.7rem;
  margin-bottom: 0.5rem;
  margin-left: -0.7rem;
`;

export const RegisterAvatar = styled.img`
  width: 55px;
  height: 60px;
  border-radius: 50%;
  margin: 1rem auto;
  color: orangered;
`;

export const FormInputGrup = styled.div`
  width: 100%;
  margin-left: -0.7rem;
`;

export const FormInput = styled.input`
  padding: 0.5rem 0.7rem;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid red;
  margin: 0.1rem auto;

  &:focus {
    outline: outset;
    outline-color: orange;
  }
`;

export const FormInputLabel = styled.label`
  font-weight: 600;
`;

export const BtnGrup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.1rem auto;
`;

export const RegisterBtn = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 0.7rem;
  background-color: orangered;
  width: 100%;
  color: #eee;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff6666;
  }
`;

export const RegisterBtn2 = styled(RegisterBtn)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
