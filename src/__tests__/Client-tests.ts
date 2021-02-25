import Client from '../index';
import { createTestClient } from './utils';
import { StoryLinkVerb } from '../types';

describe('#Client', () => {
  it('return a new instance with the correct defaults', () => {
    const client = Client.create('token value');
    expect(client.requestFactory.version).toBe('v3');
  });

  describe('.listProjects', () => {
    it('returns a list of projects with a clubhouse account', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.listProjects();

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.getProject', () => {
    it('requests a single project', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { id: 1234 } });
      });

      await client.getProject(1234);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.createProject', () => {
    it('creates a new project', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { name: 'test' } });
      });

      await client.createProject({ name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.updateProject', () => {
    it('updates a existing project', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: { name: 'test' } });
      });

      await client.updateProject(12, { name: 'test' });

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteProject', () => {
    it('deletes a existing project', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.deleteProject(1);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteComment', () => {
    it('deletes a existing comment', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.deleteStoryComment(5, 3);

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.updateComment', () => {
    it('update a existing comment', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
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

  describe('.addReaction', () => {
    it('add a reaction to story', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.addReaction(1, 5, ':happy');

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteReaction', () => {
    it('deletes a reaction in story', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.deleteReaction(1, 5, ':happy');

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.createStoryLink', () => {
    it('create a story link', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const storyLink = {
        object_id: 1234,
        subject_id: 1,
        verb: 'blocks' as StoryLinkVerb,
      };
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });
      await client.createStoryLink(storyLink);
      expect(requests).toMatchSnapshot();
    });
  });

  describe('.getStoryLink', () => {
    it('get a story link', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const storyLinkId = 1234;
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });
      await client.getStoryLink(storyLinkId);
      expect(requests).toMatchSnapshot();
    });
  });

  describe('.deleteStoryLink', () => {
    it('delete a story link', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const storyLinkId = 1234;
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });
      await client.deleteStoryLink(storyLinkId);
      expect(requests).toMatchSnapshot();
    });
  });

  describe('.createLabel', () => {
    it('create a label', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.createLabel('sup', 'fff');

      expect(requests).toMatchSnapshot();
    });
  });

  describe('.listLabels', () => {
    it('list all labels', async () => {
      const requests:
        | any[]
        | { uri: string; method?: string; body?: Record<string, any> }[] = [];
      const client = createTestClient((request) => {
        requests.push(request);
        return Promise.resolve({ status: 200, body: {} });
      });

      await client.listLabels();

      expect(requests).toMatchSnapshot();
    });
  });
});
