import { Box, chakra, Flex } from '@chakra-ui/react';
import Footer from 'components/footer';
import Header from 'components/header';

type PrimaryLayoutProps = {
  children: React.ReactElement;
};

const Container = chakra(Box, {
  baseStyle: {
    flexGrow: 1,
  },
});

const Layout = ({ children }: PrimaryLayoutProps) => {
  return (
    <Flex flexDirection='column' width='100%' minHeight='100vh'>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  );
};

export default Layout;
