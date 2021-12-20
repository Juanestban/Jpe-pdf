import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-top: 5px solid #ec255a;
  border-radius: 50%;

  animation: spinnerAnimation 600ms linear infinite;

  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
