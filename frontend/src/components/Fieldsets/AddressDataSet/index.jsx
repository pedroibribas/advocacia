import { StateGroups } from "./StateGroups";
import { StreetGroups } from "./StreetGroups";
import { Container } from "./styles";

export const AddressDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Endereço</legend>
      <StreetGroups formData={formData} handleChange={handleChange} />
      <StateGroups formData={formData} handleChange={handleChange} />
    </Container>
  );
};