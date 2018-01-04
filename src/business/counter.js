import createReducer from './reducer';

export default function (container) {
  const {actions, reducers, store} = createReducer();

  return {
    actions,
    reducers,
    store,
  };
}
