import type { LangState, ActionLanguage } from './LanguageProvider';
import { LanguagesTypes } from './LanguageProvider';

export function languageReducer(
  lang: LangState,
  action: ActionLanguage
): LangState {
  switch (action.type) {
    case LanguagesTypes.engish:
      return 'English';
    case LanguagesTypes.spanish:
      return 'Español';
    default:
      return lang;
  }
}
