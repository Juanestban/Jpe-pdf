import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@jpe-reader/components/Atoms/Button';
import Icon from '@jpe-reader/components/Atoms/Icon';
import { styles as css, className, variant } from './styles';
import {
  useDictionary,
  useLanguage,
  useLanguageDispatchAll,
} from '@jpe-reader/hooks/useLanguage';

export default function LanguageSelection() {
  const [hidden, setHidden] = useState<boolean>(true);
  const { lang, langEnables } = useLanguage();
  const dispatchs = useLanguageDispatchAll();
  const { navbar } = useDictionary();

  const handleHidden = () => setHidden(!hidden);

  const handleClickLanguage = (idx: number) => {
    const dispatch = dispatchs[idx];

    handleHidden();
    dispatch();
  };

  return (
    <div className={className}>
      <Button
        about={navbar.lang}
        icon="IoLanguage"
        onClick={handleHidden}
        isFullWidth
      >
        {lang}
        <Icon icon="IoCaretDownOutline" style={{ marginLeft: 5 }} />
      </Button>
      <motion.ul
        className={className}
        animate={hidden ? 'closed' : 'open'}
        variants={variant}
      >
        {langEnables.length > 0 &&
          langEnables.map((language, idx) => (
            <li key={language} className={className}>
              <Button
                onClick={() => handleClickLanguage(idx)}
                rol={language === lang ? 'primary' : 'normal'}
                textAlign="left"
                isFullWidth
              >
                {language}
              </Button>
            </li>
          ))}
      </motion.ul>
      {css}
    </div>
  );
}
