import { InputContainer } from "./styles"

export const SocialIdsGroups = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <label htmlFor="securityNumber">
          CPF Nº
        </label>
        <input
          type='text'
          id='securityNumber'
          name='securityNumber'
          value={formData.securityNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rgNumber">
          RG Nº
        </label>
        <input
          type='text'
          id='rgNumber'
          name='rgNumber'
          value={formData.rgNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rgOrigin">
          Orgão emissor
        </label>
        <InputContainer
          type='text'
          id='rgOrigin'
          name='rgOrigin'
          value={formData.rgOrigin}
          onChange={handleChange}
        />
      </div>
    </>
  )
}