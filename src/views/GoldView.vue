<script setup>
import { RouterLink } from 'vue-router';

import GoldSemaine1 from '@/components/GoldSemaine.vue/GoldSemaine1.vue';
import GoldSemaine2 from '@/components/GoldSemaine.vue/GoldSemaine2.vue';
import GoldSemaine3 from '@/components/GoldSemaine.vue/GoldSemaine3.vue';
import GoldSemaine4 from '@/components/GoldSemaine.vue/GoldSemaine4.vue';
</script>

<template>
  <main>
<div class="container">
<div >
<GoldSemaine1 />
</div>
<GoldSemaine2 />
<div >
<GoldSemaine3 />
</div>
<div>
<GoldSemaine4 />
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