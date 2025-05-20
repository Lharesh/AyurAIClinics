module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    [
      '@babel/plugin-transform-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
};