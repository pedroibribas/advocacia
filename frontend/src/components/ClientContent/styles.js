import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const Content = styled.div`
  max-width: 956px;
  margin: 2rem auto 10rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
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

export const DeleteButton = styled.button`
  display: block;
  height: 3rem;
  margin: 1rem auto 0;
  padding: 0 2rem;
  background-color: var(--clr-acc-primary);
  color: var(--clr-txt-alt);
  font-size: 1rem;
  font-weight: 300;
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

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: calc(50% - 5rem);
  left: calc(50% - 15rem);
  z-index: 999;

  height: 10rem;
  width: 30rem;
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