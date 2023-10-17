import React from "react";
import {
  BtnGrup,
  FormInput,
  FormInputGrup,
  FormInputLabel,
  FormTitel,
  RegisterAvatar,
  RegisterBtn,
  RegisterBtn2,
  RegisterContainer,
  RegisterForm,
} from "./RegisterStyles";
import avatar from "../../assets/images/avatar-2.webp";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm>
        <RegisterAvatar src={avatar} />
        <FormTitel>Sign Up</FormTitel>
        <FormInputGrup>
          <FormInputLabel htmlFor="firstName">First Name</FormInputLabel>
          <FormInput
            type="text"
            name="firstname"
            id="firstName"
            className="peer"
            placeholder="Enter Your Name..."
            required
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="lastName">Last Name</FormInputLabel>
          <FormInput
            type="text"
            name="lastname"
            id="lastName"
            className="peer"
            placeholder="Enter Your Surname..."
            required
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="email">Email</FormInputLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            className="peer"
            placeholder="Enter Your Email..."
            required
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="password">Password</FormInputLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            className="peer"
            placeholder="Enter Your Password..."
            required
          />
        </FormInputGrup>
        <BtnGrup>
          <RegisterBtn type="submit">Register</RegisterBtn>
          <RegisterBtn2 type="button">
            Continue with Google
            <FcGoogle style={{ fontSize: "1.5rem" }} />
          </RegisterBtn2>
        </BtnGrup>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
