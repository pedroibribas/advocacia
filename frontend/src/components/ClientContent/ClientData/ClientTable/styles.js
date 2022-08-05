import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;

  table {
    width: 100%;
    background-color: #FFF;
    border-spacing: 0.5rem;
    font-family: var(--font-serif), serif;
    font-size: 1.1rem;
  }

  tr {
    text-align: left;
  }
  
  th, td {
    border: 1px solid black;
    padding: 0.5rem 0 0.5rem 1rem;
  }

  td {
    font-weight: 400;
  }
`;