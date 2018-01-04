<template>
  <div>
    <slot :sub="data"></slot>
  </div>
</template>
<script>
  export default {
    props: ['data'],
  }
</script>
