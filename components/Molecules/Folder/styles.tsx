import css from 'styled-jsx/css';

const styles = css`
  .folder {
    &-container {
      display: inline-flex;
      user-select: none;
      border-radius: 5px;
      position: relative;

      &.bordered {
        border: 0.1rem solid var(--reader-fill-secondary);
      }
    }

    &-action {
      display: flex;
      width: 100%;
      padding: 5px;
      cursor: pointer;

      &:hover {
        background-color: var(--backdrop-color);
      }
    }

    &-image-container {
    }

    &-content {
      width: 100%;
      display: inline-flex;
      padding-left: 0.5rem;
      align-items: center;

      &-title {
      }

      &-subtitle {
      }
    }

    &-more-info {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
`;

export default styles;
