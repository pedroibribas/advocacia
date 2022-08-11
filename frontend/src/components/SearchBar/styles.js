import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 0 1rem;

  input {
    width: 500px;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid var(--clr-txt-light);
    border-right: none;
    border-radius: 0.25rem 0 0 0.25rem;
    outline: none;
    font-size: 1rem;
    font-weight: 300;

    &:focus {
      border: 1px solid var(--clr-acc-primary);
      box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    }
  }
`;

export const IconContainer = styled.form`
  padding: 0 0.5rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0 0.25rem 0.25rem 0;

  svg {
    display: block;
    height: 2.5rem;
    color: var(--clr-txt-alt);
    font-size: 1.5rem;
  }
`;