<script setup>
import BtnHome from '@/components/BtnHome.vue'
import PlatiniumSemaine1 from '@/components/PlatiniumSemaine.vue/PlatiniumSemaine1.vue';
import PlatiniumSemaine2 from '@/components/PlatiniumSemaine.vue/PlatiniumSemaine2.vue';
import PlatiniumSemaine3 from '@/components/PlatiniumSemaine.vue/PlatiniumSemaine3.vue';
import PlatiniumSemaine4 from '@/components/PlatiniumSemaine.vue/PlatiniumSemaine4.vue';
</script>

<template>
  <main>
<div class="container">
  <div class="reactive"></div>
<div>
<PlatiniumSemaine1 />
</div>
<PlatiniumSemaine2 />
<div >
<PlatiniumSemaine3 />
</div>
<div >
<PlatiniumSemaine4 />
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