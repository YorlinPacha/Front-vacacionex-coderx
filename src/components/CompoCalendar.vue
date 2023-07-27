<template>
  <div class="control_wrapper">
    <ejs-calendar
      @click="detectarClic"
      :isMultiSelection="isMultiSelection"
      :values="values"
      :renderDayCell="renderDayCell"
      :highlightDates="values"
      :firstDayOfWeek="1"
      :min="data[0].minDate" 
      :max="data[0].maxDate"
    ></ejs-calendar>
    <button class="agregarBoton" @click="guardarLista">{{ $t('calendar.botonConf') }}</button>
  </div>
</template>

<script setup>
import * as VacationController from '../controllers/VacationsController';
import { onMounted, ref } from 'vue';
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars';

const data = [{minDate: new Date("01/01/2023"), maxDate: new Date("31/12/2024")}];
const isMultiSelection = true;
const values = ref([]);
const SessionUser = JSON.parse(sessionStorage.getItem('userLS'));
const id_user = SessionUser.id;
const vacationData = ref({
  "id_user": id_user,
  "approved": "FALSE",
  "list_days": []
});

onMounted(() => {
  obtenerDatosSQL();
});

async function obtenerDatosSQL() {
  const vacations = await VacationController.getAllVacations();
  console.log(vacations);
  const vacationForCurrentUser = vacations.find(item => item.id_user === id_user);
  sessionStorage.setItem('idVacation', vacationForCurrentUser.id);
  if (vacationForCurrentUser) {
    vacationData.value = vacationForCurrentUser;
    if (typeof vacationData.value.list_days === 'string') {
      vacationData.value.list_days = JSON.parse(vacationData.value.list_days.replace(/'/g, '"'));
    }
    values.value = vacationData.value.list_days.map(dateString => new Date(dateString).toDateString());
    console.log(values.value);
    console.log(typeof values.value);
  }
}

function renderDayCell(args) {
  if (args.date.getDay() === 0 || args.date.getDay() === 6) {
    args.isDisabled = true;
  }

  const dateString = args.date.toDateString();
  if (values.value.includes(dateString)) {
    args.element.classList.add('marked-day');
  }
}

function detectarClic(event) {
  const elemento = event.target.title;
  console.log('Detectado---', elemento);

  if (elemento === '') {
    console.log('vacio');
  } else {
    console.log('tiene informacion');
    const nuevaFecha = elemento; // Crear una nueva instancia de Date para la nueva fecha

    const index = values.value.indexOf(nuevaFecha);
    if (index !== -1) {
      // Si la fecha ya está seleccionada, la eliminamos de values
      values.value.splice(index, 1);
    } else {
      // Si la fecha no está seleccionada, la agregamos a values
      console.log("longitud antes del value", values.value.length);
      if (values.value.length < 26) {
        values.value.push(nuevaFecha);
        console.log("longitud despues del value push", values.value.length);
      } else {
        console.log("SE ha superado la longitud");
        alert("No puedes agregar más de 26 días de vacaciones");
      }
    }

    // Miramos el nuevo array
    console.log('click---', values.value);
    // Esto devuelve un objeto
    console.log(typeof values.value);
  }
}

function guardarLista() {
  console.log(vacationData.value);
  vacationData.value.list_days = values.value;
  vacationData.value.id_user = id_user;
  vacationData.value.approved = 'false';
  let objectData = { 'id_user': id_user, 'approved': 'false', 'list_days': JSON.stringify([...values.value]), 'id': null };
  console.log(objectData);
  // Check if the 'updateVacation' key exists in SessionStorage
  const idVacation = sessionStorage.getItem('idVacation');
  if (idVacation) {
    objectData.id = idVacation;
    // If it exists, call the idVacation function
    VacationController.updateVacation(objectData, idVacation);
  } else {
    // If it doesn't exist, call the createVacation function
    VacationController.createVacation(objectData);
  }
}
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';

/* Estilos para marcar los días seleccionados */
.marked-day {
  background-color: #B51148; /* Color de fondo para los días seleccionados */
  border-radius: 50%;
}

/* Resto de estilos sin cambios */
.control_wrapper {
  max-width: 250px;
  margin: 0 auto;
}

.agregarBoton {
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
  color: #333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .5rem;
}
</style>
