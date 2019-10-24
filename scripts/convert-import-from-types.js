const glob = require('glob');
const fs = require('fs');

/**
 * Flowgen can't convert import that are only used for types, so we use this custom script
 * to convert them to `import type {...} from 'x';`
 */

glob('lib/**/*.js.flow', null, (err, files) => {
  files.map(file => {
    const path = `${__dirname}/../${file}`;
    const content = fs.readFileSync(path, 'utf8');
    const typePatched = content.replace(
      /import(?:["'\s]*([\w*${}\n\r\t, ]+)from\s*)?["'\s]["'\s](.*[@\w_-]+)["'\s].*;$/gm,
      "import type $1 from '$2'",
    );

    fs.writeFileSync(path, typePatched, 'utf8');
  });

  console.log('import type patched!');
});
