import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            h1: 'FAVORITE COMPUTER GAMES LIST',
            loading: 'Please wait. Loading data...',
            gameTitleInput: 'Game Title',
            gameTitlePlaceholder: 'Game Name',
            yearInput: 'Year',
            genreInput: 'Genre',
            genrePlaceholder: '--Please choose an option--',
            raitingInput: 'Raiting',
            developerInput: 'Developer',
            developerPlaceholder: 'Developer',
            publisherInput: 'Publisher',
            publisherPlaceholder: 'split inputs with commas',
            buttonAdd: '+ADD',
            buttonDelete: 'DELETE ITEMS',
          },
        },
      },
      ru: {
        translation: {
          description: {
            h1: 'СПИСОК ЛЮБИМЫХ КОМПЬЮТЕРНЫХ ИГР',
            loading: 'Пожалуйста подождите. Загрузка данных...',
            gameTitleInput: 'Название',
            gameTitlePlaceholder: 'Игра',
            yearInput: 'Год',
            genreInput: 'Жанр',
            genrePlaceholder: '--Выбор жанра--',
            raitingInput: 'Рейтинг',
            developerInput: 'Разработчик',
            developerPlaceholder: 'Разработчик',
            publisherInput: 'Издатель',
            publisherPlaceholder: 'если несколько - через запятые',
            buttonAdd: '+ВВОД',
            buttonDelete: 'УДАЛИТЬ',
          },
        },
      },
    },
  })

export default i18n
