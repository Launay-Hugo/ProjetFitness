<script setup>
import BtnHome from '@/components/BtnHome.vue'
</script>

<template>
  <main>
<div class="container at-670px">
<div >
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450789/twistsRusse_f0ujje.jpg" alt="twistsrusse">
</div>
<div class="description">
<h1>Twists Russe</h1>
<p>
  Le Twist Russe s’effectue en ayant le buste penché en arrière à 45°, et les pieds légèrement décollés du sol. Ainsi, tout en maintenant votre équilibre, vous allez devoir effectuer des mouvements de rotation pour amener vos mains de part et d’autre de vos hanches. Pour muscler ses abdos, il ne faut pas se contenter de bouger ses bras de gauche à droite. Le mouvement doit initier une véritable rotation contrôlée de votre buste mais surtout une contraction volontaire de votre sangle abdominale. A chaque répétition, vous devez sentir vos obliques travailler.
Lors de twists russes, les muscles obliques externes de l’abdomen sont les premiers sollicités. Ensuite, étant donné qu’il n’est pas possible d’isoler complètement les obliques, le muscle grand droit de l’abdomen participe également au mouvement.
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