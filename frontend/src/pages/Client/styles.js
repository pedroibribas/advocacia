import styled from "styled-components";

export const Container = styled.div`
  display: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 10rem;

  h1 {
    margin-top: 4rem;
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  height: 3rem;
  margin: 1rem auto 0;
  padding: 0 2rem;
  background: var(--clr-bg-alt);
  color: #FFF;
  font-size: 1rem;
`;

export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: calc(50% + 10rem);
  left: calc(50% - 200px);
  z-index: 999;

  height: 10rem;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: #FFF;
  color: var(--clr-txt);

  span {
    width: 400px;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
  }

  button {
    height: 2rem;
    margin-top: 1.25rem;
    padding: 0 0.5rem;
    border: 2px solid var(--clr-txt);
    color: var(--clr-txt);
    font-size: 1rem;
    font-weight: 500;

    & + button { 
      margin-left: 1rem;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
`;

export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 9;
  right: 0.5rem;

  a {
    height: 4rem;
    padding: 1rem;
    border-radius: 0.25rem;
    background: #7DCE13;
    color: var(--clr-txt);
    font-size: 2rem;
  }

  button {
    height: 4rem;
    margin-left: 0.5rem;
    padding: 1rem;
    border-radius: 0.25rem;
    background: #F55353;
    color: var(--clr-txt);
    font-size: 2rem;
  }
`;