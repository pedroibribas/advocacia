export const NationalityGroup = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="nationality">
        Nacionalidade
      </label>
      <select
        id="nationality"
        name="nationality"
        defaultValue={formData.nationality}
        onChange={handleChange}
      >
        <option value="Brasileira">Brasileira</option>
        <option value="Outra">Outra</option>
      </select>
    </div>
  );
};