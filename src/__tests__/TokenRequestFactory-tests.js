/* @flow */

import TokenRequestFactory from '../TokenRequestFactory';

require('fetch-everywhere');

describe('TokenRequestFactory', () => {
  describe('GET Requests', () => {
    it('correctly combines query parameters', () => {
      const factory = new TokenRequestFactory('abc-123');
      const request = factory.createRequest(
        'https://api.clubhouse.io/beta/search/stories',
        'GET',
        {
          query: 'project:mobile',
        },
      );

      expect(request.url).toEqual(
        'https://api.clubhouse.io/beta/search/stories?query=project%3Amobile&token=abc-123',
      );
      // $FlowFixMe
      expect(request.body).toBeUndefined();
    });
  });

  describe('POST/PUT Requests', () => {
    it('correctly combines query parameters', () => {
      const factory = new TokenRequestFactory('abc-123');
      const request = factory.createRequest(
        'https://api.clubhouse.io/beta/search/stories',
        'POST',
        {
          query: 'project:mobile',
        },
      );
      expect(request.url).toEqual(
        'https://api.clubhouse.io/beta/search/stories',
      );
      // $FlowFixMe
      expect(JSON.parse(request.body)).toEqual({
        query: 'project:mobile',
        token: 'abc-123',
      });
    });
  });
});
