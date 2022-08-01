import { Container } from "./styles";

export const Input = ({ type, autofocus, maxLength, name, value, handler, width }) => {
  return (
    <Container
      type={type}
      id={name}
      maxLength={maxLength}
      name={name}
      value={value}
      onChange={handler}
      width={width}
    />
  );
};