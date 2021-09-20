import { Api } from './generated/Api';
import type { ApiConfig } from './generated/http-client';

export class ShortcutApi<
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
}
