declare module '*.svg' {
   import {SvgProps} from 'react-native-svg';
   const content: React.FC<SvgProps>;
   export default content;
}

declare module '*jpeg' {
   const contetn: {
      uri: string;
   };
   export default content;
}

declare module '*png' {
   const contetn: {
      uri: string;
   };
   export default content;
}

declare module '*.gif' {
   const content: {
      uri: string;
   };
   export default content;
}
