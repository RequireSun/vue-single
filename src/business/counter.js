// import Vue from 'vue';
import createReducer from './reducer';
// import connector from './connector.vue';
// import counter from './counter.vue';

export default function (container) {
  const {actions, reducers, store} = createReducer();

  // new Vue({
  //   el: container,
  //   render(h) {
  //     return h('div', [h(connector, {
  //       propsData: {
  //         stores: {},
  //       },
  //     }, [h(counter)])]);
  //   },
  // });

  return {
    actions,
    reducers,
    store,
  };
}
