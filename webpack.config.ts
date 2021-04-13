import { resolve } from 'path';

const config = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            }
          }
        ],
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
    globalObject: 'this'
  },
};

export default (env: any) => {
  const isProd = env.NODE_ENV === 'production' || !!env.prod;
  const mode = isProd ? 'production' : 'development';

  return {
    ...config,
    mode,
  };
};
