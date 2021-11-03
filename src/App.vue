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
  beforeCreate(){
    this.$store.dispatch('userList/GetUserList')
  }
}
</script>


<style>
</style>