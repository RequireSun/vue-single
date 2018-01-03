<template>
  <div>
    <connect :stores="stores">
      <div slot-scope="scope">
        <h1>{{scope.state}}</h1>
        <button @click="add">click to add</button>
      </div>
    </connect>
  </div>
</template>

<script>
//  import connect from './connector.vue';
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
