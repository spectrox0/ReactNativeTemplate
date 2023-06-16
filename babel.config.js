module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
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
        root: ['.'],
        alias: {
          '@atoms': './src/components/atoms',
          '@atoms/*': './src/components/atoms/*',
          '@molecules': './src/components/molecules',
          '@molecules/*': './src/components/molecules/*',
          '@organisms': './src/components/organisms',
          '@organisms/*': './src/components/organisms/*',
          '@templates': './src/components/templates',
          '@templates/*': './src/components/templates/*',
          '@actions/*': './src/store/actions/*',
          '@actions': './src/store/actions',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
