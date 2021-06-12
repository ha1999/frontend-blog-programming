import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCount } from './fakeSlice';
import { sagaActions } from './sagaActions';

function FakeComponent() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const addToCount = useCallback(() => {
    dispatch({ type: sagaActions.ADD_TO_COUNT, payload: 5 });
  }, [dispatch]);
  const subOfCount = useCallback(() => {
    dispatch({ type: sagaActions.SUB_OF_COUNT, payload: 5 });
  }, [dispatch]);
  return (
    <div>
      <p>
        Count is
        {count}
      </p>
      <button onClick={addToCount}>Add to count</button>
      <button onClick={subOfCount}>Sub of count</button>
    </div>
  );
}

export default FakeComponent;
