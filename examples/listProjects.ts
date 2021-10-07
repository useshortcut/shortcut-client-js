import { ShortcutClient } from '../src';

const shortcut = new ShortcutClient(process.env.SHORTCUT_API_TOKEN); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

shortcut.listProjects().then((response) => console.log(response?.data));
