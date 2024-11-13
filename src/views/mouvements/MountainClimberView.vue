<script setup>
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/mountainClimb_vf5zra.gif" alt="mountain climber">
</div>
<div class="description">
<h1>Mountain Climber</h1>
<p>Positionnez-vous face au sol, en appui sur les mains et les pointes de pieds. Vos jambes et vos bras sont tendus, mains à l’aplomb des épaules, en position de <RouterLink :to="{name:'pompe'}">Pompe</RouterLink>.Veillez à avoir un alignement segmentaire correct (cuisses-bassin-tronc alignés), abdos et fessiers contractés, regard vers le sol. Fléchissez une jambe tout en gardant l’autre bien tendue, toujours en appui sur vos pointes de pieds. L’exercice consiste alors à ramener rapidement et alternativement les genoux gauche et droit vers l’avant. 
le mountain climber sollicite l’ensemble des groupes musculaires, et particulièrement les jambes, les abdos, les bras, ainsi que les fléchisseurs de la hanche.
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
a{
  color: var(--orange);
  text-decoration: none;
}

</style>