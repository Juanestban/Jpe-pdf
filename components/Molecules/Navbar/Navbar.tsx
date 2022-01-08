import { useTheme } from '@jpe-reader/hooks/useTheme';
import { Link } from '@jpe-reader/components/Atoms/Link';
import Button from '../../Atoms/Button';
import styles from './styles.module.css';

export default function Navbar() {
  const { theme, handleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.containerTitle}>
        <h1>JEP-Reader</h1>
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
            <Button icon="IoLanguage" onClick={handleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
