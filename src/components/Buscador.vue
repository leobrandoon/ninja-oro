<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        <Oro name="Montaña" :min_gold="1" :max_gold="10" />
      </div>
      <div class="col-sm-3">
        <Oro name="Cueva" :min_gold="1" :max_gold="7" />
      </div>
      <div class="col-sm-3">
        <Oro name="Casa" :min_gold="2" :max_gold="5" />
      </div>
      <div class="col-sm-3">
        <Oro name="Casino" :min_gold="-30" :max_gold="30" />
      </div>
    </div>
    <div class="container">
      <button
        type="button"
        class="btn btn-danger boton"
        @click="reiniciar_juego"
      >Reinicia Click Aqui!</button>
      <h3 class="list-group-item active">Actividades</h3>
      <ul class="list-group">
        <!-- Aca tengo que meter las actividades  -->

        <li
          class="list-group-item list-group-item-action"
          v-for="(actividad,i) in actividades"
          :key="i"
        >{{actividad}}</li>

        <!-- <li v-for="(Oro, i) in actividades" v-bind:key="i">
          <a v-bind:href="Oro.url">{{ activdades.texto }}</a>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import Oro from "@/components/Oro.vue";
import StoreGold from "@/StoreGold.js";
export default {
  name: "App",
  components: {
    Oro,
  },
  data: () => {
    return StoreGold.state;
  },
  // aca definimos las acciones del ganar
  methods: {
    reiniciar_juego: function () {
      if (window.confirm("Quieres volver a volver a empezar")) {
        // aca reiniciamos el juego
        StoreGold.reseteo_actividad();
        StoreGold.cero_oro();
      }
    },
  },
  updated() {
    if (this.numero_oros == 100) {
      alert("Encontraste los 100");
    } else if (this.numero_oros < 0) {
      alert("Perdiste Todos tus Oros Chaval");
    }
  },
};
</script>
<style scoped>
.container {
  padding: 1rem;
}
.list-group {
  text-align: left;
}
.boton {
  margin-bottom: 1rem;
}
</style>