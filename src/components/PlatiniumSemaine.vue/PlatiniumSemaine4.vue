<script setup>

</script>
<template>
    <h1>Semaine 4</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Repos</p>
</div>
<div>
    <h2>Jour 2</h2>
<p>Repos</p>
</div>
<div>
    <h2>Jour 3</h2>
<p>Fente x40</p>
<p>Burpees x25</p>
<p>Lever de genoux 45s</p>
<p>Pompes contre un mur x35</p>
<p>Squats x40</p>
<p>Crunch a l’envers x40</p>
<p>Fente de révérence x40</p>
<p>Pompes bras écarté x25</p>
<p>Lever de genoux 45s</p>
<p>Planche dynamique x10</p>
</div>
<div>
    <h2>Jour 4</h2>
<p>Jumping jack 60s</p>
<p>Crunch x40</p>
<p>Fente et monté de genoux gauche x40</p>
<p>Fente et monté de genoux droit x40</p>
<p>Twist russe x70</p>
<p>Lever de genoux 60s</p>
<p>Fente de révérence x40>Pompes bras écarté x25</p>
<p>Twist russe x70</p>
<p>Fente x40</p>
<p>Pompe sur les genoux x30>Planche latéral gauche 50s</p>
<p>Planche latéral droite 50s</p>
</div>
<div>
    <h2>Jour 5</h2>
<p>Lever de genoux 60s</p>
<p>Burpees x25</p>
<p>Crunch a l’envers x40</p>
<p>Avion x70</p>
<p>Squats sauté x40</p>
<p>Disps x25</p>
<p>Jumping jack 60s</p>
<p>Crunch type vélo x40 </p>
<p>Pompes x25</p>
<p>Pont 60s</p>
<p>Fente x40</p>
<p>Avion x70</p>
<p>Squats sauté x40 </p>
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
<p>Jumping jack 60s</p>
<p>Fente x40</p>
<p>Crunch bras croisé x40</p>
<p>Dips x30</p>
<p>Squats x40</p>
<p>Lever de genoux 60s</p>
<p>Pompes sur les genoux x30</p>
<p>Fente et montés de genoux gauche x40</p>
<p>Fente et monté de genoux droit x40</p>
<p>Crunch à l’envers x40</p>
<p>Fente de révérence x40</p>
<p>Crunch à l’envers x40</p>
<p>Pompes jambe surélevé x30</p>
<p>Crunch type vélo x40</p>
<p>Fente x40</p>
<p>Planche latéral gauche 60s</p>
<p>Planche latéral droite 60s</p>

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