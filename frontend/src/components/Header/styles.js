import styled from "styled-components";

export const Container = styled.header`
  height: 4.5rem;
  background-color: var(--clr-bg-alt);
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  max-width: 1120px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SettingsButton = styled.button`
  height: 2rem;
  padding: 0 1rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0.25rem;
  color: var(--clr-txt-alt);
  font-size: 0.9rem;
  font-weight: 300;
`;