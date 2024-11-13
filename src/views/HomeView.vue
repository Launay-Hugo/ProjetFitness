<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <main>
<div class="container home-960px home-670px" >
    <h2>5 Programmes de 4 semaines exerçant le corps au complet , ceux-ci divisés en plusieurs niveaux de difficulté allant de débutant (bronze) à avancé (diamant).</h2>
    <div class="programmes">
    <div class="leftCard">
    <p><font-awesome-icon :icon="['fas', 'medal']" style="color: var(--bronze);" /> Bronze = Programme pour Débutant conçu pour les personnes sans activité physique. <font-awesome-icon :icon="['fas', 'medal']" style="color: var(--bronze);"/> </p>
<p><font-awesome-icon :icon="['fas', 'medal']" style="color: var(--silver);" /> Argent = Programme pour Débutant conçu pour les personnes ayant une activité physique faible. <font-awesome-icon :icon="['fas', 'medal']" style="color: var(--silver);" /> </p>
<p><font-awesome-icon :icon="['fas', 'medal']" style="color: var(--gold);"/> Or = Programme intermédiaire conçu pour les personnes ayant une activité physique moyenne. <font-awesome-icon :icon="['fas', 'medal']" style="color: var(--gold);"/></p>
<p><font-awesome-icon :icon="['fas', 'medal']" style="color: var(--platinium);"/> Platine = Programme intermédiaire conçu pour les personnes ayant une activité physique régulière. <font-awesome-icon :icon="['fas', 'medal']" style="color: var(--platinium);"/></p>
<p><font-awesome-icon :icon="['fas', 'medal']" style="color: var(--diamond);"/> Diamant = Programme avancé conçu pour les personnes ayant une activité physique poussée. <font-awesome-icon :icon="['fas', 'medal']" style="color:var(--diamond);"/></p>
    </div>

    <div class="rightCard">
<button> <RouterLink :to="{name:'bronze'}"><span>Voir le programme Bronze</span></RouterLink></button>
<button> <RouterLink :to="{name:'silver'}"><span>Voir le programme Argent</span></RouterLink></button>
<button><RouterLink :to="{name:'gold'}"><span>Voir le programme Or</span></RouterLink></button>
<button><RouterLink :to="{name:'platinium'}"><span>Voir le programme Platine</span></RouterLink></button>
<button><RouterLink :to="{name:'diamond'}"><span>Voir le programme Diamant</span></RouterLink></button>
  </div>
    </div>
  <div>
<img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/imagecarotte_sjqeyx.png" alt="imgHome">
</div>  
</div>
  </main>
</template>
<style scoped>

.container{
  padding-top: 130px;
}
h2{
  text-align: center;
  font-size: 18px;
}
.programmes{
/*  border: 1px solid  var(--orange); */
 display: flex;
 justify-content: space-between;
 padding: 100px 0;
}
.leftCard{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
}
.rightCard{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
 
}

a{
  color: white;
  text-decoration: none;
}
img {

 display: flex;
 margin: auto;
}

</style>