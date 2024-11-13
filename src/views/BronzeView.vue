<script setup>
import BronzeSemaine1 from '@/components/BronzeSemaine.vue/BronzeSemaine1.vue';
import BronzeSemaine2 from '@/components/BronzeSemaine.vue/BronzeSemaine2.vue';
import BronzeSemaine3 from '@/components/BronzeSemaine.vue/BronzeSemaine3.vue';
import BronzeSemaine4 from '@/components/BronzeSemaine.vue/BronzeSemaine4.vue';
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container">
  <div class="reactive"></div>
<div >
<BronzeSemaine1 />
</div>
<BronzeSemaine2 />
<div >
<BronzeSemaine3 />
</div>
<div>
<BronzeSemaine4 />
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