const Button = ({ onClick, label }) => {
  return (
    <button
      style={{ borderRadius: "5px", margin: "10px", borderColor: "black" }}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
