import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-top: 1rem;

  label {
    font-weight: 400;
  }

  button {
    background: var(--clr-acc-primary);
    width: 100%;
    height: 2.75rem;
    border: 1px solid transparent;
    color: var(--clr-txt-alt);
    font-size: 1rem;
    font-weight: 400;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const FormControl = styled.div`
  margin-top: 0.25rem;

  input {
    width: 100%;
    height: 2.75rem;
    padding: 0 0.5rem;
    border: 1px solid var(--clr-txt-light);
    outline: none;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
      border: 2px solid var(--clr-acc-primary);
    }
  }
`;