/* @flow */

import Client from '../index';
import { createTestClient } from './utils';

describe('#Client', () => {
  it('return a new instance with the correct defaults', () => {
    const client = Client.create('token value');
    expect(client.requestFactory.version).toBe('beta');
  });

  describe('.listProjects', () => {
    it('returns a list of projects with a clubhouse account', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: [] });
      });

      await client.listProjects();

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.getProject', () => {
    it('requests a single project', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { id: 1234 } });
      });

      await client.getProject(1234);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.createProject', () => {
    it('creates a new project', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { name: 'test' } });
      });

      await client.createProject({ name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.updateProject', () => {
    it('updates a existing project', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { name: 'test' } });
      });

      await client.updateProject(12, { name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteProject', () => {
    it('deletes a existing project', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.deleteProject(1);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteComment', () => {
    it('deletes a existing comment', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.deleteStoryComment(5, 3);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.updateComment', () => {
    it('update a existing comment', async () => {
      const requests = [];
      const client = createTestClient(request => {
        requests.push(request);
        return Promise.resolve({
          status: 200,
          body: { text: 'this is a test comment' },
        });
      });

      await client.updateStoryComment(12, 5, 'this is a test comment');

      expect(requests).toMatchSnapshot();
    });
  });
});
