import styled from "styled-components";

export const Container = styled.header`
  height: 4.5rem;
  background-color: var(--clr-bg-alt);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  max-width: 1420px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const VersionDesc = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
  font-size: 10px;
  color: #a0a0a0;
`;

export const HamburgerButton = styled.button`
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0.25rem;
  
  div {
    display: block;
    width: 24px;
    height: 2px;
    background: #FFF;

    &:nth-child(2) {
      margin: 4px 0;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

export const Menu = styled.div`
  position: absolute;
  top: 4.25rem;
  left: 2rem;
  z-index: 99;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0.5rem;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 12px solid #FFF;
  }

  ul {
    padding-top: 0.25rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    overflow: hidden;

    a {
      display: block;
      padding: 0.75rem;
      font-size: 0.9rem;

      &:hover {
        background: #e0e0e0;
        text-decoration: underline;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: calc(100vh - 4.5rem);
  background: rgba(0,0,0,0.5);
`;