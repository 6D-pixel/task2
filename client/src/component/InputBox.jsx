const InputBox = ({ onChange, label, placeholder, type, value }) => {
  return (
    <>
      <div style={{ textAlign: "left" }}>{label}</div>
      <input
        style={{
          borderRadius: "5px",
          margin: "10px",
          borderColor: "gray",
          padding: "10px",
        }}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default InputBox;
