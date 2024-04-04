import React from "react";

const InputBox = ({ onChange, label, placeholder,type }) => {
  return (
    <>
      <div>{label}</div>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default InputBox;
