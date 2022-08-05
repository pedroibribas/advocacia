import styled from "styled-components";

export const Container = styled.div`
  form {
    max-width: 956px;
    margin: 0 auto;
    padding: 0 1rem;
  }
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