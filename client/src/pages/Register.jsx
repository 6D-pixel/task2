import { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../component/BottomWarning";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <section>
      <h2 >Register</h2>
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
        <Button
          label="Register"
          onClick={async () => {
            try {
              const response = await axios.post(
                `${process.env.VITE_VERCEL_API}/register`,
                {
                  name,
                  email,
                  password,
                }
              );
              navigate("/login");
            } catch (err) {
              if (err.response) {
                alert(err.response.data.msg);
              } else if (err.request) {
                alert("No response received from the server");
              } else {
                console.log(err);
              }
            }
          }}
        ></Button>
        <BottomWarning
          label="have an account?"
          buttonText="Login"
          to="/login"
        />
      </div>
    </section>
  );
}

export default Register;
