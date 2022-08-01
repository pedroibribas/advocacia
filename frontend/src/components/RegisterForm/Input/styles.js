import styled from "styled-components";

export const Container = styled.input`
  width: ${props => props.width};
  height: 2rem;
  margin-top: 0.25rem;
  padding: 0 0.25rem;
  border: 1px solid var(--clr-txt-light);
  outline: none;
  font-size: 1rem;
  font-weight: 500;

  &:focus {
    border: 1px solid var(--clr-acc-primary);
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;