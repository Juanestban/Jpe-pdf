import { FC } from 'react';
import Folder, { FolderProps } from '../Folder';
import css from './styles';

const Folders: FolderProps[] = [
  { title: 'title' },
  { title: 'title 2' },
  { title: 'title 3' },
  { title: 'title 3' },
  { title: 'title 3' },
  { title: 'title 3' },
];

const FolderList: FC<{}> = () => {
  return (
    <>
      <div className="list-folders">
        {Folders.map((folder, key) => (
          <Folder key={key} {...folder} isBordered />
        ))}
      </div>
      <style jsx>{css}</style>
    </>
  );
};

export default FolderList;
