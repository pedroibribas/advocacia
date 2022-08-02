import { Container } from "./styles"

export const EmailDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Email</legend>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </Container>
  )
}