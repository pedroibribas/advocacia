export const NationalityGroup = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="nationality">
        Nacionalidade
      </label>
      <select id="nationality" name="nationality" defaultValue='Não informado' onChange={handleChange} >
        <option value="Brasileira">Brasileira</option>
        <option value="Outra">Outra</option>
      </select>
    </div>
  );
};