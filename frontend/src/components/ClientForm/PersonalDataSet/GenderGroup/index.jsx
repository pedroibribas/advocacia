export const GenderGroup = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="gender">
        Gênero
      </label>
      <select id="gender" name="gender" defaultValue='Não informado' onChange={handleChange} >
        <option value='Não informado'>Selecionar</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino" >Feminino</option>
        <option value="Diverso" >Diverso</option>
      </select>
    </div>
  );
};