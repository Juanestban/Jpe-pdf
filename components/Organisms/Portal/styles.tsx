import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: 12vh;
  background-color: var(--backdrop-color);
`;

export type ContainerPortalProps = {
  size?: 'small' | 'normal' | 'large' | 'extra-large';
};

export const ContainerPortal = styled.div<ContainerPortalProps>`
  position: absolute;
  max-height: 70vh;
  padding: 2rem;
  border-radius: 0.5rem;
  width: ${({ size }) =>
    size === 'extra-large'
      ? 80
      : size === 'large'
      ? 75
      : size === 'normal'
      ? 60
      : 40}rem;
  background-color: var(--backdrop-bg-color);
`;
