<script>
import { RouterLink } from 'vue-router';

</script>
<template>
 <div class="button">
      <button> <RouterLink :to="{name:'home'}"><span>Retour à l'accueil</span></RouterLink></button>
    </div>

</template>
<style>
.button{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
 a{
  color: white;
  text-decoration: none;
}
</style>