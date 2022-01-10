import type { NextPage } from 'next';
import Button from '@jpe-reader/components/Atoms/Button';
import styles from '../styles/Home.module.css';
import Portal from '@jpe-reader/components/Organisms/Portal';
import { useOverlay } from '@jpe-reader/hooks/useOverlay';
import Title from '@jpe-reader/components/Atoms/Title';
import Typography from '@jpe-reader/components/Atoms/Typography';
import { useDictionary } from '@jpe-reader/hooks/useLanguage';

const Home: NextPage = () => {
  const { isOverlay, handleIsOverlay } = useOverlay();
  const { page } = useDictionary();

  return (
    <div className={styles.container}>
      <Typography>Hello, i am a typography component</Typography>
      <Button onClick={handleIsOverlay}>
        {page?.document.body.button_text_test}
      </Button>
      <Portal isVisible={isOverlay} onClose={handleIsOverlay}>
        <Title Component="h3">{page?.document.body.title_portal_test}</Title>
      </Portal>
    </div>
  );
};

export default Home;
