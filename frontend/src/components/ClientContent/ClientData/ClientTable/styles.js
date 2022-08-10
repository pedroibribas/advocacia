import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;

  table {
    width: 100%;
    border: 1px solid black;
    border-spacing: 0rem;
    font-family: var(--font-serif), serif;
  }

  tr {
    text-align: left;

    & + tr {
      th {
        border-top: 1px solid #000;
      }

      td {
        border-top: 1px solid #000;
      }
    }
  }
  
  th, td {
    padding: 0.5rem 0 0.5rem 1rem;
  }

  th {
    width: 25%;
  }

  td {
    border-left: 1px solid #000;
    font-weight: 400;
  }
`;