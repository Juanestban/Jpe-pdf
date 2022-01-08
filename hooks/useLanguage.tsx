import { useContext } from 'react';
import {
  LanguageContext,
  LanguagesTypes,
} from '@jpe-reader/contexts/LanguageContext';
import en from '@jpe-reader/languages/engish.json';
import sp from '@jpe-reader/languages/spanish.json';

export const useLanguage = () => useContext(LanguageContext);

export const useLanguageDispatchAll = (): (() => void)[] => {
  const { dispatch } = useContext(LanguageContext);
  const typesArr: LanguagesTypes[] = [
    LanguagesTypes.engish,
    LanguagesTypes.spanish,
  ];

  return typesArr.map((type) => () => {
    dispatch({ type });
  });
};

export const useLanguageDispatch = (lang: keyof typeof LanguagesTypes) => {
  const { dispatch } = useContext(LanguageContext);
  return () => dispatch({ type: LanguagesTypes[lang] });
};

export const useSpanish = (): (() => void) => {
  const { dispatch } = useLanguage();

  return () => dispatch({ type: LanguagesTypes.spanish });
};
export const useEngish = (): (() => void) => {
  const { dispatch } = useLanguage();

  return () => dispatch({ type: LanguagesTypes.engish });
};

// Dictionary

export const useDictionary = (): {
  LangState: string;
  navbar: typeof sp.navbar | typeof en.navbar;
  page: typeof sp.page | typeof en.page;
} => {
  const { lang } = useContext(LanguageContext);
  const languages = [en, sp];

  const dictionary = languages.find((curr) => curr.LangState === lang);
  // const { navbar, page } = dictionary;

  if (dictionary === undefined) {
    const dictionary = languages[0];

    return { ...dictionary };
  }

  return { ...dictionary };
};
