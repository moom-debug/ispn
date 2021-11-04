<template>
  <div id="app">
      <allLayout></allLayout>
  </div>
</template>

<script>
import allLayout from './layout/allLayout'
export default {
  components:{allLayout},
  mounted() {
    console.log(this.$store.state.userlist)
  },
}
</script>


<style>
</style>