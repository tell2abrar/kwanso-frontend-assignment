import { Box, Button, chakra, Text } from '@chakra-ui/react';
import { useContextApi } from 'AppContext';
import CustomCard from 'components/card';
import { useState } from 'react';
import primaryTheme from 'theme/primaryTheme';

const Wrapper = chakra(Box, {
  baseStyle: {
    padding: '15px 15px 0 15px',
    color: primaryTheme.colors.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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

const BulkDeleteTasksPage = () => {
  const { tasks, setTasks } = useContextApi();
  const [tasksIds, setTasksIds] = useState<string[]>([]);

  const onClickCheckBoxHanlder = (e: any, id: string) => {
    if (e.target.checked) {
      setTasksIds([...tasksIds, id]);
    } else if (!e.target.checked) {
      const newTasksIds = tasksIds.filter((taskId) => id !== taskId);
      setTasksIds(newTasksIds);
    }
  };

  return (
    <Wrapper>
      <Text marginBottom='20px'>Delete Tasks In Bulk</Text>
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        position={'fixed'}
        right='75px'
        top='65px'
        onClick={() => {
          const updatedTasks = tasks.filter((task) => {
            const hasIt = tasksIds.includes(task.id);
            return !hasIt;
          });
          setTasks(updatedTasks);
        }}
      >
        Delete Selected Tasks
      </Button>

      {tasks.length === 0 && (
        <>
          <NoTasks>Nothing To Delete!</NoTasks>
        </>
      )}
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <CardContainer marginBottom={index === tasks.length - 1 ? 0 : '25px'}>
            <CustomCard
              id={task.id}
              name={task.name}
              key={task.id}
              showCheckBox
              onClickCheckBox={(e, id) => onClickCheckBoxHanlder(e, id)}
            />
          </CardContainer>
        ))}
    </Wrapper>
  );
};

export default BulkDeleteTasksPage;
