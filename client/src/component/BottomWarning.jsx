import { Link } from "react-router-dom";
export const BottomWarning = ({ label, to, buttonText }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>{label}</div>
      <Link to={to}>{buttonText}</Link>
    </div>
  );
};
