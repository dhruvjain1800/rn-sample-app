module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@src': './src',
          '@modules': './src/modules',
          '@modules/*': './src/modules/*',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@assets': './src/assets',
          '@config': './src/config',
          '@modals': './src/modals',
          '@modals/*': './src/modals/*',
          '@redux': './src/redux',
          '@redux/*': './src/redux/*',
          '@services': './src/services',
          '@services/*': './src/services/*',
          '@styles': './src/styles',
          '@styles/*': './src/styles/*',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
};
