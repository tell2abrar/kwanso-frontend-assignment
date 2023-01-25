import Layout from 'components/layout';
import router from 'navigation/router';
import AppContext from 'AppContext';
import primaryTheme from 'theme/primaryTheme';
import { Task } from 'types/task';
import { useState } from 'react';
import { RouterSwitch } from 'react-typesafe-routes';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      name: 'My Task',
    },
  ]);

  return (
    <div>
      <AppContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <ChakraProvider theme={primaryTheme}>
            <Layout>
              <RouterSwitch router={router} />
            </Layout>
          </ChakraProvider>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default App;
