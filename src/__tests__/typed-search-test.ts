import { ShortcutClient, DateRanges } from '../ShortcutClient';

// Mock the generated API
jest.mock('../generated/Api', () => ({
  Api: class MockApi {
    searchStories = jest.fn();

    searchEpics = jest.fn();

    searchIterations = jest.fn();

    searchObjectives = jest.fn();
  },
}));

describe('ShortcutClient Typed Search', () => {
  let client: ShortcutClient;

  beforeEach(() => {
    client = new ShortcutClient('test-token');
  });

  describe('buildSearchQuery', () => {
    test('builds simple text search query', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({ name: 'test story' });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'name:"test story"',
      });
    });

    test('builds complex story search query with multiple filters', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({
        name: 'login feature',
        story_type: 'feature',
        archived: false,
        owner_ids: ['user-1', 'user-2'],
        epic_ids: [123, 456],
        created_at_start: '2024-01-01',
        created_at_end: '2024-12-31',
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query:
          'name:"login feature" archived:false owner:user-1 owner:user-2 type:feature epic:123 epic:456 created:2024-01-01..2024-12-31',
      });
    });

    test('builds epic search query', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchEpics as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchEpicsTyped({
        state: 'started',
        team_ids: ['team-1'],
        label_names: ['frontend'],
      });

      expect(client.searchEpics).toHaveBeenCalledWith({
        query: 'state:started team:team-1 label:"frontend"',
      });
    });

    test('builds iteration search query with date ranges', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchIterations as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchIterationsTyped({
        state: 'done',
        start_date_start: '2024-01-01',
        end_date_end: '2024-12-31',
      });

      expect(client.searchIterations).toHaveBeenCalledWith({
        query: 'state:done start:2024-01-01..* end:*..2024-12-31',
      });
    });

    test('builds objective search query', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchObjectives as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchObjectivesTyped({
        description: 'quarterly goals',
        archived: true,
        owner_ids: ['manager-1'],
      });

      expect(client.searchObjectives).toHaveBeenCalledWith({
        query: 'description:"quarterly goals" archived:true owner:manager-1',
      });
    });

    test('handles null project IDs correctly', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({
        project_ids: [123, null, 456],
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'project:123 project:none project:456',
      });
    });

    test('passes search options correctly', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped(
        { name: 'test' },
        {
          page_size: 10,
          detail: 'slim',
          next: 'token123',
        },
      );

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'name:"test"',
        page_size: 10,
        detail: 'slim',
        next: 'token123',
      });
    });
  });

  describe('search methods return data correctly', () => {
    test('searchStoriesTyped returns response data', async () => {
      const mockData = {
        total: 5,
        data: [{ id: 1, name: 'Test Story' }],
        next: null as string | null,
      };
      const mockResponse = { data: mockData };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      const result = await client.searchStoriesTyped({ name: 'test' });

      expect(result).toEqual(mockData);
    });

    test('searchEpicsTyped returns response data', async () => {
      const mockData = {
        total: 3,
        data: [{ id: 1, name: 'Test Epic' }],
        next: null as string | null,
      };
      const mockResponse = { data: mockData };
      (client.searchEpics as jest.Mock).mockResolvedValue(mockResponse);

      const result = await client.searchEpicsTyped({ name: 'test' });

      expect(result).toEqual(mockData);
    });
  });

  describe('Enhanced date handling', () => {
    test('handles DateRange objects', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({
        created_at: {
          start: '2024-01-01',
          end: '2024-12-31',
        },
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'created:2024-01-01..2024-12-31',
      });
    });

    test('handles Date objects', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      const startDate = new Date('2024-01-01T00:00:00Z');
      const endDate = new Date('2024-12-31T23:59:59Z');

      await client.searchStoriesTyped({
        created_at: {
          start: startDate,
          end: endDate,
        },
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'created:2024-01-01..2024-12-31',
      });
    });

    test('DateRange takes precedence over individual start/end fields', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({
        created_at: { start: '2024-01-01', end: '2024-12-31' },
        created_at_start: '2023-01-01', // This should be ignored
        created_at_end: '2023-12-31', // This should be ignored
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'created:2024-01-01..2024-12-31',
      });
    });

    test('handles open-ended date ranges', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      await client.searchStoriesTyped({
        created_at: { start: '2024-01-01' }, // No end date
        updated_at: { end: '2024-12-31' }, // No start date
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'created:2024-01-01..* updated:*..2024-12-31',
      });
    });

    test('works with DateRanges helpers', async () => {
      const mockResponse = {
        data: { total: 0, data: [] as any[], next: null as string | null },
      };
      (client.searchStories as jest.Mock).mockResolvedValue(mockResponse);

      // Use fake timers for consistent testing
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2024-06-15T12:00:00Z'));

      await client.searchStoriesTyped({
        created_at: DateRanges.today(),
      });

      expect(client.searchStories).toHaveBeenCalledWith({
        query: 'created:2024-06-15..2024-06-15',
      });

      // Restore real timers
      jest.useRealTimers();
    });
  });

  describe('DateRanges helpers', () => {
    beforeEach(() => {
      // Mock a consistent date for testing
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2024-06-15T12:00:00Z'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('today() returns current date range', () => {
      const range = DateRanges.today();
      expect(range).toEqual({
        start: '2024-06-15',
        end: '2024-06-15',
      });
    });

    test('lastDays() returns correct range', () => {
      const range = DateRanges.lastDays(7);
      expect(range).toEqual({
        start: '2024-06-09', // 7 days ago including today
        end: '2024-06-15',
      });
    });

    test('since() returns open-ended start range', () => {
      const range = DateRanges.since('2024-01-01');
      expect(range).toEqual({
        start: '2024-01-01',
      });
    });

    test('until() returns open-ended end range', () => {
      const range = DateRanges.until('2024-12-31');
      expect(range).toEqual({
        end: '2024-12-31',
      });
    });

    test('between() returns closed range', () => {
      const range = DateRanges.between('2024-01-01', '2024-12-31');
      expect(range).toEqual({
        start: '2024-01-01',
        end: '2024-12-31',
      });
    });
  });
});
