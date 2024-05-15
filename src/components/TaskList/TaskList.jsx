import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { selectTasks } from '../../redux/todoSlice';

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
