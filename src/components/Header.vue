<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <div class="container">
  <div class="intro">
    <RouterLink :to="{ name: 'home' }">
<h1>Projet Fitness</h1>
</RouterLink>
<p>Ce programme d’entraînement se base sur l’HICT (Circuit Training Haute Intensité),considéré comme la façon la plus simple et efficace pour améliorer votre condition physique. </p>
  </div>
  <h2>Liste des différents mouvements :</h2>
<div class="at-670px at-960px">
  <div class="mouvements">
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'mountainClimber' }"><span>Mountain Climber</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'jumpingJack' }"><span>Jumping Jack</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'kneePompe' }"><span>Pompe sur les genoux</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'avion' }"><span>Avion</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'pompe' }"><span>Pompe</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'fente' }"><span>Fente</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'dips' }"><span>Dips</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'crunch' }"><span>Crunch</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'twistsRusse' }"><span>Twists Russe</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'planche' }"><span>Planche</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'plancheLateral' }"><span>Planche Latéral</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'pont' }"><span>Pont</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'fenteReverence' }"><span>Fente de révérence</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
  </div>
<div class="mouvements2">
  <font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'squat' }"><span>Squat</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'squatWithJump' }"><span>Squat avec saut</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'burpees' }"><span>Burpees</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'crunchVelo' }"><span>Crunch type vélo</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'crunchCroise' }"><span>Crunch bras croisés</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
<RouterLink :to="{name:'plancheDynamique' }"><span>Planche dynamique</span></RouterLink>
<font-awesome-icon :icon="['fas', 'circle']" />
</div>
</div>
</div>
  </header>

</template>

<style scoped>
header {
  border-bottom: 1px solid var(--orange);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--bblack);
  z-index: 5;

}

.container {
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1{
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 10px;
  color: var(--orange);
  text-align: center;
}
p{
  font-size: 12px;
  color: white;
  margin-bottom: 10px;
  text-align: center;
}

.mouvements{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
 margin-top: 10px;
  gap: 20px;

  
}
.mouvements2{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
 margin-top: 10px;
  gap: 20px;
 
  
}
a{
  color: var(--orange);
  font-size: 16px;
  text-decoration: none;
  
}

h2{
  color: white;
  text-decoration: underline;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
}
svg {
  color: var(--orange);
  font-size: 2px;
  align-items: center;
}

</style>
