<script setup>
import layoutNav from './components/layoutNav.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutFooter from './components/layoutFooter.vue'
import layoutFixed from './components/layoutFixed.vue'




</script>

<template>

<!--  配置二级路由  -->
  <router-view/>

  <layoutNav/>
  <layoutFixed/>
  <layoutHeader/>


</template>

<style scoped>

</style>
