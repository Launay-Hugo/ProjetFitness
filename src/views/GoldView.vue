<script setup>
import BtnHome from '@/components/BtnHome.vue'
import GoldSemaine1 from '@/components/GoldSemaine.vue/GoldSemaine1.vue';
import GoldSemaine2 from '@/components/GoldSemaine.vue/GoldSemaine2.vue';
import GoldSemaine3 from '@/components/GoldSemaine.vue/GoldSemaine3.vue';
import GoldSemaine4 from '@/components/GoldSemaine.vue/GoldSemaine4.vue';
</script>

<template>
  <main>
<div class="container ">
<div class="reactive"> </div>
  <div>
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
    <BtnHome/>
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