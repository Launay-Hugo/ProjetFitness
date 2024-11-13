<script setup>

</script>
<template>
    <h1>Semaine 4</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Burpees x20</p>
<p>Cunch x40</p>
<p>Squat avec saut x35</p>
<p>Pompes jambe surélevé x25</p>
<p>Squat x40</p>
<p>Jumping jack 35s</p>
<p>Pompe diamant x20</p>
<p>Mountain climber x40</p>
<p>Fente de révérence x40</p>
<p>Crunch type vélo x40</p>
<p>Crunch a l’envers x40</p>
<p>Jumping jack 35s</p>
<p>Fente x40</p>
<p>Pont 90s</p>
</div>
<div>
    <h2>Jour 2</h2>
<p>Lever de genoux 35s</p>
<p>Fente x40</p>
<p>Squat x40</p>
<p>Pompes pied surélevé x25</p>
<p>Fente de révérence x40</p>
<p>Pont jambe gauche 40s </p>
<p>Pont jambe droite 40s</p>
<p>Pompes bras écarté x25</p>
<p>Fente puis lever de genoux gauche x40</p>
<p>Fente puis lever de genoux droit x40</p>
<p>Avion x60</p>
<p>Planche 90s</p>
</div>
<div>
    <h2>Jour 3</h2>
<p>Burpees x35</p>
<p>Crunch bras croisé x40</p>
<p>Pompes x20</p>
<p>Squats x40</p>
<p>Planche dynamique x15</p>
</div>
<div>
    <h2>Jour 4</h2>
<p>Jumping jack 40s</p>
<p>Crunch x40</p>
<p>Squats avec saut x40</p>
<p>Dips x20</p>
<p>Fente de révérence x40</p>
<p>Lever de genoux 40s</p>
<p>Crunch type vélo x40</p>
<p>Pompes diamant x25</p>
<p>Fente  x40</p>
<p>Twiste russe x70</p>
<p>Planche latéral gauche 60s</p>
<p>Planche latéral droite 60s</p>
</div>
<div>
    <h2>Jour 5</h2>
<p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Repos</p>
</div>
<div class="test">
    <h2>Jour 7</h2>
<p>Jumping jack 35s</p>
<p>Crunch x40</p>
<p>Squats avec saut x40</p>
<p>Jumping jack 35s</p>
<p>Fente et monté de genoux gauche  x40</p>
<p>Fente et monté de genoux droit x40</p>
<p>Crunch a l’envers x40</p>
<p>Burpees x25</p>
<p>Avions x80</p>
<p>Fente x40</p>
<p>Crunch x40</p>
<p>Pont 90s</p>
<p>Pompes x30</p>
<p>Crunch type vélo x40</p>
<p>Squat x40</p>
<p>Dips x25</p>
<p>Fente x40</p>
<p>Planche latéral gauche 40s</p>
<p>Planche latéral droit 40s</p>
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
    transform: scale(1.5);   
    background-color: black;
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