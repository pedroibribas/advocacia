import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginPending } from "../../helpers/contexts/AuthContext";
import { useAuth } from "../../helpers/providers/AuthProvider";
import { FormControl, FormGroup, LoaderContainer, LoaderContent } from "./styles";

export const LoginForm = () => {
  const { user, isSuccess, isLoading, isError, message, dispatch, loginUser } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: 'password'
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    };

    if (user || isSuccess) {
      navigate("/");
      window.location.reload();
    };
  }, [user, isSuccess, isError, message, navigate]);

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(loginPending());
    loginUser(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label>Email</label>
        <FormControl>
          <input
            type="email"
            id="email"
            required
            placeholder="ex.: joaosilva@dominio.com"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <label>Senha</label>
        <FormControl>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </FormControl>
      </FormGroup>

      {isLoading && (
        <LoaderContainer>
          <LoaderContent />
        </LoaderContainer>
      )}

      <FormGroup>
        <button type="submit">Enviar</button>
      </FormGroup>
    </form>
  )
};