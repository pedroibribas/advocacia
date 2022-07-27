import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserService } from "../../../api/services/user";
import { LoginFulfilled, LoginPending, LoginRejected } from "../../../helpers/actions/AuthActions";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { formatErrMessage } from "../../../helpers/utils/formatErrMessage";
import { Loader } from "../../Loader";
import { Container, FormControl, FormGroup } from "./styles";

export const Form = () => {
  const { user, isSuccess, isLoading, isError, message, dispatch } = useAuth();
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
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(LoginPending());

    loginUserService(userData)
      .then(data => dispatch(LoginFulfilled(data)))
      .catch(err => dispatch(LoginRejected(formatErrMessage(err))));
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