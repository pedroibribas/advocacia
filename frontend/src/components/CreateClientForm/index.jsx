import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { reset } from "../../helpers/reducers/ClientStatesReducer";
import { validateFormData } from "../../helpers/utils/validators";
import { AddressDataSet } from "../Fieldsets/AddressDataSet";
import { BirthDataSet } from "../Fieldsets/BirthDataSet";
import { EmailDataSet } from "../Fieldsets/EmailDataSet";
import { HistoricDataSet } from "../Fieldsets/HistoricDataSet";
import { PersonalDataSet } from "../Fieldsets/PersonalDataSet";
import { PhoneDataSet } from "../Fieldsets/PhoneDataSet";
import { ButtonContainer, Container } from "./styles";

export const CreateClientForm = () => {
  const { getClients, clientStatesState, dispatchClientStates, createClient } = useClients();
  const { isError, isSuccess, message } = clientStatesState;
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
    birthDay: 1,
    birthMonth: 1,
    birthYear: 1900,
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
    if (isError) {
      toast.error(message);
      dispatchClientStates(reset());
    };

    if (isSuccess) {
      toast.success(message);
      dispatchClientStates(reset());
      getClients();
      navigate("/");
    };
  }, [dispatchClientStates, isError, isSuccess, message, getClients, navigate]);

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateFormData(formData);
    await createClient(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <PersonalDataSet formData={formData} handleChange={handleChange} />
        <BirthDataSet formData={formData} handleChange={handleChange} />
        <AddressDataSet formData={formData} handleChange={handleChange} />
        <PhoneDataSet formData={formData} handleChange={handleChange} />
        <EmailDataSet formData={formData} handleChange={handleChange} />
        <HistoricDataSet formData={formData} handleChange={handleChange} />
        <ButtonContainer>
          <button type="submit">Cadastrar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </ButtonContainer>
      </form>
    </Container>
  );
};