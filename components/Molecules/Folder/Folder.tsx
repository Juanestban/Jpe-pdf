import { FC } from 'react';
import Image from 'next/image';
import cs from 'classnames';
import Title from '@jpe-reader/components/Atoms/Title';
import Typography from '@jpe-reader/components/Atoms/Typography';
import Button from '@jpe-reader/components/Atoms/Button';
import css from './styles';

interface FolderProps {
  title: string;
  subtitle?: string;
  isBordered?: boolean;
}

const Folder: FC<FolderProps> = ({ title, subtitle, isBordered }) => {
  const classesFolder = cs('folder-container', { bordered: isBordered });

  return (
    <>
      <div className={classesFolder}>
        <div className="folder-action">
          <div className="folder-image-container">
            <Image
              src="/assets/folder-color.svg"
              alt="folder-image"
              className="img-folder"
              width={100}
              height={100}
            />
          </div>
          <div className="folder-content">
            <div className="folder-content-title">
              <Title className="margin-0">{title}</Title>
            </div>
            {subtitle && (
              <div className="folder-content-subtitle">
                <Typography>{subtitle}</Typography>
              </div>
            )}
          </div>
        </div>
        <div className="folder-more-info">
          <Button
            icon="IoEllipsisVertical"
            size="small"
            style={{ padding: '5px', borderRadius: '50%' }}
          />
        </div>
      </div>
      <style jsx>{css}</style>
    </>
  );
};

export default Folder;
export type { FolderProps };
