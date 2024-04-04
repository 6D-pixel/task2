import { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <Button label="Login" onClick={async()=>{}} />
      </div>
    </section>
  );
};

export default Login;
