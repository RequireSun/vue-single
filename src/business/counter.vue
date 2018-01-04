<template>
  <div>
    <connect :stores="stores">
      <div slot-scope="scope">
        <h1>{{scope.state}}</h1>
        <button @click="add">actions in methods</button>
        <button @click={scope.action.minus({amount:1})}>actions on element</button>
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
      add() {
        this.stores.actions.add({
          amount: 1,
        });
      }
    };
  }

  export default new Main();
</script>
