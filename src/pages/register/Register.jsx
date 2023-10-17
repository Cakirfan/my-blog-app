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

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verileri bir nesne içinde toplayabilirsiniz.
    const userData = {
      name,
      lastName,
      password,
      email,
    };
    console.log(userData);

    // userData nesnesini kullanarak yapmak istediğiniz işlemi gerçekleştirebilirsiniz.
    // Örneğin, bu verileri bir API'ye göndermek isteyebilirsiniz.

    // console.log("Gönderilecek veriler:", userData);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
