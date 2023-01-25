import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/layout';
import router from 'navigation/router';
import { BrowserRouter } from 'react-router-dom';
import { RouterSwitch } from 'react-typesafe-routes';
import primaryTheme from 'theme/primaryTheme';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ChakraProvider theme={primaryTheme}>
          <Layout>
            <RouterSwitch router={router} />
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
