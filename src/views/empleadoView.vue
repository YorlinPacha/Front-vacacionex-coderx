<script setup>
import LateralBar from '../components/LateralBar.vue';
import CompoCalendar from '../components/CompoCalendar.vue';

</script>

<template >
  <!-- <LateralBar /> -->
  <!-- ----------------------------------------------Agregar todo tu contenido dentro del div class="TodoContenido"------------ -->
  <div class="TodoContenido">
      <h1>Empleado</h1>
      <CompoCalendar />


  </div>
</template>

<style scoped>
.TodoContenido {
  margin: auto;
  padding: 11px;
  border: .5px solid #fff;
  border-radius: 8px;
  width: 72%;
}
</style>
