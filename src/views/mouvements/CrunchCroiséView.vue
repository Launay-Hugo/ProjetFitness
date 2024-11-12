<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
<div class="container">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/crunchCrois%C3%A9_uikb0o.gif" alt="crunchCroise">
</div>
<div class="description">
<h1>Crunch bras croisés</h1>
<p>
    Croisez les bras sur la poitrine et procédez à un <RouterLink :to="{name:'crunch'}">Crunch</RouterLink> 
Cet exercice renforce principalement les oblique et les hanches ainsi que les abdominaux.
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