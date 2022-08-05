import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  margin-top: 2rem;
  padding: 1rem 2rem 2.5rem;

  legend {
    font-size: 1.5rem;
    font-weight: 500;
  }

  label {
    display: block;
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  select,
  input[type='text'],
  input[type='number'] {
    height: 2rem;
    margin-top: 0.25rem;
    padding: 0 0.25rem;
    border: 1px solid var(--clr-txt-light);
    font-size: 1rem;
    font-weight: 500;

    &:focus {
      border: 2px solid orange;
    }
  }
`;

export const InputCountryContainer = styled.input`
  width: 50px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
`;

export const InputAreaContainer = styled.input`
  width: 30px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
`;

export const InputPhoneContainer = styled.input`
  width: 200px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
`;