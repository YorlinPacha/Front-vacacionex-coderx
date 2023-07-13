<script setup>
import LateralBar from '../components/LateralBar.vue';
import FormAdmin from '../components/FormAdmin.vue';
</script>

<template >
  <LateralBar/>

  <!-- ------------------Agregar todo tu contenido dentro del div class="TodoContenido"------------ -->
  <div class="TodoContenido">
    <h1>Super Admin</h1>
    <FormAdmin/>
  </div>
</template>

<style scoped>
.TodoContenido {
  margin: auto;
  padding: 11px;
  border: .5px solid blue;
  width: 72%;
}
</style>
