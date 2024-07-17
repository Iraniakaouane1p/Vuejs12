<template>
  <Header></Header>
  <RouterView/>
</template>



<script>
import Header from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components:{
    Header
  }
  
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
