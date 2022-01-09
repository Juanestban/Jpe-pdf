import { CSSProperties } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  form {
    min-width: 100px;
    width: 60rem;
    display: inline-flex;
    align-items: center;
  }

  .search-container {
    display: inline-flex;
    width: 100%;
  }
`;

export const stylesButton: CSSProperties = {
  borderRadius: 0,
  backgroundColor: 'var(--reader-fill-button-color)',
  padding: '.5rem 1.8rem',
  border: '1px solid var(--reader-fill-secundary)',
  borderLeftColor: 'transparent',
};

export default styles;
