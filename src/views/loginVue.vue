<template>
  
  <div class="contenedorLogin">
    <h1>Hola Bienvenido</h1>
    <RouterLink to="/empleado" class="cajaLogin">
      <div class="option">
        <i class="fa-regular fa-user" title="Login"></i>
        <h4>Login</h4>
      </div>
    </RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.contenedorLogin{
    width: 100%rem;
    height: 100vh;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.cajaLogin{
    padding: 3rem;
    border: 1px solid blue;
}

</style>
