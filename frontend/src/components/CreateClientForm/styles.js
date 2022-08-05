import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  padding: 2rem;
`;

export const ButtonContainer = styled.div`
  display: block;
  margin-top: 1rem;
  text-align: center;

  button {
    height: 2rem;
    padding: 0 1rem;
    background-color: var(--clr-acc-primary);
    border-radius: 0.25rem;
    color: var(--clr-txt-alt);
    font-size: 0.9rem;
    font-weight: 300;

    & + button {
      margin-left: 1rem;
    }
  }
`;