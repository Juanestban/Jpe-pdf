import css from 'styled-jsx/css';

const styles = css`
  .list-folders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: auto;
    gap: 0.5rem;
  }
`;

export default styles;
