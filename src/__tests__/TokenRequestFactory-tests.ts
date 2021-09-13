import TokenRequestFactory from '../TokenRequestFactory';

describe('TokenRequestFactory', () => {
  describe('GET Requests', () => {
    it('correctly combines query parameters', () => {
      const factory = new TokenRequestFactory(
        'abc-123',
        'https://api.app.shortcut.com',
        'v3',
      );

      const request = factory.createRequest('search/stories', 'GET', {
        query: 'project:mobile',
      });

      expect(request.url).toEqual(
        'https://api.app.shortcut.com/api/v3/search/stories?token=abc-123&query=project%3Amobile',
      );

      // $FlowFixMe
      expect(request.body).toBeNull();
    });
  });

  describe('POST/PUT Requests', () => {
    it('correctly combines query parameters', async () => {
      const factory = new TokenRequestFactory(
        'abc-123',
        'https://api.app.shortcut.com',
        'v3',
      );

      const request = factory.createRequest('search/stories', 'POST', {
        query: 'project:mobile',
      });

      expect(request.url).toEqual(
        'https://api.app.shortcut.com/api/v3/search/stories?token=abc-123',
      );

      // $FlowFixMe
      expect(JSON.parse(await request.text())).toEqual({
        query: 'project:mobile',
      });
    });
  });
});
