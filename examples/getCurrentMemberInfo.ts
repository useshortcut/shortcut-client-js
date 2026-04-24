import { ShortcutClient } from '../lib/index.mjs';

const shortcut = new ShortcutClient(process.env.SHORTCUT_API_TOKEN); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

const { data: member } = await shortcut.getCurrentMemberInfo();

console.log(member);
