<script setup>

</script>
<template>
    <h1>Semaine 3</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 40s</p>
<p>Crunch a l’envers x40</p>
<p>Fente x40</p>
<p>Pompes x25</p>
<p>Squats x40</p>
<p>Levers de genoux 40s</p>
<p>Avion x60</p>
<p>Fente de révérence x40</p>
<p>Planche dynamique x8</p>


</div>
<div>
    <h2>Jour 2</h2>
<p>Repos</p>
</div>
<div>
    <h2>Jour 3</h2>
   <p>Repos</p>
</div>
<div>
    <h2>Jour 4</h2>
<p>Lever de genoux 40s</p>
<p>Fente x40</p>
<p>Pompes bras écarté x20</p>
<p>Squat avec saut x30</p>
<p>Pont 40s</p>
<p>Pompes bras surélevé x20</p>
<p>Fente de révérences x40</p>
<p>Planche latéral gauche 40s</p>
<p>Squat avec saut x20</p>
<p>Planche latéral droite 40s</p>
</div>
<div>
    <h2>Jour 5</h2>
<p>Burpees x20</p>
<p>Crunch bras croisé x40</p>
<p>Squats x40</p>
<p>Avion x66</p>
<p>Lever de genoux 40s</p>
<p>Crunch à l’envers x40</p>
<p>Dips x20</p>
<p>Planche 60s</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Jumping jack 40s</p>
<p>Fente et lever de genoux gauche x40</p>
<p>Fente et monté de genoux droit x40</p>
<p>Pompe contre un mur x25</p>
<p>Twist russe 66</p>
<p>Chaise 60s</p>

</div>
<div>
 <h2>Jour 7</h2>
 <p>Lever de genoux 45s</p>
<p>Fente x40</p>
<p>Crunch type vélo x40</p>
<p>Fente de révérence x40</p>
<p>Mountain climber x72</p>
<p>Jumping jack 45s</p>
<p>Dips x25</p>
<p>Squats x40</p>
<p>Pompes avec jambe surélevé x15</p>
<p>Pont 40s</p>
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