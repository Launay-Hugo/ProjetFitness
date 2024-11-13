<script setup>
import { RouterLink } from 'vue-router';
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/burpees_r0kbxq.gif" alt="burpees">
</div>
<div class="description">
<h1>Burpees</h1>
<p>
  Mettez vous debout, pieds largeur d’épaules, orteils tournés vers l’extérieur, comme si vous alliez faire un <RouterLink :to="{name:'squat'}">Squat</RouterLink>, vous descendez en <RouterLink :to="{name:'squat'}">Squat</RouterLink> classique, en pliant les genoux et en repoussant les fessiers vers l’arrière. A la différence que vous continuez le mouvement en posant vos mains au sol. Balancez vos pieds vers l’arrière pour arriver en position de <RouterLink :to="{name:'planche'}">Planche</RouterLink> puis effectuez une <RouterLink :to="{name:'pompe'}">Pompe</RouterLink>. Au sol, vous créez une impulsion en repoussant fortement dans les mains et en gainant vos abdominaux (fermement contractés) afin de relever votre buste et de ramener vos pieds vers l’avant. Vous revenez ainsi en position de <RouterLink :to="{name:'squat'}">Squat</RouterLink> (avec les mains au sol). Sautez verticalement en pressant dans vos talons(comme pour un <RouterLink :to="{name:'squatWithJump'}">Squat avec saut</RouterLink>).
Les Burpees sollicitent la quasi-totalité de vos groupes musculaires. Ils permettent aussi d’augmenter votre endurance musculaire  ainsi que vos capacités cardiovasculaires.
</p>
</div>
</div>
<div>
<BtnHome />
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