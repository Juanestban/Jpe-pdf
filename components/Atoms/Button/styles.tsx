import css from 'styled-jsx/css';

const styles = css`
  .button {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    color: var(--reader-text-color-label);
    border: 0.2rem solid transparent;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: var(--backdrop-color);
    }

    &.rol-primary {
      color: var(--reader-text-color-primary);
    }

    &.rol-secondary {
      color: var(--reader-text-color-secondary);
    }

    &.rol-tertiary {
      color: var(--reader-text-color-tertiary);
    }

    &.variant-primary {
    }

    &.variant-secondary {
    }

    &.variant-tertiary {
    }

    &.variant-normal {
      /* background-color: transparent; */
    }

    &.full-width {
      width: 100%;
    }

    &.align-left {
      text-align: left;
      justify-content: flex-start;
    }

    &.align-center {
      text-align: center;
      justify-content: center;
    }

    &.align-right {
      text-align: right;
      justify-content: flex-end;
    }
  }
`;

export default styles;
