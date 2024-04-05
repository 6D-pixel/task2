import { Link } from "react-router-dom";
export const BottomWarning = ({ label, to, buttonText }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{marginRight:'0.1rem'}}>{label}</div>
      <Link to={to}>{buttonText}</Link>
    </div>
  );
};
