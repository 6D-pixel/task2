import { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <section>
      <h2>Login</h2>
      <InputBox
        label="Email"
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        label="Password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button
          label="Login"
          onClick={async () => {
            try {
              const res = await axios.post("http://localhost:3000/api/login", {
                email,
                password,
              });
              navigate("/profile?email=" + email);
            } catch (err) {
              if (err.response) {
                alert(err.response.data.msg);
              } else if (err.request) {
                alert("server not responding");
              } else {
                console.log(err);
              }
            }
          }}
        />
      </div>
    </section>
  );
};

export default Login;
