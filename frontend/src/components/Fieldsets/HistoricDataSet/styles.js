import styled from "styled-components";

export const Container = styled.fieldset`
  margin-top: 2rem;
  padding: 1rem 2rem 2rem;

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

  input {
    width: 300px;
    height: 2rem;
    margin-top: 0.25rem;
    padding: 0 0.25rem;
    border: 1px solid var(--clr-txt-light);
    font-size: 1rem;
    font-weight: 500;
  }

  textarea {
    width: 100%;
    height: 500px;
    margin-top: 0.25rem;
    padding: 0.5rem;
    border: 1px solid var(--clr-txt-light);
    font-size: 1rem;
    font-weight: 400;
    resize: none; //hide resize handler
  }
`;