import css from 'styled-jsx/css';

const styles = css`
  input {
    width: 100%;
    border-color: transparent;
    box-shadow: none;
    background-color: transparent;
    font-family: 'Regular', sans-serif;
    border-radius: 0;
    padding: 0.5rem 0.7rem;
    color: var(--text-color);
    outline: none;
    font-size: var(--font-size-normal);
    border: 1px solid var(--reader-fill-secundary);
    background-color: var(--reader-fill-quaternary);

    &:focus {
      border-color: var(--reader-border-color-primary);
      box-shadow: none;
    }
  }
`;

export default styles;
