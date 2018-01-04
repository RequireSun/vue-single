import {createStore} from 'redux';
import {createActions,handleActions} from 'redux-actions';
import bindActions from 'vue-own-redux/bindActions';

const ADD = 'ADD';
const TEST_ACTION = 'TEST_ACTION';

export default function () {
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

  const actions = bindActions(store, createActions({
    [ADD]: info => info,
  }));

  return {
    actions,
    reducers,
    store,
  };
}
