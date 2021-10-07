import { ShortcutClient } from '../ShortcutClient';

jest.unmock('axios');

describe('ShortcutClient', () => {
  const token = 'SOME-TOKEN';

  it('uses the expected baseURL', () => {
    const shortcut = new ShortcutClient(token);

    expect(shortcut.instance.defaults.baseURL).toBe(
      'https://api.app.shortcut.com',
    );
  });

  it('adds Shortcut-Token to default headers', async () => {
    const shortcut = new ShortcutClient(token);

    expect(shortcut.instance.defaults.headers).toHaveProperty(
      'Shortcut-Token',
      token,
    );
  });
});
