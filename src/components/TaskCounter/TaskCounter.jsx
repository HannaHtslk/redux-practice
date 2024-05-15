import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  return (
    <div>
      <p className={css.text}>Active: </p>
      <p className={css.text}>Completed: </p>
    </div>
  );
};
