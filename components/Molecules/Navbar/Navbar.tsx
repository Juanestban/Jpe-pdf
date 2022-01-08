import { useTheme } from '@jpe-reader/hooks/useTheme';
import Link from '@jpe-reader/components/Atoms/Link';
import Button from '../../Atoms/Button';
import styles from './styles.module.css';
import { LanguageSelection } from '../LanguageSelection';
import Title from '@jpe-reader/components/Atoms/Title';

export default function Navbar() {
  const { theme, handleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.containerTitle}>
        <Title Component="h1">JEP-Reader</Title>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Button
              icon={theme === 'light' ? 'IoSunnyOutline' : 'IoMoonSharp'}
              onClick={handleTheme}
            />
          </li>
          <li>
            <LanguageSelection />
          </li>
        </ul>
      </nav>
    </header>
  );
}
