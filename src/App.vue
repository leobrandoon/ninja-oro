<template>
  <div id="app" class="container">
    <!-- As a heading -->
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Manzo Gold</span>
    </nav>
    <Contador/>
    <Buscador/>
    <!-- aca falta importar las acciones -->
  </div>
</template>

<script>

import Buscador from "./components/Buscador.vue";
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Buscador,Contador
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
