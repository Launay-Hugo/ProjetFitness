<script setup>

</script>
<template>
    <h1>Semaine 1</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 15s</p>
<p>Crunch  x10</p>
<p>Fente x12</p>
<p>Pompes sur les genoux x5</p>
<p>Pont 15s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Lever de genoux 15s</p>
    <p>Avion x12</p>
    <p>Dips x6</p>
    <p>Squat x12</p>
    <p>Planche 15s</p>
</div>
<div>
    <h2>Jour 3</h2>
    <p>Jumping jack 20s</p>
    <p>Fente de révérence x12</p>
    <p>Crunch bras croisée x14</p>
    <p>Pompe x5</p>
    <p>Planche latéral gauche 10s</p>
    <p>Planche latéral droite 10s</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Lever de genoux 20s</p>
    <p>Pompes contre un mur x8</p>
    <p>Squat x15</p>
    <p>Twist russe x16</p>
    <p>Pont 20s</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 30s</p>
    <p>Mountain climber x16</p>
    <p>Crunch x16</p>
    <p>Squats x18</p>
    <p>Pompes sur les genoux x10</p>
    <p>Planche 30s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 30s</p>
    <p>Avion  x18</p>
    <p>Fente de révérence x20</p>
    <p>Dips x8</p>
    <p>Planche latéral gauche 15s</p>
    <p>Planche latéral droite 15s
    </p>
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
    color: var(--silver);
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