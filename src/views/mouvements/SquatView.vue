<script setup>
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
 <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450789/squat_yyv2ar.gif" alt="squat">
</div>
<div class="description">
<h1>Squat</h1>
<p>
Tenez-vous droit , les pieds écartés , puis baissez votre corps jusqu'à ce que vos cuisses soient parallèles au sol.
Cet exercice cible les cuisses (principalement quadriceps, adducteurs et ischio-jambiers) et les fessiers. Il sollicite aussi secondairement les mollets, les lombaires et les abdominaux
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