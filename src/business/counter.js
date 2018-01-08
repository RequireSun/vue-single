import {createStore} from 'redux';
import {createActions,handleActions} from 'redux-actions';
import bindActions from 'vue-own-redux/bindActions';

const SET = 'SET';
const CLEAR = 'CLEAR';

export default function () {
  const reducers = handleActions({
    [SET](state, action) {
      return {
        ...state,
        count: action.payload.count,
      }
    },
    [CLEAR](state, action) {
      return {
        ...state,
        count: 0,
      }
    }
  }, {
    count: 0,
  });

  const store = createStore(reducers);

  const actions = bindActions(store, createActions({
    [SET]: info => info,
    [CLEAR]: info => info,
  }));

  const business = {
    setCount666After1Second() {
      setTimeout(() => actions.set({
        count: 666,
      }), 1000);
    },
  };

  return {
    actions,
    reducers,
    store,
    business,
  };
}
