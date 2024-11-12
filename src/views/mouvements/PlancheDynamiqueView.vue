<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
<div class="container">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/plancheDynamique_hmuwka.gif" alt="plancheDynamique">
</div>
<div class="description">
<h1>Planche Dynamique</h1>
<p>Placez-vous en position <RouterLink :to="{name:'planche'}">Planche</RouterLink>, sur vos coudes, et le dos en position neutre.
En tendant un bras puis l'autre, placez vous en position de <RouterLink :to="{name:'pompe'}">Pompe</RouterLink>, les bras tendus.
Revenez ensuite dans la position de départ.
Alternez l'ordre des bras à chaque répétition.
    Les principaux muscles travaillés pour la planche dynamique sont les abdominaux et les triceps.
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
a {
    color: var(--orange);
    text-decoration: none;
}
</style>