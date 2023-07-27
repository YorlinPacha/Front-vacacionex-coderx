<template>
  <div class="control_wrapper">
    <ejs-calendar
      :isMultiSelection="isMultiSelection"
      :values="values"
      :renderDayCell="renderDayCell"
      :firstDayOfWeek="1"
      :min="data[0].minDate" 
      :max="data[0].maxDate"
    ></ejs-calendar>
    <button class="agregarBoton" @click="guardarLista">{{ $t('calendar.botonConf') }}</button>
  </div>
</template>

<script setup>
import * as VacationController from '../controllers/VacationsController'
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars'
import { onMounted, ref } from 'vue';

const data = [{ minDate: new Date("01/01/2023"), maxDate: new Date("31/12/2024") }];
const isMultiSelection = true;
const values = ref([]);
const vacations = ref([]);
const SessionUser = JSON.parse(sessionStorage.getItem('userLS'));
const id_user = SessionUser.id;

async function obtenerDatosSQL() {
  vacations.value = await VacationController.getAllVacations();
  // Filtrar solo los objetos con approved=false
  vacations.value = vacations.value.filter(vacation => vacation.approved === 'false');
  if (vacations.value.length > 0) {
    const vacation = vacations.value[0]; // Tomar el primer objeto con approved=false
    if (typeof vacation.list_days === 'string') {
      vacation.list_days = JSON.parse(vacation.list_days);
    }
    values.value = vacation.list_days.map(dateString => new Date(dateString).toDateString());
  }
}

// Llama a la función una vez montado el componente
onMounted(obtenerDatosSQL);

function renderDayCell(args) {
  if (args.date.getDay() === 0 || args.date.getDay() === 6) {
    args.isDisabled = true;
  }

  const dateString = args.date.toDateString();
  if (values.value.includes(dateString)) {
    args.element.classList.add('marked-day');
  }
}

function guardarLista() {
  const vacation = vacations.value[0]; // Tomar el primer objeto con approved=false
  vacation.approved = true;
  // Convertimos las fechas al formato deseado antes de enviar los datos al backend
  const formattedDates = vacation.list_days.map(dateString => new Date(dateString).toISOString());

  const updatedVacationData = {
    id: vacation.id,
    id_user: vacation.id_user,
    approved: "true",
    list_days: JSON.stringify(formattedDates)
  };

  VacationController.updateVacation(updatedVacationData, vacation.id)
  this.$forceUpdate();
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
