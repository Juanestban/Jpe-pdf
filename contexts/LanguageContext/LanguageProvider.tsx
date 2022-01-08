import { ReactNode, Dispatch, createContext, useReducer } from 'react';
import { languageReducer } from './LanguageReducer';

export enum LanguagesTypes {
  engish = '@ENGISH-STATE',
  spanish = '@SPANISH-STATE',
}

export type LangState = 'Español' | 'English';

export type ActionLanguage = { type: LanguagesTypes };

export interface LanguageContextState {
  lang: LangState;
  dispatch: Dispatch<ActionLanguage>;
  langEnables: LangState[];
}

export const LanguageContext = createContext<LanguageContextState>({
  lang: 'Español',
  dispatch: () => undefined,
  langEnables: [],
});

export interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, dispatch] = useReducer(languageReducer, 'Español');
  const langEnables: LangState[] = ['English', 'Español'];

  return (
    <LanguageContext.Provider value={{ lang, dispatch, langEnables }}>
      {children}
    </LanguageContext.Provider>
  );
}
