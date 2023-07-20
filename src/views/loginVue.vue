<template>
  <div class="todoTemplate">
    <div class="div-images-title-login">
      <div  class="login-title-image">
        <img id="imageEstrella" src="../assets/img/image1-login.png" alt="imagen icono somosf5 lila" />
      </div>
      <div class="div-login-title">
        <h1 class="login-title">{{ $t('messageLogin.title3') }}</h1>
      </div>
      <div class="login-title-image">
        <img id="imageInde" src="../assets/img/image2-login.png" alt="imagen icono somosf5 turquesa" />
      </div>
    </div>
    <div class="div-parent-login">
      <div class="div-imagen-fondo-login">
        <!-- <img class="imagen-fondo-login" src="../assets/img/fondo-form-login.png" alt="fondo naranja trapecio" /> -->
      </div>
      <div class="form-login row justify-content-center">
        <div
          class="surface-card shadow-2 border-round d-flex flex-column justify-content-center w-100"
        >
          <p class="icon mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </p>

          <div class="d-flex flex-column justify-content-center">
            <input
              id="email1"
              v-model="loginData.login_email"
              type="email"
              placeholder="Usuario"
              class="w-full mb-3 mx-auto p-2"
            />
            <input
              id="password1"
              v-model="loginData.passw"
              type="password"
              placeholder="Contraseña"
              class="w-full mb-3 mx-auto p-2"
            />
            <button
              label="Entra"
              @click="loginUser(loginData)"
              icon="pi pi-user"
              class="btn w-full mx-auto"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

.todoTemplate {
  /* border: 1px solid orangered; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.div-images-title-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.login-title-image {
  width: 20rem;
}

#imageEstrella {
  margin-left: 15rem;
  z-index: -2;
}

#imageInde {
  z-index: -2;
  margin-left: -13rem;
}

.div-login-title {
  /* background-color: #ffff; */
  width: auto;
  text-align: center;
  border-radius: 1rem;
  padding: 1rem;
  z-index: 100;
}

.login-title {
  text-align: center;
    font-weight: bold;
    font-size: 3.5rem;
    max-width: 50rem;
}



.div-parent-login {
  width: 30rem;
  padding: 2rem;
  margin-bottom: 2rem;
  /* border: 1px solid orangered; */
  background-image: url('../assets/img/fondo-form-login.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.imagen-fondo-login {
  max-width: 100%;
}

/* .div-imagen-fondo-login {
  width: 40rem;
  border: 1px solid blue;
  display: flex;
  justify-content: center; */
/* position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -10; */
/* } */

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
  background-color: #4311b9;
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
  }
  
.login-title {
    font-size: 2rem;
    max-width: 12rem;
}

.login-title-image {
  width: 10rem;
}

#imageEstrella {
  margin-left: 7rem;
  width: 5rem;
}

#imageInde {
  margin-left: -2rem;
  width: 5rem;

}

.div-parent-login {
  width: 22rem;
}
}


@media (min-width: 768px) and (max-width: 1024px) {
  .div-login-title {
  padding: 3rem;
}
  
}
</style>

<script setup>
import { createLogin } from '../controllers/WorkersController'
import { ref } from 'vue'

const loginData = ref({
  login_email: '',
  passw: ''
})

const loginUser = async () => {
  await createLogin(loginData.value)
}
</script>
npm run dev
