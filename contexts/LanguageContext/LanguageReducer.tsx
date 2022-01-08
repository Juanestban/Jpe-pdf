import type { LangState, ActionLanguage } from './LanguageProvider';
import { LanguagesTypes } from './LanguageProvider';

export function languageReducer(
  lang: LangState,
  action: ActionLanguage
): LangState {
  switch (action.type) {
    case LanguagesTypes.engish:
      return 'Engish';
    case LanguagesTypes.spanish:
      return 'Spanish';
    default:
      return lang;
  }
}
