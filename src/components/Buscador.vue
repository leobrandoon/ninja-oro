<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <Oro name="Farm" :min_gold="10" :max_gold="20" />
      </div>
      <div class="col-sm-3">
        <Oro name="Cave" :min_gold="5" :max_gold="10" />
      </div>
      <div class="col-sm-3">
        <Oro name="House" :min_gold="2" :max_gold="5" />
      </div>
      <div class="col-sm-3">
        <Oro name="Casino" :min_gold="-50" :max_gold="50" />
      </div>
    </div>
    <div class="container">
      <h3 class="list-group-item active">Actividades</h3>
      <ul class="list-group">
        <!-- Aca tengo que meter las actividades  -->

        <li class="list-group-item list-group-item-action" v-for="(actividad,i) in actividades" :key="i">{{actividad}}</li>

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
    Oro
  },
  data: () => {
    return StoreGold.state;
  },
  updated(){
    if (this.numero_oros ==100){
      alert('Encontraste los 100')
    } else if( this.numero_oros < 0){
      alert('Perdiste Chaval')
    }
  }
};
</script>
<style scoped>
.container {
  padding: 1rem;
}
.list-group {
  text-align: left;
}
</style>