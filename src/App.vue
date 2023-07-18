<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LateralBar from './components/LateralBar.vue';
</script>

<!-- <template>
   <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> 
<LateralBar/>
  <RouterView />
</template> -->

<template>
  <div id="app">
    <LateralBar />
    <router-view />
  </div>
</template>

<style scoped>

</style>
