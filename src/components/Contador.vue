<template>
  <div>
    <h2>Captura  100 Oros {{numero_oros}}</h2>
    <h4>Has capturado {{numero_oros}}</h4>
  </div>
</template>

<script>
import StoreGold from "@/StoreGold.js";
export default {
  name: "Contador",
  data: () => {
    return StoreGold.state;
  }
};
</script>

<style scoped>
</style>