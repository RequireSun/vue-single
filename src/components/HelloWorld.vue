<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <counter :stores="stores"></counter>
    <counter :stores="stores2"></counter>
    <counter-v2 :stores="stores2"></counter-v2>
    <counter-v2 :stores="stores3"></counter-v2>
  </div>
</template>

<script>
import counter from '../business/counter';
import elCounter from '../business/counter.vue';
import elCounterV2 from '../business/counterV2.vue';

export default {
  name: 'HelloWorld',
  components: {
    counter: elCounter,
    counterV2: elCounterV2,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stores: {},
      stores2: {},
      stores3: {},
    }
  },
  mounted () {
    this.stores = counter();
    this.stores2 = counter();
    this.stores3 = counter();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
