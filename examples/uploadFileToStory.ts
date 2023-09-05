import * as fs from 'fs';
import * as streamToBlob from 'stream-to-blob';

import { ShortcutClient } from '../src';

(async () => {
  const shortcut = new ShortcutClient(process.env.SHORTCUT_API_TOKEN); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

  const FILE_PATH = `${__dirname}/logo.png`;

  const { data: story } = await shortcut.createStory({
    name: 'Upload a file to a story',
    project_id: 2,
  });

  console.log('Story created with ID:', story.id);

  // This is proper to Node, replace this based on your environment
  const fileStream = fs.createReadStream(FILE_PATH);

  const { data: file } = await shortcut.uploadFiles({
    story_id: story.id,
    file0: (await streamToBlob(fileStream)) as any, // On Web, this is expecting a File object, but on Node, it's a ReadableStream
  });

  console.log(file);
})();
