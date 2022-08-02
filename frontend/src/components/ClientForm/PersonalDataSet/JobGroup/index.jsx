import { InputContainer } from "./styles"

export const JobGroup = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="job">
        Profissão
      </label>
      <InputContainer
        type='text'
        id='job'
        name='job'
        value={formData.job}
        onChange={handleChange}
      />
    </div>
  )
}