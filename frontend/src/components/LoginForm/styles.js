import styled from "styled-components";

export const FormGroup = styled.div`
  margin-top: 1rem;

  button {
    background: var(--clr-acc-primary);
    width: 100%;
    height: 2.75rem;
    border: 1px solid transparent;
    color: var(--clr-txt-alt);
    font-size: 1rem;
    font-weight: 400;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const FormControl = styled.div`
  margin-top: 0.25rem;

  input {
    width: 100%;
    height: 2.75rem;
    padding: 0 0.5rem;
    border: 1px solid var(--clr-txt-light);
    outline: none;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
      border: 2px solid var(--clr-acc-primary);
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 1rem auto 0;
`;

export const LoaderContent = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: run 1.2s ease infinite;

  @keyframes run {
    0%,
    100% {
      box-shadow:
        0em -0.867em 0em 0em rgba(0,0,0, 1),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.2),
        0.833em 0em 0 0em rgba(0,0,0, 0.2),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.2),
        0em 0.833em 0 0em rgba(0,0,0, 0.2),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.2),
        -0.867em 0em 0 0em rgba(0,0,0, 0.5),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.7);
    }
    12.5% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.7),
        0.6em -0.6em 0 0em rgba(0,0,0, 1),
        0.833em 0em 0 0em rgba(0,0,0, 0.2),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.2),
        0em 0.833em 0 0em rgba(0,0,0, 0.2),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.2),
        -0.867em 0em 0 0em rgba(0,0,0, 0.2),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.5);
    }
    25% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.5),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.7),
        0.833em 0em 0 0em rgba(0,0,0, 1),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.2),
        0em 0.833em 0 0em rgba(0,0,0, 0.2),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.2),
        -0.867em 0em 0 0em rgba(0,0,0, 0.2),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.2);
    }
    37.5% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.2),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.5),
        0.833em 0em 0 0em rgba(0,0,0, 0.7),
        0.583em 0.583em 0 0em rgba(0,0,0, 1),
        0em 0.833em 0 0em rgba(0,0,0, 0.2),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.2),
        -0.867em 0em 0 0em rgba(0,0,0, 0.2),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.2);
    }
    50% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.2),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.2),
        0.833em 0em 0 0em rgba(0,0,0, 0.5),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.7), 
        0em 0.833em 0 0em rgba(0,0,0, 1),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.2),
        -0.867em 0em 0 0em rgba(0,0,0, 0.2),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.2);
    }
    62.5% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.2),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.2),
        0.833em 0em 0 0em rgba(0,0,0, 0.2),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.5),
        0em 0.833em 0 0em rgba(0,0,0, 0.7), 
        -0.6em 0.6em 0 0em rgba(0,0,0, 1),
        -0.867em 0em 0 0em rgba(0,0,0, 0.2),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.2);
    }
    75% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.2),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.2),
        0.833em 0em 0 0em rgba(0,0,0, 0.2),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.2),
        0em 0.833em 0 0em rgba(0,0,0, 0.5),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.7),
        -0.867em 0em 0 0em rgba(0,0,0, 1),
        -0.6em -0.6em 0 0em rgba(0,0,0, 0.2);
    }
    87.5% {
      box-shadow: 
        0em -0.867em 0em 0em rgba(0,0,0, 0.2),
        0.6em -0.6em 0 0em rgba(0,0,0, 0.2),
        0.833em 0em 0 0em rgba(0,0,0, 0.2),
        0.583em 0.583em 0 0em rgba(0,0,0, 0.2),
        0em 0.833em 0 0em rgba(0,0,0, 0.2),
        -0.6em 0.6em 0 0em rgba(0,0,0, 0.5),
        -0.867em 0em 0 0em rgba(0,0,0, 0.7), 
        -0.6em -0.6em 0 0em rgba(0,0,0, 1);
    }
  }
`