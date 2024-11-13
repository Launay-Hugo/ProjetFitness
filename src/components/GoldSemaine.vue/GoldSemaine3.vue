<script setup>

</script>
<template>
    <h1>Semaine 3</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 30ss</p>
<p>Crunch x26</p>
<p>Fente x34</p>
<p>Pompes contre un mur x26</p>
<p>Crunch type vélo x22</p>
<p>Squats x26</p>
<p>Planche 50s</p>
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
    <p>Lever de genoux 30s</p>
    <p>Fente x32</p>
    <p>Pompes bras écarté x12</p>
    <p>Squat avec saut x18</p>
    <p>Pont 30s</p>
    <p>Pompes bras surélevé x12</p>
    <p>Fente de révérences x32</p>
    <p>Planche latéral gauche 30s</p>
    <p>Squat avec saut x18</p>
    <p>Planche latéral droite 30s</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Jumping jack 30s</p>
    <p>Squats x30</p>
    <p>Dips x10</p>
    <p>Crunch type vélo x38</p>
    <p>Burpees x12</p>
    <p>Planche dynamique x8</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 30s</p>
    <p>Fente x34</p>
    <p>Fente de révérence x34</p>
    <p>Mountain climber x40</p>
    <p>Jumping jack 30s</p>
    <p>Dips x12</p>
    <p>Squats x32</p>
    <p>Pompes avec jambe surélevé x8</p>
    <p>Pont 40s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 35s</p>
    <p>Fente x34</p>
    <p>Squats x34</p>
    <p>Pompe sur les genoux x20</p>
    <p>Crunch a l’envers x25</p>
    <p>Fente x34</p>
    <p>Planche 40s</p>
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