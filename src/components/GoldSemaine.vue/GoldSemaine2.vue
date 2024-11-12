<script setup>

</script>
<template>
    <h1>Semaine 2</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Lever de genoux 20s</p>
<p>Crunch x25</p>
<p>Avion x22</p>
<p>Fente x30</p>
<p>Pompes avec mains surélevées x8</p>
<p>Planche latéral gauche 20s</p>
<p>Planche latéral droite 20s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Jumping jack 30s</p>
    <p>Pompes x122</p>
    <p>Crunch bras croisé x25</p>
    <p>Lever de genoux 30s</p>
    <p>Fente de révérence x30</p>
    <p>Pompes pied surélevé x8</p>
    <p>Crunch bras croisés x22</p>
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
    <p>Jumping jack 30s</p>
    <p>Crunch x28</p>
    <p>Avion x26</p>
    <p>Dips x10</p>
    <p>Pompes contre un mur x22</p>
    <p>Crunch type vélo x22</p>
    <p>Squat x24</p>
    <p>Planche sur la droite x20</p>
    <p>Planche sur la gauche x20</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux x30s</p>
    <p>Squats avec saut x15</p>
    <p>Crunch bras croisé x28</p>
    <p>Pompes sur les genoux x15</p>
    <p>Jumping jack 30s</p>
    <p>Twist russe x40</p>
    <p>Fente x32</p>
    <p>Pompes bras écarté x10</p>
    <p>Planche 40s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 30s</p>
    <p>Crunch  x30</p>
    <p>Jumping jack 30s</p>
    <p>Pompes contre un mur x24</p>
    <p>Mountain climber x28</p>
    <p>Crunch type vélo x24</p>
    <p>Fente de révérence x32</p>
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