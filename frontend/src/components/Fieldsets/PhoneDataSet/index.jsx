import { Container, InputAreaContainer, InputCountryContainer, InputPhoneContainer } from "./styles"

export const PhoneDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Telefone/Celular</legend>
      <div>
        <label htmlFor="countryCode">
          País
        </label>
        <InputCountryContainer
          type='number'
          maxLength='2'
          id='countryCode'
          name='countryCode'
          value={formData.countryCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="areaCode">
          DDD
        </label>
        <InputAreaContainer
          type='number'
          maxLength='2'
          id='areaCode'
          name='areaCode'
          value={formData.areaCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="´phoneNumber">
          Telefone/Celular
        </label>
        <InputPhoneContainer
          type='number'
          id='´phoneNumber'
          name='´phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </Container>
  )
}