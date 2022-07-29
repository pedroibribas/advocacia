import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: var(--clr-bg);
`;

export const Content = styled.div`
  flex-direction: column;
  min-width: 400px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: var(--clr-bg-container);
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

  h2 {
    font-weight: 500;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1.5rem;
`;