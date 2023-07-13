<template>
  <div class="cardPerfil">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Nombre </span>
  <p class="descripcion"> Departamento</p>
  <p class="descripcion"> Antiguedad</p> 
  <p class="descripcion"> vacaciones</p>
  <p class="descripcion"> consumidos</p>
</div> 
</template>

<script lang="ts" setup>
    
</script>

<style scoped>
    .cardPerfil {
  width: 190px;
  height: 254px;
  background-image: transparent;
  border: none;
  border-radius: 10px;
  padding-top: 10px;
  position: relative;
  /* margin: auto; */
  font-family: inherit;
  margin: auto auto auto 2rem;
}

.cardPerfil span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 1.3em;
}

.cardPerfil .descripcion {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
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