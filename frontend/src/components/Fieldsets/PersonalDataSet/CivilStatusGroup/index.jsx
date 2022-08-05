export const CivilStatusGroup = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="civilStatus">
        Estado Civil
      </label>
      <select
        id="civilStatus"
        name="civilStatus"
        defaultValue={formData.civilStatus}
        onChange={handleChange}
      >
        <option value='Não informado'>Selecionar</option>
        <option value="Solteiro(a)">Solteiro&#40;a&#41;</option>
        <option value="Casado(a)">Casado&#40;a&#41;</option>
        <option value="União Estável">União Estável</option>
      </select>
    </div>
  );
};