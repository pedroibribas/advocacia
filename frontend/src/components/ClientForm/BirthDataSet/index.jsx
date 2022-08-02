import { Container } from "./styles";

export const BirthDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Data de Nascimento</legend>
      <div>
        <label htmlFor="birthDay">
          Dia
        </label>
        <input
          type='number'
          min='1'
          max='31'
          step='1'
          id='birthDay'
          name='birthDay'
          value={formData.birthDay}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthMonth">
          Mês
        </label>
        <input
          type='number'
          min='1'
          max='12'
          step='1'
          id='birthMonth'
          name='birthMonth'
          value={formData.birthMonth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthYear">
          Ano
        </label>
        <input
          type='number'
          min='1900'
          max='2099'
          step='1'
          id='birthYear'
          name='birthYear'
          value={formData.birthYear}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};