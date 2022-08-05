import { InputContainer } from "./styles";

export const NameGroups = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <label htmlFor="firstName">
          Nome
        </label>
        <InputContainer
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">
          Sobrenome
        </label>
        <InputContainer
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
    </>
  )
}