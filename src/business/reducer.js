import {createStore, applyMiddleware} from 'redux';
import {createActions,handleActions} from 'redux-actions';

const ADD = 'ADD';

export default function () {
  const actions = createActions({
    [ADD]: info => info,
  });

  const reducers = handleActions({
    [ADD](state, action) {
      return {
        ...state,
        count: state.count + action.payload.amount,
      }
    }
  }, {
    count: 0,
  });

  const store = createStore(reducers);

  return {
    actions,
    reducers,
    store,
  };
}
