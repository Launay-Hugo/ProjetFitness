<script setup>

</script>
<template>
    <h1>Semaine 1</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Jumping Jack 20s</p>
<p>Pompes x5</p>
<p>Squat x15</p>
<p>Fente de révérence x16</p>
<p>Crush bras croisé x15</p>
<p>Pompe sur les genoux x8</p>
<p>Planche sur la gauche 10s</p>
<p>Planche sur la droite 10s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Jumping jack 20s</p>
    <p>Pompe contre le mur x12</p>
    <p>Twist russe x20</p>
    <p>Fente  x20</p>
    <p>Mountain climber x20 </p>
    <p>Fente et monté de genoux x8</p>
    <p>Fente et monté de genoux x8</p>
    <p>Planche 20s</p>
</div>
<div>
    <h2>Jour 3</h2>
    <p>Lever de genoux  25s</p>
    <p>Dips x10</p>
    <p>Avion x25</p>
    <p>Crunch a l’envers x20</p>
    <p>Lever de genoux 25s</p>
    <p>Pompes sur les genoux x12</p>
    <p>Chaise 20s</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Lever de genoux 25s</p>
    <p>Squats x20</p>
    <p>Crunch bras croisés x22</p>
    <p>Pompes bras écarté x10</p>
    <p>Fente de révérence x26</p>
    <p>Pont 30s </p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Burpees x5</p>
    <p>Squat avec saut x8</p>
    <p>Pompes sur les genoux x15</p>
    <p>Twist russe x22</p>
    <p>Fente et montés de genoux gauche x10</p>
    <p>Fente et montés de genoux droit x10</p>
    <p>Planche 30s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Lever de genoux 30s</p>
    <p>Squat x18</p>
    <p>Pompes contre un mur x18</p>
    <p>Fente de révérence x28</p>
    <p>Crunch type vélo x20</p>
    <p>Avion x28</p>
    <p>Planches dynamique x4</p>
</div>
 </div>



</template>
<style scoped>
.container{
    display: flex;
   gap: 20px;
   border: none;
}
h1{
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
    color: var(--gold);
}
div{
    border: solid 1px var(--orange);
    border-radius: 20px;
    padding: 10px 20px;
}
h2{
    color: var(--orange);
    margin-bottom: 10px;
    font-size: 16px;
}
div :hover{
    transform: scale(1.5);   
    background-color: black;
    position: relative;
   z-index: 8;
}
p:hover{
    transform: none;
    color: red;
}
h2:hover{
    transform: none;
}
@media (max-width: 670px) {
  div:hover {
      transform: none;
  }}
</style>