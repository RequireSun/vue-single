<template>
  <div>
    <h1>{{text}}</h1>
    <button @click="changeText">click</button>
    <slot :stores="stores"></slot>
  </div>
</template>

<script>
  class Main {
    props = ['stores'];

    data = () => ({
      text: 'test',
    });

    methods = {
      changeText() {
        this.text += '!';
      },
    };
  }

  export default new Main();
</script>
