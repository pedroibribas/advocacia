import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background: #FFF;
  color: var(--clr-txt);
  box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Message = styled.span`
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const Loader = styled.div`
  width: 32px;
  height: 32px;
  margin: 1rem auto 0;
  border: 4px solid;
  border-color: #000 transparent #555 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`