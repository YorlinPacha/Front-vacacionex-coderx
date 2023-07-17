<template>
  <div class="control_wrapper">
    <ejs-calendar
      @click="detectarClic"
      :isMultiSelection="isMultiSelection"
      :values="values"
    ></ejs-calendar>
    <button @click="agregarFecha">Agregar Fecha</button>
  </div>
</template>

<script setup>
import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";
import { ref } from "vue";

const isMultiSelection = true;
const values = ref([]);

console.log("Valores iniciales:---", values.value);

const detectarClic = (event) => {
  const elemento = event.target.title;
  console.log("Detectado---", elemento);
  const nuevaFecha = elemento; // Crear una nueva instancia de Date para la nueva fecha
  
  // En este código, utilizamos indexOf para buscar la posición del objeto nuevaFecha en el array values.value. 
  // Si el valor es diferente a -1, significa que el objeto ya existe en el array y lo eliminamos usando splice. 
  // Si el valor es -1, significa que el objeto no existe en el array y lo agregamos usando push.
  const index = values.value.indexOf(nuevaFecha);
  if (index !== -1) {
    // Si el objeto ya existe en el array, eliminarlo
    values.value.splice(index, 1);
  } else {
    // Si el objeto no existe en el array, agregarlo
    values.value.push(nuevaFecha);
  }
  
 //miramos el nuevo array
  console.log("click---", values.value);
};

</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
.control_wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>