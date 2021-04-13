const lightJoin = (...args: string[]): string => {
  const paths = args.map((path, ind) => {
    if (!ind) {
      path = clearStart(path);
    }

    if (ind === args.length - 1) {
      path = clearEnd(path);
    }

    return path;
  });

  return paths.join('/');
};

const clearStart = (path: string) => path.replace(/^\/+/, '');
const clearEnd = (path: string) => path.replace(/\/+$/, '');

export default lightJoin;
