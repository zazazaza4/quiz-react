import i18next from 'i18next';

export const handleLanguageSelection = (selectedLanguage: string) => {
  switch (selectedLanguage) {
    case 'English':
      i18next.changeLanguage('en');
      break;
    case 'French':
      i18next.changeLanguage('fr');
      break;
    case 'German':
      i18next.changeLanguage('de');
      break;
    case 'Spanish':
      i18next.changeLanguage('es');
      break;
    default:
      break;
  }
};
