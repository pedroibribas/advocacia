import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
padding: 0 0.5rem;
background-color: #FFF;

  span {
    padding: 0.5rem;
    border: 1px solid black;
    border-bottom: 1px solid #FFF;
    font-family: var(--font-serif), serif;
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    min-height: 250px;
    margin-top: 0.5rem;
    padding: 2rem 0.5rem;
    border: 1px solid black;
    font-family: var(--font-serif), serif;
    font-size: 1.1rem;
    white-space: pre-wrap; // fix text
  }
`;
