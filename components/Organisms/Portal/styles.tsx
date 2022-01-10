import styled from 'styled-components';

export type ContainerPortalProps = {
  size?: 'small' | 'normal' | 'large' | 'extra-large';
};

export const ContainerPortal = styled.div<ContainerPortalProps>`
  position: fixed;
  max-height: 70vh;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-top: 100px;
  width: ${({ size = 'normal' }) =>
    size === 'extra-large'
      ? 80
      : size === 'large'
      ? 75
      : size === 'normal'
      ? 60
      : 40}rem;
  background-color: var(--backdrop-bg-color);

  z-index: 3;
`;
