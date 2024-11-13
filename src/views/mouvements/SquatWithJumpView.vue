<script setup>
import { RouterLink } from 'vue-router';
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/JumpSquat_un73gz.gif" alt="jumpsquat">
</div>
<div class="description">
<h1>Squat avec saut</h1>
<p>
  Le squat avec saut, comme son nom l'indique, est un exercice qui combine un <RouterLink :to="{name:'squat'}">Squat</RouterLink> et un saut vertical. Il cible particulièrement les muscles de vos jambes et vous permet de gagner en tonus musculaire. 
Comme tout exercice pliométrique, il est idéal pour gagner en explosivité et en puissance
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