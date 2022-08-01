import { Input } from "../Input";
import { Container } from "./styles";

export const ContactSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Contato</legend>
      <div>
        <label htmlFor="street">Endereço</label>
        <Input
          type='text'
          name="street"
          value={formData.street}
          handler={handleChange}
          width="500px"
        />
      </div>
      <div>
        <label htmlFor="addressNumber">Nº</label>
        <Input
          type='number'
          name="addressNumber"
          value={formData.addressNumber}
          handler={handleChange}
          width="50px"
          maxLength='6'
        />
      </div>
      <div>
        <label htmlFor="cityArea">Bairro</label>
        <Input
          type='text'
          name="cityArea"
          value={formData.cityArea}
          handler={handleChange}
          width="500px"
        />
      </div>
      <div>
        <label htmlFor="city">Cidade</label>
        <Input
          type='text'
          name="city"
          value={formData.city}
          handler={handleChange}
          width="400px"
        />
      </div>
      <div>
        <label htmlFor="state">Estado</label>
        <select id="state" name="state" defaultValue='SP' onChange={handleChange}>
          <option value='AC'>AC</option>
          <option value='AL'>AL</option>
          <option value='AP'>AP</option>
          <option value='AM'>AM</option>
          <option value='BA'>BA</option>
          <option value='CE'>CE</option>
          <option value='DF'>DF</option>
          <option value='ES'>ES</option>
          <option value='GO'>GO</option>
          <option value='MA'>MA</option>
          <option value='MT'>MT</option>
          <option value='MS'>MS</option>
          <option value='MG'>MG</option>
          <option value='PA'>PA</option>
          <option value='PB'>PB</option>
          <option value='PR'>PR</option>
          <option value='PE'>PE</option>
          <option value='PI'>PI</option>
          <option value='RJ'>RJ</option>
          <option value='RN'>RN</option>
          <option value='RS'>RS</option>
          <option value='RO'>RO</option>
          <option value='RR'>RR</option>
          <option value='SC'>SC</option>
          <option value='SP'>SP</option>
          <option value='SE'>SE</option>
          <option value='TO'>TO</option>
        </select>
      </div>
      <div>
        <label htmlFor="country">País</label>
        <Input
          type='text'
          name="country"
          value={formData.country}
          handler={handleChange}
          width="150px"
        />
      </div>
      <div>
        <label htmlFor="postalCode">CEP</label>
        <Input
          type='text'
          name="postalCode"
          value={formData.postalCode}
          handler={handleChange}
          width="150px"
          maxLength='10'
        />
      </div>
      <div>
        <label htmlFor="countryCode">Código</label>
        <Input
          type='number'
          name="countryCode"
          value={formData.countryCode}
          handler={handleChange}
          width="50px"
          maxLength='2'
        />
      </div>
      <div>
        <label htmlFor="areaCode">DDD</label>
        <Input
          type='number'
          name="areaCode"
          value={formData.areaCode}
          handler={handleChange}
          width="30px"
          maxLength='2'
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Telefone/Celular</label>
        <Input
          type='number'
          name="phoneNumber"
          value={formData.phoneNumber}
          handler={handleChange}
          width="200px"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          type='email'
          name="email"
          value={formData.email}
          handler={handleChange}
          width="250px"
        />
      </div>
    </Container>
  );
};