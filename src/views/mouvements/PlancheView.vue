<script setup>
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/planche_pihdfz.jpg" alt="planche">
</div>
<div class="description">
<h1>Planche</h1>
<p>
  la planche, consiste à se positionner face au sol, en appui sur les pointes de pied et les avant-bras, coudes à l'aplomb des épaules. Dans cette position, le segment « jambes-bassin-tronc » est aligné et les muscles abdominaux et fessiers sont contractés
Cet exercice sollicitent les muscles de l'abdomen et du dos en profondeur, et participent au maintien et à la protection de la colonne vertébrale.
</p>
</div>
</div>
<div>
  <BtnHome/>
</div>
  </main>
</template>
<style scoped>
.container{
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
 align-items: center;
}
img{
 margin-top: 120px;
  border-radius: 50%; 
  object-fit: cover;
  height: 400px;
}
.description{
  padding-left: 50px ;
  padding-top: 60px;
}
h1{
  font-size: 25px;
  color: var(--orange);
  margin-bottom: 10px;
}
p{
  font-size: 18px;
}

</style>