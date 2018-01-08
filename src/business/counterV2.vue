<template>
  <div>
    <h1>{{state}}</h1>
    <span>{{state.count}}</span>
    <button @click="clear">actions in methods (clear)</button>
    <button @click="stores.actions.set({count:77})">actions on element (set)</button>
    <button @click="setAfter1">business in methods (set after 1 second)</button>
  </div>
</template>

<script>
  import decorator from 'vue-own-redux/decorator';

  @decorator
  class Main {
    props = ['stores'];

    methods = {
      clear() {
        this.stores.actions.clear();
      },
      setAfter1() {
        this.stores.business.setCount666After1Second();
      }
    };
  }

  export default new Main();
</script>
