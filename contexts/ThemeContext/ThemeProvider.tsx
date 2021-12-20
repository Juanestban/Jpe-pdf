import { ReactNode, useState, useEffect, createContext } from 'react';
import classnames from 'classnames';
import { creadentials } from '@jpe-reader/config/credentials';

type Theme = 'light' | 'dark';

interface ThemeContextTypes {
  theme?: Theme;
  handleTheme?(): void;
}

const ThemeContext = createContext<ThemeContextTypes>({});

function ThemeProvider({ children }: { children: ReactNode }) {
  const isThemeDarkOS = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const currentThemeOS: Theme = isThemeDarkOS ? 'dark' : 'light';
  const { storage } = creadentials;
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const currentThemeBrowser = window.localStorage.getItem(storage.theme);

      return currentThemeBrowser === null
        ? currentThemeOS
        : currentThemeBrowser === 'light'
        ? 'light'
        : 'dark';
    } catch {
      return currentThemeOS;
    }
  });
  const containerClasses = classnames(
    `jep-reader-theme-${theme}`,
    'principal-theme'
  );

  const handleTheme = () => {
    const themeChanged: Theme = theme === 'light' ? 'dark' : 'light';

    window.localStorage.setItem(storage.theme, themeChanged);
    setTheme(themeChanged);
  };

  useEffect(() => {}, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={containerClasses}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext };
export type { Theme, ThemeContextTypes };
