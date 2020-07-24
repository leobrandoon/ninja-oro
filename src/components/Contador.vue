<template>
  <div>
    <h2>Captura  50 Oros </h2>
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