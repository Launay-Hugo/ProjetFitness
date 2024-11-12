<script setup>
import { RouterLink } from 'vue-router';
import SilverSemaine1 from '@/components/SilverSemaine.vue/SilverSemaine1.vue';
import SilverSemaine2 from '@/components/SilverSemaine.vue/SilverSemaine2.vue';
import SilverSemaine3 from '@/components/SilverSemaine.vue/SilverSemaine3.vue';
import SilverSemaine4 from '@/components/SilverSemaine.vue/SilverSemaine4.vue';
</script>

<template>
  <main>
<div class="container">
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
    <button> <RouterLink :to="{name:'home'}"><span>Retour à l'accueil</span></RouterLink></button>
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
a{
  color: white;
  text-decoration: none;
}


</style>