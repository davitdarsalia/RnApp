module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
        {
            root: ['./'],
              alias: {
                '@Components': './Src/Components',
                '@Constants': './Src/Constants',
                '@Containers': './Src/Containers',
                '@Forms': './Src/Forms',
                '@Generics': './Src/Generics',
                '@Navigation': './Src/Navigation',
                '@Primitives': './Src/Primitives',
                '@Screens': './Src/Screens',
                '@Store': './Src/Store',
                '@Translate': './Src/Translate',
              }
        }
    ],
    'react-native-reanimated/plugin'
  ]
}