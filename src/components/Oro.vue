<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">Earns {{min_gold}} - {{max_gold}}</p>
      <a href="#" class="btn btn-primary" @click="suma_oros">Buscar</a>
    </div>
  </div>
</template>
<script>
import StoreGold from "@/StoreGold.js";
export default {
  name: "Oro",
  props: {
    name: String,
    min_gold: Number,
    max_gold: Number,
    actividades: Array
  },
  methods: {
    suma_oros: function() {
      // 1. generar un numero al azar entre min y max
      const nuevo_oro =
        Math.floor(Math.random() * (this.max_gold - this.min_gold)) +
        this.min_gold;
      // 2. sumar ese numero al total de oros
      StoreGold.suma_oros(nuevo_oro);
      // 3. agregar una nueva actividad indicando cuantos oros gané
      if (nuevo_oro <= 0) {
        StoreGold.addActividad(`Perdiste  ${nuevo_oro} oros en ${this.name}`);
      } else {
        StoreGold.addActividad(`Ganaste  ${nuevo_oro} oros en ${this.name}`);
      }
    }
  }
};
</script>
<style scoped>
</style>