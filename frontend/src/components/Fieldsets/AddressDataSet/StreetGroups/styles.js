import styled from "styled-components";

export const InputTextContainer = styled.input`
  width: 400px;
`;

export const InputNumContainer = styled.input`
  width: 50px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
`;

export const InputPostalContainer = styled.input`
  width: 150px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
`;