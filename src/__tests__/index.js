/* @flow */

import Client from '../index';

class TestFactory {
  requests: Object[];

  constructor(requests: Object[]) {
    this.requests = requests;
  }
  makeRequest(url: string, method: ?string, body: ?any): Promise<*> {
    this.requests.push({ url, method, body });
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(body),
    });
  }
}

const makeClient = (factory: TestFactory) =>
  new Client(
    {
      baseURL: 'http://localhost:4001',
      version: 'beta',
    },
    factory,
  );

describe('#Client', () => {
  it('return a new instance with the correct defaults', () => {
    const client = Client.create('token value');
    expect(client.version).toBe('beta');
  });

  describe('.listProjects', () => {
    it('returns a list of projects with a clubhouse account', async () => {
      const requests = [];
      const client = makeClient(new TestFactory(requests));

      await client.listProjects();

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.getProject', () => {
    it('requests a single project', async () => {
      const requests = [];
      const client = makeClient(new TestFactory(requests));

      await client.getProject(1234);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.createProject', () => {
    it('creates a new project', async () => {
      const requests = [];
      const client = makeClient(new TestFactory(requests));

      await client.createProject({ name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.updateProject', () => {
    it('updates a existing project', async () => {
      const requests = [];
      const client = makeClient(new TestFactory(requests));

      await client.updateProject(12, { name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteProject', () => {
    it('deletes a existing project', async () => {
      const requests = [];
      const client = makeClient(new TestFactory(requests));

      await client.deleteProject(1);

      expect(requests).toMatchSnapshot();
    });
  });
});
