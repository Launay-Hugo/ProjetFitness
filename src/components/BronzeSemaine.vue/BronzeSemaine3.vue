<script setup>

</script>
<template>
    <h1>Semaine 3</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 20sec</p>
<p>Crunch  x15</p>
<p>Avion x12</p>
<p>Pompe contre un mur x10</p>
<p>Planche 20s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Lever de genoux 20s</p>
    <p>crunch bras croisés x12</p>
    <p>Squat x12</p>
    <p>Pont 25s</p>
</div>
<div>
    <h2>Jour 3</h2>
    <p>Jumping jack 25s</p>
    <p>twists russe x22</p>
    <p>Pompe x8</p>
    <p>Planche latéral gauche 15s</p>
    <p>Planche latéral droite 15s</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 25s</p>
    <p>Crunch x18</p>
    <p>Squats x20</p>
    <p>Pompes sur les genoux x15</p>
    <p>Planche 30s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 25s</p>
    <p>Avion  x20</p>
    <p>Fente de révérence x16</p>
    <p>Pompe contre un mur x18</p>
    <p>Pont 30s</p>
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