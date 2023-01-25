import { useContextApi } from 'AppContext';
import { Box, chakra, Text } from '@chakra-ui/react';
import CustomCard from 'components/card';
import primaryTheme from 'theme/primaryTheme';

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

const NoTasks = chakra(Box, {
  baseStyle: {
    color: 'red',
    fontSize: '30px',
    fontWeight: '700',
    textAlign: 'center',
  },
});

const CardContainer = chakra(Box, {
  baseStyle: {
    marginBottom: '25px',
  },
});

const ListTasksPage = () => {
  const { tasks } = useContextApi();

  return (
    <Wrapper>
      <Text marginBottom='20px'>List of All Tasks</Text>
      {tasks.length === 0 && (
        <>
          <NoTasks>Nothing To Show!</NoTasks>
        </>
      )}
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <CardContainer marginBottom={index === tasks.length - 1 ? 0 : '25px'}>
            <CustomCard name={task.name} key={task.id} id={task.id} />
          </CardContainer>
        ))}
    </Wrapper>
  );
};

export default ListTasksPage;
