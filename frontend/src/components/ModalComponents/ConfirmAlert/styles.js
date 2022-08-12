import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  background-color: #FFF;
  color: var(--clr-txt);
  box-shadow: 1px 1px 10px rgba(0,0,0,0.25);

  span {
    width: 400px;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
  }

  button {
    height: 2rem;
    margin-top: 1.25rem;
    padding: 0 0.5rem;
    border: 2px solid var(--clr-txt);
    color: var(--clr-txt);
    font-size: 1rem;
    font-weight: 500;

    & + button { 
      margin-left: 1rem;
    }
  }
`