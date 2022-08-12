import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  `;

export const Content = styled.div`
  max-width: 956px;
  margin: 2rem auto 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  `;

export const EditButton = styled.button`
a {
  display: block;
    height: 2.5rem;
    padding: 0 2rem;
    background-color: var(--clr-acc-primary);
    color: var(--clr-txt-alt);
    font-size: 1rem;
    font-weight: 300;
    line-height: 2.5rem;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 0 2rem;
  background-color: var(--clr-acc-primary);
  color: var(--clr-txt-alt);
  font-size: 1rem;
  font-weight: 300;
`;

export const PDFButton = styled.button`
  display: block;
  height: 2.5rem;
  margin: 2rem auto 0;
  padding: 0 2rem;
  background-color: var(--clr-acc-primary);
  color: var(--clr-txt-alt);
  font-size: 1rem;
  font-weight: 300;
`;