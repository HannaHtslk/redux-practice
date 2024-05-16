import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { selectTasks } from '../../redux/todoSlice';
import { selectFilters } from '../../redux/filterSlice';

const getChosenTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);
  const filteredTasks = getChosenTasks(tasks, filter);

  return (
    <ul className={css.list}>
      {filteredTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
