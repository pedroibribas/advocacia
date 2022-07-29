import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    background-color: var(--clr-bg-container);
    border-spacing: 0;
  }

  th {
    padding: 1rem 2rem;
    font-weight: 500;
    text-align: left;
    line-height: 1.5;
  }

  td {
    padding: 1rem 2rem;
    border-top: 1px solid var(--clr-txt-light);

    a {
      display: inline-block;
      height: 2rem;
      padding: 0 0.5rem;
      border-radius: 0.25rem;
      background-color: var(--clr-acc-primary);
      color: var(--clr-txt-alt);
      font-size: 0.9rem;
      line-height: 2rem;
    }
  }
`;