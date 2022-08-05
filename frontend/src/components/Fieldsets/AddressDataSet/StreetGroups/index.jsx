import { InputNumContainer, InputPostalContainer, InputTextContainer } from "./styles"

export const StreetGroups = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <label htmlFor="street">
          Endereço
        </label>
        <InputTextContainer
          type='text'
          id='street'
          name='street'
          value={formData.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="addressNumber">
          Nº
        </label>
        <InputNumContainer
          type='number'
          id='addressNumber'
          name='addressNumber'
          maxLength='6'
          value={formData.addressNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cityArea">
          Bairro
        </label>
        <InputTextContainer
          type='text'
          id='cityArea'
          name='cityArea'
          value={formData.cityArea}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">
          Cidade
        </label>
        <InputTextContainer
          type='text'
          id='city'
          name='city'
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="postalCode">
          CEP
        </label>
        <InputPostalContainer
          type='text'
          size={150}
          maxLength='10'
          id='postalCode'
          name='postalCode'
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>
    </>
  )
}