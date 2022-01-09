import { FC } from 'react';
import css from './styles';

export const NoContent: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="no-content">{title}</div>
      <style jsx>{css}</style>
    </>
  );
};
