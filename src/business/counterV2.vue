<template>
  <div>
    <h1 @click="changeText">{{text}}:<small>{{state.count}}</small></h1>
    <button @click="clear">actions in methods (clear)</button>
    <button @click="stores.actions.set({count:77})">actions on element (set)</button>
    <button @click="setAfter1">business in methods (set after 1 second)</button>
  </div>
</template>

<script>
  import wrapper from 'vue-own-redux/wrapper';

  class Main {
    props = ['stores'];

    data = () => {
      return {
        text: 'test text',
      };
    };

    methods = {
      clear() {
        this.stores.actions.clear();
      },
      setAfter1() {
        this.stores.business.setCount666After1Second();
      },
      changeText() {
          this.text += '1';
      },
    };

    created = function () {
        console.log('created');
    };

    mounted = function () {
        console.log('mounted');
    };

    beforeDestroy = function () {
      console.log('before destroy, current text:', this.text);
    }
  }

  export default wrapper(new Main());
</script>
