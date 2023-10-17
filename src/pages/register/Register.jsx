import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <RegisterContainer>
      <RegisterAvatar src={avatar} />
      <FormTitel>Sign Up</FormTitel>
      <RegisterForm onSubmit={handleSubmit}>
        <FormInputGrup>
          <FormInputLabel htmlFor="firstName">First Name</FormInputLabel>
          <FormInput
            type="text"
            name="firstname"
            id="firstName"
            placeholder="Enter Your Name..."
            required
            value={data.firstname}
            onChange={handleChange}
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="lastName">Last Name</FormInputLabel>
          <FormInput
            type="text"
            name="lastname"
            id="lastName"
            placeholder="Enter Your Surname..."
            required
            value={data.lastname}
            onChange={handleChange}
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="email">Email</FormInputLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email..."
            required
            value={data.email}
            onChange={handleChange}
          />
        </FormInputGrup>
        <FormInputGrup>
          <FormInputLabel htmlFor="password">Password</FormInputLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password..."
            required
            value={data.password}
            onChange={handleChange}
          />
        </FormInputGrup>
        <BtnGrup>
          <Link to="/" style={{ width: "100%" }}>
            <RegisterBtn type="submit">Register</RegisterBtn>
          </Link>
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
