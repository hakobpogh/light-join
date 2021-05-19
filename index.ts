const lightJoin = (...args: unknown[]): string => (
  args.join('/').replace(
    /^([^/]+:\/\/[^/])?(.*)$/,
    (_, prefix, rest) => (prefix || '') + cleanSlashes(rest)
  )
);

const cleanSlashes = (str: string) => str.replace(/\/\/+/g, '/');

export default lightJoin;
