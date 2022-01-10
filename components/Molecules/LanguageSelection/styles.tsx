import css from 'styled-jsx/css';
import { FramerMotionVariant } from '@jpe-reader/utils/types/FramerMotionTypes';

export const variant: FramerMotionVariant = {
  closed: {
    opacity: 0,
    height: 0,
    padding: 0,
  },
  open: {
    opacity: 1,
    height: 'auto',
  },
};

export const { className, styles } = css.resolve`
  div {
    width: 130px;
    position: relative;
  }

  ul {
    width: 100%;
    position: absolute;
    opacity: 0;
    top: 40px;
    background-color: var(--reader-fill-secundary);
    border-radius: 5px;
    padding: 5px 10px;
    overflow: hidden;
    right: 0;

    li {
      margin: 0;
    }
  }
`;
