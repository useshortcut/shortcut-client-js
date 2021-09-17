import { ShortcutApi } from '../src';

const shortcut = new ShortcutApi(process.env.SHORTCUT_API_TOKEN); // See https://github.com/useshortcut/clubhouse-lib#how-to-get-an-api-token

shortcut.getCurrentMemberInfo().then((response) => console.log(response?.data));
