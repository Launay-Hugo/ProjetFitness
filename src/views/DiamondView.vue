<script setup>
import { RouterLink } from 'vue-router';

import DiamondSemaine1 from '@/components/DiamondSemaine.vue/DiamondSemaine1.vue';
import DiamondSemaine2 from '@/components/DiamondSemaine.vue/DiamondSemaine2.vue';
import DiamondSemaine3 from '@/components/DiamondSemaine.vue/DiamondSemaine3.vue';
import DiamondSemaine4 from '@/components/DiamondSemaine.vue/DiamondSemaine4.vue';
</script>

<template>
  <main>
<div class="container">
<div >
<DiamondSemaine1 />
</div>
<DiamondSemaine2 />
<div >
<DiamondSemaine3 />
</div>
<div>
<DiamondSemaine4 />
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