<template>
    <div>
      <h1>{{title}}</h1>
    </div>
</template>
<script>
export default {
  name: 'Head',
  props: {
    title: String
  },
  computed: {
    msg1: function () {
      return this.msg
    }
  }
}
</script>
