module.exports = {
   presets: ['module:metro-react-native-babel-preset'],
   env: {
      production: {
         plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
      },
   },
   plugins: [
      [
         'module-resolver',
         {
            root: ['./src'],
            alias: {
               '@img': './assets/images',
               '@tab': './assets/images/tab',
            },
         },
      ],
      ['transform-inline-environment-variables'],
   ],
};
