export const getLanguageToCode = (lang: string) => {
  switch (lang) {
    case 'English':
      return 'en';
    case 'French':
      return 'fr';
    case 'German':
      return 'de';
    case 'Spanish':
      return 'es';
    default:
      return 'en';
  }
};
