/* @flow */

import TokenRequestFactory from '../TokenRequestFactory';

require('fetch-everywhere');

describe('#TokenRequestFactory', () => {
  it('correctly combines query parameters', () => {
    const factory = new TokenRequestFactory('abc-123');
    const request = factory.createRequest('search/stories', 'GET', {
      query: 'project:mobile',
    });
    expect(request.url).toEqual('search/stories?token=abc-123&query=project:mobile');
  });
});
