import { Logout } from "../../helpers/actions/AuthActions";
import { useAuth } from "../../helpers/hooks/useAuth";

export const LogoutButton = () => {
  const { dispatch } = useAuth();

  const handleClick = () => {
    dispatch(Logout());
    window.location.reload();
  };

  return (
    <button onClick={handleClick}>Logout</button>
  );
};