import React from "react";
import { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <h2>Register</h2>
      <InputBox
        label="Name"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></InputBox>
      <InputBox
        label="email"
        type="email"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></InputBox>
      <InputBox
        label="password"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></InputBox>
      <div>
      <Button label="Register" onclick={async() => {}} ></Button>
      </div>
    </section>
  );
}

export default Register;
