const lightJoin = (...args: unknown[]): string => {
  const paths = args.map((path, ind) => {
    if (!ind) {
      path = clearStart(String(path));
    }

    if (ind !== args.length - 1) {
      path = clearEnd(String(path));
    }

    return path;
  });

  return paths.join('/');
};

const clearStart = (path: string) => path.replace(/^\/+/, '');
const clearEnd = (path: string) => path.replace(/\/+$/, '');

export default lightJoin;
