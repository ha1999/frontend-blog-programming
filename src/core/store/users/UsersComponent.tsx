import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getName } from './usersSlice';

function UsersComponent() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const changeName = useCallback(() => {
    dispatch({ type: 'CHANGE_NAME', payload: new Date().getTime().toString() });
  }, [dispatch]);
  const clearName = useCallback(() => {
    dispatch({ type: 'CLEAR_NAME' });
  }, [dispatch]);
  return (
    <div>
      <p>
        My name is
        {name}
      </p>
      <button onClick={changeName}>Change name</button>
      <button onClick={clearName}>Clear name</button>
    </div>
  );
}

export default UsersComponent;
