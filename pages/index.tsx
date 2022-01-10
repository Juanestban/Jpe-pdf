import type { NextPage } from 'next';
import Button from '@jpe-reader/components/Atoms/Button';
import Portal from '@jpe-reader/components/Organisms/Portal';
import Title from '@jpe-reader/components/Atoms/Title';
import FolderList from '@jpe-reader/components/Molecules/FolderList';
import { useOverlay } from '@jpe-reader/hooks/useOverlay';
import { useDictionary } from '@jpe-reader/hooks/useLanguage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { isOverlay, handleIsOverlay } = useOverlay();
  const { page } = useDictionary();

  return (
    <div className={styles.container}>
      <FolderList />
      <div style={{ width: '20%' }}>
        <Button onClick={handleIsOverlay}>
          {page?.document.body.button_text_test}
        </Button>
      </div>
      <Portal isVisible={isOverlay} onClose={handleIsOverlay}>
        <Title Component="h3">{page?.document.body.title_portal_test}</Title>
      </Portal>
    </div>
  );
};

export default Home;
