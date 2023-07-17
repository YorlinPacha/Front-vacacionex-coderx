<template >
  <div class="row justify-content-center">
    <div class="surface-card shadow-2 border-round d-flex flex-column justify-content-center w-75">
      <p class="icon mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle"
        viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
      </svg>
    </p>
  
        <div class="d-flex flex-column justify-content-center">           
            <input id="email1" v-model="loginData.login_email" type="email" placeholder="tu@email.es" class="w-full mb-3" />            
            <input id="password1" v-model="loginData.passw" type="password" placeholder="Tu-K0ntra53ñ4" class="w-full mb-3" />
            <button label="Entra" @click="loginUser(loginData)" icon="pi pi-user" class="btn w-full">LOGIN</button>
        </div>
        
    </div>

  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

.bi {
color: rgb(27, 111, 171);
background-color: rgb(171, 225, 250);
}

.bi-person-circle {
width: 8rem;
height: 8rem;
border-radius: 4rem;
}
.icon{
margin: auto;
}
.btn {
background-color: rgb(255, 71, 0);
border-radius: 1rem;
padding: 0.5rem 2rem;
color: white;
}


@media screen and (max-width: 760px) {
.body_move {
  margin-left: 0px;
}

.menu__side_move {
  width: 80px;
  left: -80px;
}
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
