module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: './src',
          common: './src/common',
          lib: './src/lib',
          app: './src/app',
          navigators: './src/navigators',
        },
      },
    ]
  ],
};
