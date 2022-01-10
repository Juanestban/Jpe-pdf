import css from 'styled-jsx/css';

const styles = css`
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid transparent;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    /* box-shadow: var(--box-shadow-sm); */
    cursor: pointer;
    font-size: 1.6rem;
    max-width: var(--button-max-width);
    min-width: max-content;
    font-weight: bold;
    position: relative;
    background-color: transparent;
    color: var(--reader-text-color-label);
    user-select: none;

    &:hover {
      background-color: var(--backdrop-color);
      filter: brightness(1.1);
    }

    &:active {
      filter: brightness(0.9);
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
