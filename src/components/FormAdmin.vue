<template>
  <div class="container"> 
    <form id="contact">
      <h3>Vacaciones SOMOS F5</h3>
      <h4>Consulta tus días de vacaciones</h4>
      <div v-if="loaded">
        <fieldset>
          <div v-for="attribute in userAttributes" :key="attribute.name" class="form-field">
  <label :for="attribute.name" class="label">{{ attribute.label }}</label>
  <input :placeholder="attribute.label" :type="attribute.type" :tabindex="attribute.tabindex" :required="attribute.required" autofocus v-model="usuario[attribute.name]">
</div>
          <button class="btn" @click.prevent="enviarWorker(usuario, usuario.id)">Aceptar</button>
          <button class="btn" @click.prevent="eliminarWorker(usuario.id)">Eliminar</button>
        </fieldset>
      </div>
      <div v-else>
        <div class="spinner-border espiner" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as WorkersController from '../controllers/WorkersController';

export default {
  setup() {
    const loaded = ref(false);
    const usuario = ref({
      name: '',
      position: '',
      department: '',
      seniority: '',
      email: '',
      passw: '',
      id:''
    });

    const worker = ref(null);

    const userAttributes = [
      { name: 'name', label: 'Nombre', type: 'text', tabindex: 1, required: true },
      { name: 'position', label: 'Rol', type: 'text', tabindex: 2, required: true },
      { name: 'department', label: 'Departamento', type: 'text', tabindex: 3, required: true },
      { name: 'seniority', label: 'Antigüedad', type: 'text', tabindex: 5, required: true },
      { name: 'email', label: 'Email', type: 'text', tabindex: 6, required: true },
      { name: 'passw', label: 'Contraseña', type: 'text', tabindex: 7, required: true }
    ];

    const enviarWorker = async (usuario, id) => {
      console.log(usuario, id);
      await WorkersController.updateWorker(id, usuario);
    };

    const eliminarWorker = async (id) => {
      console.log(id);
      await WorkersController.deleteWorker(id);
    };

    onMounted(async () => {
      try {
        const workerData = await WorkersController.getWorkerById(7);
        worker.value = workerData;
        usuario.value = {
          name: workerData.name,
          position: workerData.position,
          department: workerData.department,
          seniority: workerData.seniority,
          email: workerData.email,
          passw: workerData.passw,
          id: workerData.id
        };
        loaded.value = true;
      } catch (error) {
        console.error('Error al obtener el trabajador:', error);
      }
    });

    return {
      loaded,
      usuario,
      worker,
      enviarWorker,
      eliminarWorker,
      userAttributes
    };
  }
};
</script>


<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background-color: rgb(254, 210, 192);
}

main {
  width:90%;
}

.text {
  height: 60%;
  width: 60%;
  border-radius: 10px;
  
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 40%;
  left: 5%;
  z-index: 0;
}

.text p {
  color:#fff;
  font-size: 14px;
  padding: 10% 70% 30% 5%;
  padding-right: 70%;
}

.container {
  
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.container::before {
  content:'';
  height: 90%;
  width: 95%;
  border-radius: 10px;
 
  position: absolute;
  top: -2%;
  left: 8%;
  z-index: -1;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],

#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  right: 10px;
  top:10px;
 
  padding: 25px;
  margin: 150px 0;
  border-radius: 10px;
  box-shadow: 5px 10px 30px 1px rgba(0, 0, 0, 0.15);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1C1C1C;
}

#contact h4 {
  margin: 0px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #CCD0CF;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact select#profissao {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  border:none;
  color: #88888C;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact select:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.1s ease-in-out;
  transition: border-color 0.1s ease-in-out;
  border: 1px solid #c1c1c1;
}

.btn {
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: rgb(255, 0, 0 );
  color: #FFF;
  margin: 0 0 5px;
  padding: 15px;
  font-size: 15px;
  font-weight: 600;
}

.btn:hover {
  background: #070707;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

.btn:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

.button {

margin-right: 5px;
border: 1px solid red;
color: rgb(255 0 0);
}

.form-field {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  width: 120px;
  margin-right: 10px;
}
input {
  flex: 1;
}

</style>
