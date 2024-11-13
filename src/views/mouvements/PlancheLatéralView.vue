<script setup>
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/plancheLateral1_q9dms8.jpg" alt="plancheLateral">
</div>
<div class="description">
<h1>Planche Latéral</h1>
<p>
  Tenez vous debout, les pieds joints et les bras baissés, sautez et écartez les bras ainsi que les jambes et vous atterrissez, puis vous sautez et vous rapprochez les pieds et les bras à nouveau. Cet exercice renforce le cardio et fait travailler tout le corps.
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