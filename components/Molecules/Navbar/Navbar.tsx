import Link from '@jpe-reader/components/Atoms/Link';
import Button from '../../Atoms/Button';
import Title from '@jpe-reader/components/Atoms/Title';
import { LanguageSelection } from '../LanguageSelection';
import { useTheme } from '@jpe-reader/hooks/useTheme';
import { useDictionary } from '@jpe-reader/hooks/useLanguage';
import styles from './styles.module.css';

export default function Navbar() {
  const { theme, handleTheme } = useTheme();
  const { navbar } = useDictionary();

  return (
    <header className={styles.header}>
      <div className={styles.containerTitle}>
        <Title Component="h1">{navbar.title}</Title>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">{navbar.home}</Link>
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
