import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginPending } from "../../../helpers/actions/AuthActions";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { Loader } from "../../Loader";
import { Container, FormControl, FormGroup } from "./styles";

export const Form = () => {
  const { user, isSuccess, isLoading, isError, message, dispatch, loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const userData = { email, password };

    dispatch(LoginPending());
    loginUser(userData);

    e.preventDefault();
  };

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Container onSubmit={handleSubmit}>
      <FormGroup>
        <label>Email</label>
        <FormControl>
          <input
            type='email'
            id="email"
            required
            placeholder="ex.: joaosilva@dominio.com"
            onChange={handleChange}
            name='email'
            value={email}
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <label>Senha</label>
        <FormControl>
          <input
            type='password'
            id="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <button type="submit">Enviar</button>
      </FormGroup>
    </Container>
  );
};