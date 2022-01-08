import css from 'styled-jsx/css';

const styles = css`
  button {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--reader-text-color-label);
    border: 0.2rem solid transparent;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &.button {
      &-bordered {
        /* rol normal */

        &.variant-primary {
        }

        &.variant-secundary {
        }

        &.variant-tertiary {
        }
      }

      &-active {
        /* rol normal */

        &.variant-primary {
        }

        &.variant-secundary {
        }

        &.variant-tertiary {
        }
      }
    }
  }
`;

export default styles;
