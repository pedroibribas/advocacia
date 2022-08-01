import { Input } from "../Input";
import { Container } from "./styles";

export const PersonalDataSet = ({ formData, birth, handleChange, handleBirthChange }) => {
  return (
    <Container>
      <legend>Dados Pessoais</legend>
      <div>
        <label htmlFor="firstName">Nome</label>
        <Input
          type='text'
          name="firstName"
          value={formData.firstName}
          handler={handleChange}
          width="400px"
        />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome</label>
        <Input
          type='text'
          name="lastName"
          value={formData.lastName}
          handler={handleChange}
          width="400px"
        />
      </div>
      <div>
        <label htmlFor="gender">Gênero</label>
        <select id="gender" name="gender" onChange={handleChange} >
          <option value='Não informado'>Selecionar</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino" >Feminino</option>
          <option value="Diverso" >Diverso</option>
        </select>
      </div >
      <div>
        <label htmlFor="civilStatus">Estado Civil</label>
        <select id="civilStatus" name="civilStatus" onChange={handleChange} >
          <option value='Não informado'>Selecionar</option>
          <option value="Solteiro(a)">Solteiro&#40;a&#41;</option>
          <option value="Casado(a)">Casado&#40;a&#41;</option>
          <option value="União Estável">União Estável</option>
        </select>
      </div >
      <div>
        <label htmlFor="nationality">Nacionalidade</label>
        <select id="nationality" name="nationality" onChange={handleChange} >
          <option value="Brasileira">Brasileira</option>
          <option value="Outra">Outra</option>
        </select>
      </div>
      <div>
        <label htmlFor="job">Profissão</label>
        <Input
          type='text'
          name="job"
          value={formData.job}
          handler={handleChange}
          width="150px"
        />
      </div>
      <div>
        <label htmlFor="securityNumber">CPF nº</label>
        <Input
          type='text'
          name="securityNumber"
          value={formData.securityNumber}
          handler={handleChange}
          width="150px"
          maxLength='14'
        />
      </div>
      <div>
        <label htmlFor="rgNumber">RG nº</label>
        <Input
          type='text'
          name="rgNumber"
          value={formData.rgNumber}
          handler={handleChange}
          width="150px"
        />
      </div>
      <div>
        <label htmlFor="rgOrigin">Órgão emissor</label>
        <Input
          type='text'
          name="rgOrigin"
          value={formData.rgOrigin}
          handler={handleChange}
          width="100px"
        />
      </div>
      <div>
        <label htmlFor="birthDate">Data de nascimento</label>
        <input
          type='date'
          id="birth"
          name="birth"
          value={birth}
          onChange={handleBirthChange}
        />
      </div>
    </Container >
  );
};