import { ShortcutClient } from '../lib/index.mjs';

const shortcut = new ShortcutClient(process.env.SHORTCUT_API_TOKEN); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

const { data: customFields } = await shortcut.listCustomFields();

console.log(customFields);
