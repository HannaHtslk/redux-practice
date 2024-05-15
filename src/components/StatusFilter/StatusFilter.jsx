import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { selectFilters, setStatusFilter } from '../../redux/filterSlice';

export const StatusFilter = () => {
  const filter = useSelector(selectFilters);

  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => dispatch(setStatusFilter('all'))}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => dispatch(setStatusFilter('active'))}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => dispatch(setStatusFilter('completed'))}
      >
        Completed
      </Button>
    </div>
  );
};
