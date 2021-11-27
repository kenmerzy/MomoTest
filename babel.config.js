module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': './src/screens',
          '@base': './src/base',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@styles': './src/styles',
          '@graphql': './src/graphql',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@types': './src/types',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
