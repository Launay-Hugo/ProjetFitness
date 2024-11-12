<script setup>

</script>
<template>
    <h1>Semaine 2</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Lever de genoux 15s</p>
<p>Crunch  x10</p>
<p>Avion x12</p>
<p>Pompe contre un mur x10</p>
<p>Planche 20s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Lever de genoux 15s</p>
    <p>crunch bras croisés x8</p>
    <p>Squat x8</p>
    <p>Pont 20s</p>
</div>
<div>
    <h2>Jour 3</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Jumping jack 20s</p>
    <p>Pompe x5</p>
    <p>Fente x12</p>
    <p>Planche latéral gauche 10s</p>
    <p>Planche latéral droite 10s</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 20s</p>
    <p>Crunch x15</p>
    <p>Squats x18</p>
    <p>Pompes sur les genoux x10</p>
    <p>Planche 25s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 20s</p>
    <p>Avion  x15</p>
    <p>Fente de révérence x10</p>
    <p>Pompe contre un mur 15</p>
    <p>Pont 25s</p>
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
    color: var(--bronze);
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
    transform: scale(2);   
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
</style>