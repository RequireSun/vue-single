<template>
  <div>
    <div>
      <h1>{{state}}</h1>
      <span>{{state.count}}</span>
      <!--<div>{{stores.actions.set}}</div>-->
      <button @click="clear">actions in methods (clear)</button>
      <button @click="stores.actions.set({count:77})">actions on element (set)</button>
      <button @click="setAfter1">business in methods (set after 1 second)</button>
    </div>
  </div>
</template>

<script>
  import connect from 'vue-own-redux';

  function connectDecorator(target) {
    function onStateChange() {
      this.state = this.stores.store.getState();
    }

    const data = target.prototype.data;
    const mounted = target.prototype.mounted;
    const beforeDestroy = target.prototype.beforeDestroy;

    target.prototype.data = function () {
      return Object.assign(('function' === typeof data && data()) || {}, {
        state: this.stores && this.stores.store ? this.stores.store.getState() : {}
      });
    };

    target.prototype.mounted = function () {
      if (this.stores && this.stores.store && this.stores.store.subscribe) {
        this.unsubscribe = this.stores.store.subscribe(onStateChange.bind(this));
        onStateChange.call(this);
      }

      this.$watch('stores', function (val, oldVal) {
        if (val !== oldVal) {
          this.unsubscribe && this.unsubscribe();
          this.unsubscribe = undefined;
          if (val && val.store && val.store.subscribe) {
            this.unsubscribe = val.store.subscribe(onStateChange.bind(this));
            onStateChange.call(this);
          }
        }
      });

      'function' === typeof mounted && mounted.call(this);
    };

    target.prototype.beforeDestroy = function () {
      this.unsubscribe && this.unsubscribe();
      this.unsubscribe = undefined;

      'function' === typeof beforeDestroy && beforeDestroy.call(this);
    };

  }

  @connectDecorator
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
