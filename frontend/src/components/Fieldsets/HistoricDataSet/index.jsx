import { Container } from "./styles";

export const HistoricDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Histórico</legend>
      <div>
        <label htmlFor="lawsuitNumber">
          Processo Nº
        </label>
        <input
          type='text'
          id='lawsuitNumber'
          name='lawsuitNumber'
          value={formData.lawsuitNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">
          Histórico
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};