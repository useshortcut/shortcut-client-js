import TokenRequestFactory from '../TokenRequestFactory';

require('fetch-everywhere');

describe('TokenRequestFactory', () => {
  describe('GET Requests', () => {
    it('correctly combines query parameters', () => {
      const factory = new TokenRequestFactory(
        'abc-123',
        'https://api.clubhouse.io',
        'v3',
      );

      const request = factory.createRequest('search/stories', 'GET', {
        query: 'project:mobile',
      });

      expect(request.url).toEqual(
        'https://api.clubhouse.io/api/v3/search/stories?token=abc-123&query=project%3Amobile',
      );

      // $FlowFixMe
      expect(request.body).toBeUndefined();
    });
  });

  describe('POST/PUT Requests', () => {
    it('correctly combines query parameters', async () => {
      const factory = new TokenRequestFactory(
        'abc-123',
        'https://api.clubhouse.io',
        'v3',
      );

      const request = factory.createRequest('search/stories', 'POST', {
        query: 'project:mobile',
      });

      expect(request.url).toEqual(
        'https://api.clubhouse.io/api/v3/search/stories?token=abc-123',
      );

      // $FlowFixMe
      expect(JSON.parse(await request.text())).toEqual({
        query: 'project:mobile',
      });
    });
  });
});
