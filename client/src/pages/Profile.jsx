import { useState, useEffect } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Logout from "../component/Logout.";
function Profile() {
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [searchParams] = useSearchParams();
  // const [email, setEmail] = useState("");
  const email = searchParams.get("email");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/userinfo?email=${email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAge(res.data.age);
      setDob(res.data.dob);
      setContact(res.data.mobile);
    };
    fetchUser();
  }, []);
  return (
    <section>
      <h2>Profile</h2>
      <InputBox
        label="Age"
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <InputBox
        label="DOB"
        type="date"
        placeholder="dd/mm/yyyy"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <InputBox
        label="Contact"
        type="tel"
        placeholder="89123 45678"
        patten="[0-9]{10}"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <div>
        <Button
          label="Update"
          onClick={async () => {
            try {
              await axios.put(
                `http://localhost:3000/api/update/userinfo`,
                {
                  email,
                  age,
                  dob,
                  contact,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
            } catch (err) {
              if (err.response) {
                alert(err.response.data.msg);
              } else if (err.request) {
                alert("Something went wrong");
              } else {
                console.log(err);
              }
            }
          }}
        />
        <Logout/>
      </div>
    </section>
  );
}

export default Profile;
