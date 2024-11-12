<script setup>

</script>
<template>
    <h1>Semaine 2</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Pompes x12</p>
<p>Dips x12</p>
<p>Crunch x40</p>
<p>Squats avec saut x35</p>
<p>Fente de révérence x40</p>
<p>Pompes bras écarté x12</p>
<p>Lever de genoux 30s</p>
<p>Planche sur la droite 30s</p>
<p>La chaise 40s</p>
<p>Planche sur la gauche 30s</p>
</div>
<div>
    <h2>Jour 2</h2>
<p>Squats avec sauts  x35</p>
<p>Crunch à l’envers x40</p>
<p>Pompes pied surélevé x10</p>
<p>Fentes x40</p>
<p>Pompe bras écarté x15</p>
<p>Pont 50s</p>
<p>Planche dynamique x8</p>
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
<p>Jumping jack 40s</p>
<p>Crunch x40</p>
<p>Avion x40</p>
<p>Dips x15</p>
<p>Pompes contre un mur x20</p>
<p>Crunch type vélo x40</p>
<p>Pompes bras écarté x15</p>
<p>Squat x40</p>
<p>Planche sur la droite x40</p>
<p>Planche sur la gauche x40</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Lever de genoux 30s</p>
<p>Pompes x20</p>
<p>Crunch bras croisés x40</p>
<p>Mountain climber x36</p>
<p>Squat avec saut x40</p>
<p>Pompe diamant x12</p>
<p>Fente x40</p>
<p>Pont 30s </p>
<p>Planche 50s</p>
</div>
<div>
    <h2>Jour 7</h2>
<p>Jumping jack 30s</p>
<p>Crunch  x40</p>
<p>Burpees x20</p>
<p>Squats  x40</p>
<p>Crunch type vélo x40</p>
<p>Twist russe x50</p>
<p>Avion x40</p>
<p>Fente de révérence x40</p>
<p>Planches dynamique x12</p>
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
    color: var(--diamond);
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
}
p:hover{
    transform: none;
    color: red;
}
h2:hover{
    transform: none;
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