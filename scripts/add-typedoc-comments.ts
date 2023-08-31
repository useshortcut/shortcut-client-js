import { API, FileInfo } from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  return root
    .find(j.ClassDeclaration)
    .filter(
      (path) =>
        path.value.id?.type === 'Identifier' &&
        ['Api', 'HttpClient'].includes(path.value.id.name),
    )
    .forEach((path) => {
      const target =
        path.parent.value.type === 'ExportNamedDeclaration'
          ? path.parent
          : path;

      const desc =
        path.value.id?.name === 'Api'
          ? "\n * Please don't use this class directly, instead use the `ShortcutClient` class we provided which is extending this class to add headers for authorization."
          : '\n';

      target.insertBefore(`/** ${desc} * @internal\n * @private\n */`);
    })
    .toSource();
}
