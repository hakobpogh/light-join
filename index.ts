const lightJoin = (...args: string[]) => {
  const paths = args.map((path, ind) => ind ? clearStart(clearEnd(path)) : clearEnd(path));

  return paths.join('/');
};

const clearStart = (path: string) => path.replace(/^\/+/, '');
const clearEnd = (path: string) => path.replace(/\/+$/, '');

export default lightJoin;
