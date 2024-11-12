<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
<div class="container">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/kneePompe_acng8u.gif" alt="kneePompe">
</div>
<div class="description">
<h1>Pompe sur les genoux</h1>
<p>
Les pompes sur les genoux, comme son nom l’indique est un exercice semblable aux <RouterLink :to="{name:'pompe'}">Pompes</RouterLink> mais avec les genoux au sol.
Placez donc les genoux par terre, les mains sous les épaules et croisez les pieds.
Procédez ensuite au même schéma que les <RouterLink :to="{name:'pompe'}">Pompes</RouterLink>. Cette exercice travaille les mêmes groupes musculaire.
</p>
</div>
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