<template>
  <div class="body" :class="{ body_move: isMoveActive }">
    <header>
      <div class="icon__menu">
        <i class="fas fa-bars" id="btn_open" @click="toggleMenu"></i>
      </div>
    </header>

    <div class="menu__side" :class="{ menu__side_move: isMenuOpen }" id="menu_side">
      <div class="name__page">
        <i class="fa-solid fa-code"></i>
        <h4>Coderx</h4>
      </div>

      <PerfilComponent class="perfilLoading"/>

      <div class="options__menu">
        <RouterLink v-if="!user" to="/">
          <div class="option">
            <i class="fa-solid fa-right-to-bracket"></i>
            <h4>Login</h4>
          </div>
        </RouterLink>

        <a v-if="user" @click="logout">
          <div class="option">
            <i class="fa-solid fa-right-to-bracket"></i>
            <h4>Logout</h4>
          </div>
        </a>

        <RouterLink to="/empleado" v-if="user && user.position === 'user'">
          <div class="option">
            <i class="fa-regular fa-user"></i>
            <h4>{{ $t("lateralBar.employee")}}</h4>
          </div>
        </RouterLink>

        <RouterLink to="/encargado" v-if="user && user.position === 'overviewer'">
          <div class="option">
            <i class="fa-solid fa-user-secret"></i>
            <h4>{{ $t("lateralBar.manager")}}</h4>
          </div>
        </RouterLink>

        <RouterLink to="/superAdmin" v-if="user && user.position === 'root'">
          <div class="option">
            <i class="fa-solid fa-toolbox"></i>
            <h4>superAdmin</h4>
          </div>
        </RouterLink>
      </div>
    </div>

    <main class="cajaContenidoMain">
      <h1 class="titulo">{{ $t("lateralBar.title1") }}</h1>
      <br />
      <p class="parrafo">
        {{ $t("lateralBar.title2") }}
      </p>
      <br />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PerfilComponent from './PerfilComponent.vue';

const isMenuOpen = ref(false);
const isMoveActive = ref(false);
const user = ref(JSON.parse(sessionStorage.getItem('userLS')));

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  isMoveActive.value = !isMoveActive.value;
}

function logout() {
  sessionStorage.clear();
  window.location.href = "/";
}

onMounted(() => {
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  if (window.innerWidth > 760) {
    isMenuOpen.value = false;
  } else {
    isMenuOpen.value = true;
  }
}

window.addEventListener('resize', handleResize);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

.body {
  margin-top: 80px;
  transition: margin-left 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  /* border: 1px solid red; */
}

main {
  padding: 20px;
  margin-left: 80px;
  margin-top: 80px;
  text-align: center;
  /* border: 1px solid red; */
}
.titulo{
  font-size: 3rem;
  font-family: 'crash';
}
.parrafo{
  font-size: 2rem;
  font-family: 'open Sans', sans-serif;
}

header {
  width: 100%;
  height: 80px;
  background: #fed2c0;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 200;
}

.icon__menu {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(10px);
  margin-left: 80px;
}

.icon__menu i {
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.menu__side {
  width: 80px;
  height: 100%;
  background: #cbbfe8;
  position: fixed;
  top: 0;
  left: 0;
  color: #343434;
  font-size: 18px;
  z-index: 300;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 20px solid #cbbfe8;
  transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

/*Ocultar scroll para chrome, safari y opera*/
.menu__side::-webkit-scrollbar {
  display: none;
}

/*Ocultar scroll para IE, Edge y Firefox*/
.menu__side {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.name__page {
  padding: 20px 30px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.name__page i {
  width: 20px;
  margin-right: 20px;
}

.options__menu {
  padding: 20px 30px;
  position: absolute;
  /* top: 80px; */
  margin-top: 5rem;
}

.options__menu a {
  color: #343434;
  cursor: default;
  display: block;
  position: relative;
  transition: color 300ms;
  text-decoration: none;
}

.options__menu a:hover {
  color: #343434;
}

.options__menu .option {
  /* padding: 20px 0px; */
  display: flex;
  align-items: center;
  position: relative;
}

.options__menu .option i {
  width: 20px;
  margin-right: 20px;
  cursor: pointer;
}

.options__menu .option h4 {
  font-weight: 300;
  cursor: pointer;
}

a.selected {
  color: #fff;
}

.selected:before {
  content: '';
  width: 3px;
  height: 80%;
  background: white;
  position: absolute;
  top: 10%;
  left: -30px;
}

/*Clases para usar en JavaScript*/

.body_move {
  margin-left: 178px;
}

.menu__side_move {
  width: 250px;
}

/* ---------componente loading */
.perfilLoading{
  margin-left: 1.7rem;
}

@media screen and (max-width: 760px) {
  .body_move {
    margin-left: 4rem;
  }
  .icon__menu{ 
    margin-left: 0rem;
  }

  .menu__side_move {
    width: 80px;
    left: -80px;
  }
}
</style>
