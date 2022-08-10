import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
font-family: var(--font-serif), serif;

  span {
    padding: 0.5rem;
    border: 1px solid black;
    border-bottom: 1px solid #FFF;
    font-weight: 700;
  }

  p {
    min-height: 250px;
    margin-top: 0.5rem;
    padding: 2rem 0.5rem;
    border: 1px solid black;
    white-space: pre-wrap; // fix text
  }
`;
