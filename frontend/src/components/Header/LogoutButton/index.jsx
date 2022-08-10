import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../helpers/providers/AuthProvider";
import { Button } from "./styles";

export const LogoutButton = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logoutUser();
    navigate("/login");
    window.location.reload();
  };

  return (
    <Button onClick={handleClick}>
      Sair <MdLogout />
    </Button>
  );
};