import Button from "./Button";
import {useNavigate} from "react-router-dom";

const Logout =() =>{
    const navigate = useNavigate();
    return (
        <Button
            label="Logout"
            onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
            }}
        />
    )
}

export default Logout;