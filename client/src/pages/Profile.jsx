import React, { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";

function Profile() {
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  return (
    <section>
      <h2>Profile</h2>
      <InputBox
        label="Age"
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <InputBox
        label="DOB"
        type="date"
        placeholder="dd/mm/yyyy"
        onChange={(e) => setDob(e.target.value)}
      />
      <InputBox
        label="Contact"
        type="tel"
        placeholder="89123 45678"
        patten="[0-9]{10}"
      />
      <div>
        <Button label="Update" onClick={async () => {}} />
      </div>
    </section>
  );
}

export default Profile;
