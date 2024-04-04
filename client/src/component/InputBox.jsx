import React from "react";

const InputBox = ({ onChange, label, placeholder,type,value }) => {
  return (
    <>
      <div>{label}</div>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </>
  );
};

export default InputBox;
