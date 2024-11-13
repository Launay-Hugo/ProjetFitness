<script setup>
import { RouterLink } from 'vue-router';
import SilverSemaine1 from '@/components/SilverSemaine.vue/SilverSemaine1.vue';
import SilverSemaine2 from '@/components/SilverSemaine.vue/SilverSemaine2.vue';
import SilverSemaine3 from '@/components/SilverSemaine.vue/SilverSemaine3.vue';
import SilverSemaine4 from '@/components/SilverSemaine.vue/SilverSemaine4.vue';
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container">
  <div class="reactive"></div>
<div >
<SilverSemaine1 />
</div>
<SilverSemaine2 />
<div >
<SilverSemaine3 />
</div>
<div>
<SilverSemaine4 />
</div>
<div  class="home">
<div>
    <BtnHome />
</div>
</div>
</div>
  </main>
</template>
<style scoped>

.container{
  padding-top: 100px;
}
div {
    padding-bottom: 20px;
}
.home{
    display: flex;
    justify-content: center;
    align-items: center;
padding-top: 80px;

}

.reactive{
  position: relative;
}
</style>