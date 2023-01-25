import { Box, chakra } from '@chakra-ui/react';
import primaryTheme from 'theme/primaryTheme';

const Wrapper = chakra(Box, {
  baseStyle: {
    padding: '15px 15px 0 15px',
    backgroundColor: primaryTheme.colors.black,
    color: primaryTheme.colors.white,
    textAlign: 'center',
    minHeight: '50px',
  },
});

const Footer = () => {
  return <Wrapper>Kwanso Frontend Assignment </Wrapper>;
};

export default Footer;
