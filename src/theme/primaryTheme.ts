import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    700: '#2a69ac',
    800: '#153e75',
    900: '#1a365d',
  },
  button: {
    primary: '#FFD215',
    secondary: '#FFD31A',
    tertiary: '#00000',
  },
};

const primaryTheme = extendTheme({ colors });

export default primaryTheme;
