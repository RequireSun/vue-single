<template>
  <div>
    <sub-scope :data="some.deep.props">
      <div slot-scope="scope">
        <p>{{scope.sub.a}}</p>
        <p>{{scope.sub.b}}</p>
      </div>
    </sub-scope>
  </div>
</template>
<script>
  import SubScope from './sub-scope.vue'
  export default {
    components: {SubScope},
    data() {
      return {
        some: {
          deep: {
            props: {
              a: 1,
              b: 2,
            },
          },
        },
      };
    },
  }
</script>
