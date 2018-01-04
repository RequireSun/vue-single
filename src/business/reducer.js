import {createStore} from 'redux';
import {createActions,handleActions} from 'redux-actions';
import bindActions from 'vue-own-redux/bindActions';

const ADD = 'ADD';
const MINUS = 'MINUS';

export default function () {
  const reducers = handleActions({
    [ADD](state, action) {
      return {
        ...state,
        count: state.count + action.payload.amount,
      }
    },
    [MINUS](state, action) {
      return {
        ...state,
        count: state.count - action.payload.amount,
      }
    }
  }, {
    count: 0,
  });

  const store = createStore(reducers);

  const actions = bindActions(store, createActions({
    [ADD]: info => info,
    [MINUS]: info => info,
  }));

  return {
    actions,
    reducers,
    store,
  };
}
