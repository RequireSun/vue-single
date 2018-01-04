import createReducer from './reducer';

export default function () {
  const {actions, reducers, store} = createReducer();

  return {
    actions,
    reducers,
    store,
  };
}
