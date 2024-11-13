<script setup>

</script>
<template>
    <h1>Semaine 2</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Crunch x40</p>
<p>Burpees x10</p>
<p>Lever de genoux 30s</p>
<p>Pompe bras ecarté x12</p>
<p>Avion x40</p>
<p>Fente et monté de genoux gauche x20</p>
<p>Fente et monté de genoux droit x20</p>
<p>Pompes avec mains surélevées x10</p>
<p>Planche latéral gauche 30s</p>
<p>Planche latéral droite 30s</p>

</div>
<div>
    <h2>Jour 2</h2>
    <p>Jumping jack 30s</p>
<p>Pompes x15</p>
<p>Crunch bras croisé x40</p>
<p>Lever de genoux 40s</p>
<p>Fente de révérence x40</p>
<p>Pompes pied surélevé x10</p>
<p>Crunch a l’envers x32</p>
<p>Planche dynamique x3</p>
<p>Chaise 40s</p>

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
<p>Jumping jack 35s</p>
<p>Burpees x12</p>
<p>Crunch x40</p>
<p>Squats x40</p>
<p>Fente de révérence x40</p>
<p>Mountain Climber x40</p>
<p>Fente x30</p>
<p>Avion x40</p>
<p>Pompes main surélevé x 15</p>
<P>Pont 50s</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Lever de genoux x35s</p>
<p>Squats avec saut x25</p>
<p>Crunch bras croisé x40</p>
<p>Pompes sur les genoux x15</p>
<p>Jumping jack 30s</p>
<p>Twist russe x54</p>
<p>Fente x40</p>
<p>Dips x15</p>
<p>Planche 50s</p>
</div>
<div>
 <h2>Jour 7</h2>
<p>Burpees x15</p>
<p>Crunch x40</p>
<p>Squat x40</p>
<p>Lever de genoux 40s</p>
<p>Pompes avec bras écartés x18</p>
<p>Crunch type vélo x34</p>
<p>Squats avec saut x30</p>
<p>Pont 40s</p>
<p>Fente et monté de genoux gauche x25</p>
<p>Fente et monté de genoux droit x25</p>
<p>Planche latéral gauche 35s</p>
<p>Planche latéral droite 35s</p>



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
    color: var(--platinium);
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
@media (max-width: 670px) {
    div:hover {
        transform: none;
    }}
</style>