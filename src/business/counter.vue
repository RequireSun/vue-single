<template>
  <div>
    <connect :stores="stores">
      <div slot-scope="scope">
        <h1>{{scope.state}}</h1>
        <span>{{scope.state.count}}</span>
        <button @click="clear">actions in methods (clear)</button>
        <button @click={scope.action.set({count:77})}>actions on element (set)</button>
        <button @click="setAfter1">business in methods (set after 1 second)</button>
      </div>
    </connect>
  </div>
</template>

<script>
  import connect from 'vue-own-redux';

  class Main {
    components = {
      connect,
    };

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
