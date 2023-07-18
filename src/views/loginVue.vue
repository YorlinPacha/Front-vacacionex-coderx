<template >
  <div class="div-images-title-login">
    <div id="image1" class="login-title-image">
      <img src="../assets/img/image1-login.png" alt="imagen icono somosf5 lila">
    </div>
    <div class="div-login-title">
      <h1 class="login-title">Gestion de vacaciones Somos F5</h1>
    </div>
    <div class="login-title-image">
      <img id="image2" src="../assets/img/image2-login.png" alt="imagen icono somosf5 turquesa">
    </div>
  </div>
  <div class="div-parent-login">
    <div class="div-imagen-fondo-login">
      <img class="imagen-fondo-login" src="../assets/img/fondo-form-login.png" alt="fondo naranja trapecio" />
    </div>
    <div class="form-login row justify-content-center">
      <div class="surface-card shadow-2 border-round d-flex flex-column justify-content-center w-100">
        <p class="icon mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle"
          viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
      </p>
    
          <div class="d-flex flex-column justify-content-center">           
              <input id="email1" v-model="loginData.login_email" type="email" placeholder="Usuario" class="w-full mb-3 mx-auto p-2" />            
              <input id="password1" v-model="loginData.passw" type="password" placeholder="Contraseña" class="w-full mb-3 mx-auto p-2" />
              <button label="Entra" @click="loginUser(loginData)" icon="pi pi-user" class="btn w-full  mx-auto">LOGIN</button>
          </div>
          
      </div>

    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

.div-images-title-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 3rem;
}

#image1 {
  margin-right: -0.8rem;
  z-index: 2;
}

#image2 {
  margin-left: -0.5rem;
  z-index: 2;
}

.div-login-title {
  background-color: #ffff;
  width: 45vw;
  text-align: center;
  border-radius: 1rem;
}

.login-title {
  text-align: center;
}

.login-title-image {
  width: 9vw;
}

.div-parent-login {
  position: relative;
  margin-bottom: 8rem;
}

.imagen-fondo-login {
  width: 33vw;

}

.div-imagen-fondo-login {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  z-index: -10;
}

.bi {
  color: rgb(27, 111, 171);
  background-color: rgb(171, 225, 250);
}

.bi-person-circle {
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  margin-bottom: 2.5rem;
}

.icon {
  margin: auto;
}

.btn {
  background-color: #4311B9;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  color: white;
  margin-top: 1rem;
}

@media screen and (max-width: 760px) {
.body_move {
  margin-left: 0px;
}

.menu__side_move {
  width: 80px;
  left: -80px;
} */
}
</style>

<script setup>
import { createLogin } from '../controllers/WorkersController';
import { ref } from 'vue';

const loginData = ref({
  login_email: '',
  passw: ''
});

const loginUser = async () => {
  await createLogin(loginData.value);
};

</script>