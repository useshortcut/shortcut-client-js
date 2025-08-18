import { Api } from './generated/Api';
import { ContentType } from './generated/http-client';
import type { ApiConfig, RequestParams } from './generated/http-client';
import type { SearchStories, StorySlim } from './generated/data-contracts';

export class ShortcutClient<
  SecurityDataType = unknown,
> extends Api<SecurityDataType> {
  constructor(apiToken: string, config: ApiConfig<SecurityDataType> = {}) {
    if (apiToken == null || typeof apiToken !== 'string') {
      // eslint-disable-next-line no-console
      console.error('You need to supply an API Token.');
    }

    super({
      headers: { 'Shortcut-Token': apiToken, ...config.headers },
      ...config,
    });
  }

  /**
   * @deprecated Use queryStories instead.
   * @description Search Stories (Old) lets you search Stories based on desired parameters.
   *
   * @name SearchStoriesOld
   * @summary Search Stories (Old)
   * @request POST:/api/v3/stories/search
   * @secure
   */
  searchStoriesOld = (
    searchStories: SearchStories,
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/stories/search`,
      method: 'POST',
      body: searchStories,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
