<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <counter :stores="stores"></counter>
    <counter :stores="stores2"></counter>
  </div>
</template>

<script>
import counter from '../business/counter';
import elCounter from '../business/counter.vue';

export default {
  name: 'HelloWorld',
  components: {
    counter: elCounter,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stores: {},
      stores2: {},
    }
  },
  mounted () {
    this.stores = counter();
    this.stores2 = counter();
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
