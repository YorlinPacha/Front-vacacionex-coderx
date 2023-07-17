<template>
  <div>
    <a class="btn btn-primary" href="#" role="button">Nuevo Trabajador</a>
    <a class="btn btn-primary" href="#" role="button">Nuevo Calendario</a>
    <a class="btn btn-primary" href="#" role="button">Tabla Calendario</a>
    <a class="btn btn-primary" href="#" role="button">Tabla Trabajador</a>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Position</th>
        <th scope="col">Seniority</th>
        <th scope="col">Department</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Edit</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="(worker, index) in listWorkers" :key="index">
        <td>{{ worker.id }}</td>
        <td>{{ worker.name }}</td>
        <td>{{ worker.position }}</td>
        <td>{{ worker.seniority }}</td>
        <td>{{ worker.department }}</td>
        <td>{{ worker.email }}</td>
        <td>{{ worker.passw }}</td>
        <td><router-link :to="'/worker/' + worker.id" class="btn btn-primary">Modificar</router-link></td>
        
      </tr>
    </tbody>
  </table>
</template>
    
<script>
import * as WorkersController from '../controllers/WorkersController';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const listWorkers = ref([]);

    const fetchData = async () => {
      let secret = sessionStorage.getItem("secretLS");
      let token = sessionStorage.getItem("tokenLS");
      listWorkers.value = await WorkersController.getAllWorkers(secret, token);
    };

    onMounted(() => {
      fetchData();
    });

    return {
      listWorkers,
      Editar(workerId) {
        // Implement your logic to edit a worker record here
        console.log("Edit worker with ID:", workerId);
        //Quiero abrir WorkerAdmin con el workerId de ese botón
      },
      Eliminar(workerId) {
        // Implement your logic to delete a worker record here
        console.log("Delete worker with ID:", workerId);
      }
    };
  },
};
</script>
    
<style scoped></style>
    