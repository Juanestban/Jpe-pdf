import type { NextPage } from 'next';
import Button from '@jpe-reader/components/Atoms/Button';
import styles from '../styles/Home.module.css';
import Portal from '@jpe-reader/components/Organisms/Portal';
import { useToggle } from '@jpe-reader/hooks/useToggle';
import Title from '@jpe-reader/components/Atoms/Title';
import Typography from '@jpe-reader/components/Atoms/Typography';

const Home: NextPage = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={styles.container}>
      <Button onClick={handleToggle}>button</Button>
      <Typography>Hello, i am a typography component</Typography>
      <Portal isVisible={toggle} onClose={handleToggle}>
        <Title Component="h3">holaaa</Title>
      </Portal>
    </div>
  );
};

export default Home;
