<template>

  <div v-if="Object.keys(userData).length > 0" class="cardPerfil justify-content-left">    <!-- <div class="card-border-top"></div>
    <div class="img" ></div> -->

    <span>{{ $t("lateralBar.name", {name:userData.name})}}</span>
    <!-- <span>Nombre:{{ userData.name }}</span> -->
    <p class="descripcion">{{ $t("lateralBar.department", {department:userData.department})}}</p>
    <!-- <p class="descripcion">DEPT.:{{ userData.department }}</p> -->
    <p class="descripcion">{{ $t("lateralBar.seniority", {seniority:userData.seniority})}}</p> 
    <!-- <p class="descripcion">Vacaciones</p>
    <p class="descripcion">Consumidos</p> -->
  </div>
  <div v-else>
    Login...
    <div class="spinner-border espiner" role="status">
          <span class="sr-only">Loading...</span>
          </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const userData = ref({});

onMounted(async () => {
  let userLS = sessionStorage.getItem('userLS');

  if (userLS) {
    userData.value = JSON.parse(userLS);
  }
});
</script>

<style scoped>
    .cardPerfil {
  width: 190px;
  height: 254px;
  background-image: transparent;
  border: none;
  border-radius: 10px;
  padding-top: 5px;
  position: relative;
  /* margin: auto; */
  font-family: inherit;
  margin: auto auto auto 2rem;
}

.cardPerfil span {
  font-weight: 600;
  color: #343434;
  text-align: left;
  display: block;
  padding-top: 5px;
  font-size: 1.1em;
}

.cardPerfil .descripcion {
  font-weight: 400;
  color: #343434;
  display: block;
  text-align: left;
  padding-top: 5px;
  font-size: 1em;
}

.cardPerfil .img {
  width: 70px;
  height: 70px;
  background: #e8e8e8;
  border-radius: 100%;
  margin: auto;
  margin-top: 20px;
}

</style>