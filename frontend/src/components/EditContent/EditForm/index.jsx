import { useNavigate } from "react-router-dom";
import { AddressDataSet } from "../../Fieldsets/AddressDataSet";
import { BirthDataSet } from "../../Fieldsets/BirthDataSet";
import { EmailDataSet } from "../../Fieldsets/EmailDataSet";
import { HistoricDataSet } from "../../Fieldsets/HistoricDataSet";
import { PersonalDataSet } from "../../Fieldsets/PersonalDataSet";
import { PhoneDataSet } from "../../Fieldsets/PhoneDataSet";
import { ButtonContainer, Container } from "./styles";

export const EditForm = ({ formData, path, handleChange, handleOpenModal }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/client/" + path);
  };

  const handleSubmit = e => e.preventDefault();

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
          <button onClick={handleOpenModal}>Atualizar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </ButtonContainer>
      </form>
    </Container>
  );
};