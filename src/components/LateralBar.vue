<template>
  <div class="body" :class="{ body_move: isMoveActive }">
    <header>
      <div class="icon__menu">
        <i class="fas fa-bars" id="btn_open"></i>
      </div>
    </header>

    <div class="menu__side" :class="{ menu__side_move: isMenuOpen }" id="menu_side">
      <div class="name__page">
        <i class="fa-solid fa-code"></i>
        <h4>Coderx</h4>
      </div>

      <div class="options__menu">
        <RouterLink to="/">
          <div class="option">
            <i class="fa-solid fa-right-to-bracket"></i>
            <h4>Login</h4>
          </div>
        </RouterLink>
        <RouterLink to="/empleado">
          <div class="option">
            <i class="fa-regular fa-user"></i>
            <h4>Empleado</h4>
          </div>
        </RouterLink>

        <RouterLink to="/encargado">
          <div class="option">
            <i class="fa-solid fa-user-secret"></i>
            <h4>Encargado</h4>
          </div>
        </RouterLink>

        <RouterLink to="/superAdmin">
          <div class="option">
            <i class="fa-solid fa-toolbox"></i>
            <h4>superAdmin</h4>
          </div>
        </RouterLink>

        <a href="#">
          <div class="option">
            <i class="far fa-sticky-note" title="Blog"></i>
            <h4>Blog</h4>
          </div>
        </a>

        <a href="#">
          <div class="option">
            <i class="far fa-id-badge" title="Contacto"></i>
            <h4>Contacto</h4>
          </div>
        </a>
      </div>
    </div>
    <!-- ------------------------------------------------Aqui abajo se agregara todo el contenido que se vera en la vista ---------------------- -->
    <main class="cajaContenidoMain">
      <h1 class="titulo">Abrimos rutas inclusivas al talento digital</h1>
      <br />
      <p class="parrafo">
        Porque hoy se construye el mundo digital en el que viviremostodas y todos
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci beatae impedit
        quia, deleniti quasi sequi iusto exercitationem nihil nulla, laboriosam dolore corrupti fuga
        officiis? Odit a mollitia id magnam amet delectus quia blanditiis reprehenderit explicabo
        eveniet! Rem voluptatum explicabo ipsum quae, dolorum, laudantium doloribus a, illum saepe
        sapiente accusantium dicta reiciendis? Amet iure porro voluptatum error fugit odit volupta?
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isMoveActive = ref(false)

function openCloseMenu() {
  isMenuOpen.value = !isMenuOpen.value
  isMoveActive.value = !isMoveActive.value
  console.log('abre y cierra')
}

onMounted(() => {
  document.getElementById('btn_open').addEventListener('click', openCloseMenu)
})

onUnmounted(() => {
  document.getElementById('btn_open').removeEventListener('click', openCloseMenu)
})

const handleResize = () => {
  if (window.innerWidth > 760) {
    isMenuOpen.value = false
  } else {
    isMenuOpen.value = true
  }
}

window.addEventListener('resize', handleResize)

onMounted(() => {
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
/* Agrega tus estilos CSS aquí */
</style>

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
}
.titulo, .parrafo{
  font-size: 2rem;
}

header {
  width: 100%;
  height: 80px;
  background: #f5f5f5;
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
  background: #1783db;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  font-size: 18px;
  z-index: 300;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 20px solid #1783db;
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
  top: 80px;
}

.options__menu a {
  color: #ffffffb2;
  cursor: default;
  display: block;
  position: relative;
  transition: color 300ms;
}

.options__menu a:hover {
  color: white;
}

.options__menu .option {
  padding: 20px 0px;
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
