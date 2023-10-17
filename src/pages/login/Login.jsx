import React from "react";
import { FormTitel, LoginAvatar, LoginBtn, LoginContainer, LoginInput } from "./LoginStyles";
import avatar from "../../assets/images/avatar.webp"

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginAvatar src={avatar} />
        <FormTitel>
          Sign In
        </FormTitel>
        <LoginInput type="text" placeholder="Enter Your Name..." />
        <LoginInput type="password" placeholder="Enter Your Password..." />
        <LoginInput type="password" placeholder="Confirm Password..." />
        <LoginBtn>Login</LoginBtn>
      </LoginContainer>
    </>
  );
};

export default Login;
