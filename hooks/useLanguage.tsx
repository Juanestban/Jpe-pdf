import { useContext } from 'react';
import {
  LanguageContext,
  LanguagesTypes,
} from '@jpe-reader/contexts/LanguageContext';

export const useLanguage = () => useContext(LanguageContext);

export const useSpanish = (): (() => void) => {
  const { dispatch } = useLanguage();

  return () => dispatch({ type: LanguagesTypes.spanish });
};
export const useEngish = (): (() => void) => {
  const { dispatch } = useLanguage();

  return () => dispatch({ type: LanguagesTypes.engish });
};
