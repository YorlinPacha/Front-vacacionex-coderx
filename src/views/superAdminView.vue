<script setup>
import LateralBar from '../components/LateralBar.vue';
import WorkerAdmin from '../components/WorkerAdmin.vue';
import PrincipalAdmin from '../components/PrincipalAdmin.vue';
</script>

<template >
  <!-- <LateralBar/> -->

  <!-- -----------------Agregar todo tu contenido dentro del div class="TodoContenido"------------ -->
  <div class="TodoContenido">
    <PrincipalAdmin />
  </div>
</template>

<style scoped>
.TodoContenido {
  margin: auto;
  padding: 11px;
  border: .5px solid #fff;
  width: 72%;
}
</style>
