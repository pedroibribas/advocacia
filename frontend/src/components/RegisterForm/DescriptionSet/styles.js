import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  padding: 1rem 2rem 2.5rem;
  margin-top: 2rem;

  legend {
    font-size: 1.5rem;
    font-weight: 500;
  }

  label {
    display: block;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 0.9rem;
  }

  textarea {
    padding: 0.5rem;
    border: 1px solid var(--clr-txt-light);
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    resize: none; //hide resize handler
  }
`;