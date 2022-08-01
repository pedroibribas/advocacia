import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../helpers/hooks/useClients";
import { ContactSet } from "./ContactSet";
import { DescriptionSet } from "./DescriptionSet";
import { PersonalDataSet } from "./PersonalDataSet";
import { Container } from "./styles";

export const RegisterForm = () => {
  const { state, setState, createClient, resetState } = useClients();
  const [birth, setBirth] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    civilStatus: '',
    nationality: 'Brasileira',
    job: '',
    securityNumber: '',
    rgNumber: '',
    rgOrigin: '',
    birthDay: 0,
    birthMonth: 0,
    birthYear: 0,
    street: '',
    addressNumber: 0,
    cityArea: '',
    city: '',
    state: 'SP',
    country: "Brasil",
    postalCode: '',
    countryCode: 55,
    areaCode: 0,
    phoneNumber: 0,
    email: '',
    lawsuitNumber: '',
    description: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getBirthArr = (str) => {
      return str.split('-');
    };

    if (birth !== '') {
      const dateArr = getBirthArr(birth);
      const day = Number(dateArr[2]);
      const month = Number(dateArr[1]);
      const year = Number(dateArr[0]);

      setFormData(prevState => ({
        ...prevState,
        birthDay: day,
        birthMonth: month,
        birthYear: year
      }));
    }
  }, [birth]);

  useEffect(() => {
    if (state.isError) {
      toast.error(state.message);
      resetState();
    }
    if (state.isSuccess) {
      navigate('/');
      window.location.reload();
      resetState();
    }
  }, [state, setState, resetState, navigate]);

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleBirthChange = e => {
    setBirth(e.target.value);
  };

  const handleSubmit = e => {
    createClient(formData);
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <PersonalDataSet
          formData={formData}
          birth={birth}
          handleChange={handleChange}
          handleBirthChange={handleBirthChange}
        />
        <ContactSet
          formData={formData}
          handleChange={handleChange}
        />
        <DescriptionSet formData={formData} handleChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};