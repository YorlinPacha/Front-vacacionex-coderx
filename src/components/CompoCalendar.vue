<template>
  <div class="control_wrapper">
    <ejs-calendar
      @click="detectarClic"
      :isMultiSelection="isMultiSelection"
      :values="values"
    ></ejs-calendar>
    <button class="agregarBoton" @click="agregarFecha">Confirmar</button>
    <!-- <ul>
      <li v-for="(fecha, index) in values" :key="index">{{ fecha }}</li>
    </ul> -->
    <!-- ----------------- -->
    <div class="toasttt" v-for="(fecha, index) in values" :key="index">
    
    <div class="toast-content" >
      {{ fecha }}
    </div>
  
  </div>
  </div>
</template>






<script setup>
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars'
import { onMounted, ref } from 'vue'

onMounted(() => {
  obtenerStorage()
})

const isMultiSelection = true;
const values = ref([]);

console.log('Valores iniciales:---', values.value)

const detectarClic = (event) => {
  const elemento = event.target.title
  console.log('Detectado---', elemento)

  if (elemento == '') {
    console.log('vacio')
  } else {
    console.log('tiene informacion')
    const nuevaFecha = elemento // Crear una nueva instancia de Date para la nueva fecha

    // En este código, utilizamos indexOf para buscar la posición del objeto nuevaFecha en el array values.value.
    // Si el valor es diferente a -1, significa que el objeto ya existe en el array y lo eliminamos usando splice.
    // Si el valor es -1, significa que el objeto no existe en el array y lo agregamos usando push.
    const index = values.value.indexOf(nuevaFecha)
    if (index !== -1) {
      // Si el objeto ya existe en el array, eliminarlo
      values.value.splice(index, 1)
    } else {
      // Si el objeto no existe en el array, agregarlo
      console.log("longitud antes del value", values.value.length);
      if (values.value.length <=4){
        values.value.push(nuevaFecha)
         console.log("longitud despues del value push", values.value.length);
      }else{
        console.log("SE ha superado la longitud");
        alert("NO se puede")
      }
     

    }

    //miramos el nuevo array
    console.log('click---', values.value)
    // esto devuelve un objeto
    console.log(typeof values.value)
  }
}
//boton llamada
const agregarFecha = () => {
  console.log('click agregar', values.value)
  guardarStorage(values.value)
}

//Guardaremos en local storage (convertir objeto a string)

function guardarStorage(values) {
  localStorage.setItem('diasSeleccion', JSON.stringify([...values]))
}

function obtenerStorage() {
  const storedValues = JSON.parse(localStorage.getItem('diasSeleccion'))
  console.log('datos recuperados', storedValues);
  values.value.push(...storedValues) // Agregar los nuevos valores al array values.value
  // values.value.splice(0, values.value.length) // Vaciar el array values.value
  // if (Array.isArray(storedValues) && storedValues.length > 0) {
  //   values.value.push(...storedValues) // Agregar los nuevos valores al array values.value
  // }
}


</script>

<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
.control_wrapper {
  max-width: 250px;
  margin: 0 auto;
}
.agregarBoton{
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem auto;

}

.toasttt {
  bottom: 20px;
  right: 20px;
  background-color: #33c8cd;
  /* background-color: #333; */
  color: #333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .5rem;
  
}

.toasttt-icon svg {
  width: 30px;
  height: 20px;
  fill: #fff;
}

.toasttt-content {
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>
