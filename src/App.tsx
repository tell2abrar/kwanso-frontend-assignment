import Layout from 'components/layout';
import router from 'navigation/router';
import AppContext from 'AppContext';
import primaryTheme from 'theme/primaryTheme';
import { Task } from 'types/task';
import { RouterSwitch } from 'react-typesafe-routes';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {}, []);

  return (
    <div>
      <AppContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <Route exact path='/'>
            {<Redirect to='/list-tasks' />}
          </Route>
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
