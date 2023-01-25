import { OptionsRouter } from 'react-typesafe-routes';
import { BulkDeleteTasksPage, CreateTaskPage, ListTasksPage } from 'pages';

// Ref: https://github.com/innFactory/react-typesafe-routes

const defaultOptions = {};

const router = OptionsRouter(defaultOptions, (route) => ({
  home: route('/', {
    component: ListTasksPage,
  }),

  listTasks: route('list-tasks', {
    component: ListTasksPage,
  }),

  createTasks: route('create-task', {
    component: CreateTaskPage,
  }),

  bulkDeleteTask: route('bulk-delete', {
    component: BulkDeleteTasksPage,
  }),
}));

export default router;
