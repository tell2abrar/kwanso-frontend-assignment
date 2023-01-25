import router from 'navigation/router';
import primaryTheme from 'theme/primaryTheme';
import {
  Box,
  Text,
  Input,
  Button,
  chakra,
  FormControl,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useContextApi } from 'AppContext';
import { Field, Form, Formik } from 'formik';
import { v4 as uuid } from 'uuid';

const Wrapper = chakra(Box, {
  baseStyle: {
    padding: '15px 15px 0 15px',
    color: primaryTheme.colors.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Container = chakra(Box, {
  baseStyle: {
    width: '50%',
    margin: '0 auto',
  },
});

const CreateTaskPage = () => {
  const { tasks, setTasks } = useContextApi();
  const history = useHistory();

  return (
    <Wrapper>
      <Text marginBottom='20px'>Create Task</Text>
      <Container>
        <Formik
          initialValues={{ task: '' }}
          onSubmit={(values) => {
            setTasks([...tasks, { id: uuid(), name: values.task }]);
            history.push({
              pathname: router.listTasks().$,
            });
          }}
        >
          {() => (
            <Form>
              <Field name='task'>
                {({ field }: any) => (
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='name'
                      border={'1px solid black'}
                    />
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme='teal' type='submit'>
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};

export default CreateTaskPage;
