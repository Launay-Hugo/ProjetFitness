<script setup>

</script>
<template>
    <h1>Semaine 3</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 40s</p>
<p>Cunch x40</p>
<p>Squat avec saut x30</p>
<p>Crunch type vélo x40</p>
<p>Pompes jambe surélevé x18</p>
<p>Fente x40</p>
<p>Pompe bras écarté x20</p>
<p>Mountain climber x40</p>
<p>Lever de genoux 30s</p>
<p>Squat x30</p>
<p>Twist russe x60</p>
<p>Planche 60s</p>
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
<p>Squats x40</p>
<p>Fente de révérence x30</p>
<p>Crunch bras crosiée x40</p>
<p>Pompes x20</p>
<p>Fente et monté de genoux droit x40</p>
<p>Fente et monté de genoux gauche x40</p>
<p>Avion x60</p>
<p>Squat avec saut x30</p>
<p>Crunch x40</p>
<p>Pont 60s</p>
</div>
<div>
    <h2>Jour 5</h2>
<p>Jumping jack 40s</p>
<p>Squats x40</p>
<p>Dips x15</p>
<p>Crunch type vélo x40</p>
<p>Burpees x25</p>
<p>Planche dynamique x15</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Lever de genoux 30s</p>
<p>Pompes main surélevé x20</p>
<p>Fente de révérence x40</p>
<p>Twist russe  x60</p>
<p>Fente  x40</p>
<p>Crunch type vélo x40</p>
<p>Lever de genoux 30s</p>
<p>Pompe diamant x12</p>
<p>Pont 30s </p>
<p>Planche 60s</p>
</div>
<div>
    <h2>Jour 7</h2>
<p>Jumping jack 30s</p>
<p>Crunch x40</p>
<p>Squats x40</p>
<p>Jumping jack 20s</p>
<p>Squats avec saut x40</p>
<p>Pompes x20</p>
<p>Crunch a l’envers x40</p>
<p>Burpees x25</p>
<p>Fente  et monté de genoux gauche x40</p>
<p>Fente et monté de genoux droit 40</p>
<p>Crunch x40</p>
<p>Pompes x20</p>
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