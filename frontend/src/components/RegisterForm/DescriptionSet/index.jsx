import { Input } from "../Input";
import { Container } from "./styles";

export const DescriptionSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Descrição</legend>
      <div>
        <label htmlFor="lawsuitNumber">Processo nº</label>
        <Input
          type='text'
          name="lawsuitNumber"
          value={formData.lawsuitNumber}
          handler={handleChange}
          width="300px"
        />
      </div>
      <div>
        <label htmlFor="description">Histórico</label>
        <textarea
          id="description"
          cols={100}
          rows={25}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};