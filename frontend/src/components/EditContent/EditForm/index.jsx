import { useNavigate } from "react-router-dom";
import { AddressDataSet } from "../../Fieldsets/AddressDataSet";
import { BirthDataSet } from "../../Fieldsets/BirthDataSet";
import { EmailDataSet } from "../../Fieldsets/EmailDataSet";
import { HistoricDataSet } from "../../Fieldsets/HistoricDataSet";
import { PersonalDataSet } from "../../Fieldsets/PersonalDataSet";
import { PhoneDataSet } from "../../Fieldsets/PhoneDataSet";
import { ButtonContainer, Container } from "./styles";

export const EditForm = ({ formData, setFormData, path, handleOpenModalClick }) => {
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleCancelClick = () => {
    navigate("/client/" + path);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
          <button onClick={handleOpenModalClick}>Atualizar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </ButtonContainer>
      </form>
    </Container>
  );
};