import { Task } from 'types/task';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const AppContext = createContext<ContextType>({
  tasks: [],
  setTasks: () => {},
});

export default AppContext;
export const useContextApi = () => useContext(AppContext);
