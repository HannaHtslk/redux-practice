import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/todoSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={() => dispatch(toggleCompleted(task.id))}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => dispatch(deleteTask(task.id))}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
