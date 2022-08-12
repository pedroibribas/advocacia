import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
font-family: var(--font-serif), serif;
`;

export const Title = styled.span`
  padding: 0.5rem;
  border: 1px solid black;
  border-bottom: 1px solid #FFF;
  font-weight: 700;
`;

export const Content = styled.div`
    min-height: 250px;
    margin-top: 0.5rem;
    padding: 2rem 2rem 4rem;
    border: 1px solid black;

    p {
      margin-top: 1rem;
      line-height: 1.5;
    }
`;
