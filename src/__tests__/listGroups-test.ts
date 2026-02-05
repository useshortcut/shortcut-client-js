import { ShortcutClient } from '../ShortcutClient';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('listGroups', () => {
  let shortcut: ShortcutClient;

  let mockRequest: jest.Mock;

  beforeEach(() => {
    mockRequest = jest.fn().mockResolvedValue({ data: [] });
    const mockInstance = {
      defaults: {
        headers: { common: {} },
      },
      request: mockRequest,
    };
    mockedAxios.create.mockReturnValue(mockInstance as any);
    shortcut = new ShortcutClient('test-token');
  });

  it('passes archived=false as a query parameter', async () => {
    await shortcut.listGroups({ archived: false });

    expect(mockRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        url: '/api/v3/groups',
        method: 'GET',
        params: { archived: false },
      }),
    );
  });

  it('passes archived=true as a query parameter', async () => {
    await shortcut.listGroups({ archived: true });

    expect(mockRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        url: '/api/v3/groups',
        method: 'GET',
        params: { archived: true },
      }),
    );
  });

  it('does not pass query params when no arguments are provided', async () => {
    await shortcut.listGroups();

    expect(mockRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        url: '/api/v3/groups',
        method: 'GET',
        params: undefined,
      }),
    );
  });
});
