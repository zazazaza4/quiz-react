import { getLanguageToCode } from './getLanguageToCode';

describe('getLanguageToCode', () => {
  test('should return language code for English', () => {
    const code = getLanguageToCode('English');
    expect(code).toEqual('en');
  });

  test('should return language code for French', () => {
    const code = getLanguageToCode('French');
    expect(code).toEqual('fr');
  });

  test('should return language code for German', () => {
    const code = getLanguageToCode('German');
    expect(code).toEqual('de');
  });

  test('should return language code for Spanish', () => {
    const code = getLanguageToCode('Spanish');
    expect(code).toEqual('es');
  });

  test('should return default language code for unknown language', () => {
    const code = getLanguageToCode('Unknown Language');
    expect(code).toEqual('en');
  });
});
