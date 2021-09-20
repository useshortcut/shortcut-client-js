import { ShortcutApi } from '../ShortcutApi';

jest.unmock('axios');

describe('ShortcutApi', () => {
  const token = 'SOME-TOKEN';

  it('uses the expected baseURL', () => {
    const shortcut = new ShortcutApi(token);

    expect(shortcut.instance.defaults.baseURL).toBe(
      'https://api.app.shortcut.com',
    );
  });

  it('adds Shortcut-Token to default headers', async () => {
    const shortcut = new ShortcutApi(token);

    expect(shortcut.instance.defaults.headers).toHaveProperty(
      'Shortcut-Token',
      token,
    );
  });
});
