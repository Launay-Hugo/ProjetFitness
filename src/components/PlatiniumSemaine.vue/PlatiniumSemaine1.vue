<script setup>

</script>
<template>
    <h1>Semaine 1</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 30s</p>
<p>Pompes x5</p>
<p>Crunch x20</p>
<p>Squats x15</p>
<p>Pompes sur les genoux x10</p>
<p>Fentes x20</p>
<p>Planche latéral gauche 15s</p>
<p>Planche latéral droit 15s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Jumping jack 30s</p>
    <p>Pompes x7</p>
    <p>Fente de révérence x25</p>
    <p>Twist russe x26</p>
    <p>Avion x20 </p>
    <p>Lever de genoux 20s</p>
    <p>Planche 30s</p>
</div>
<div>
    <h2>Jour 3</h2>
    <p>Lever de genoux  30s</p>
    <p>Dips x5</p>
    <p>Squats x20</p>
    <p>Crunch croisé x20</p>
    <p>Pompes sur les genoux x12</p>
    <p>Fente x15</p>
    <p>Mountain climber x24s</p>
    <p>Pont 30s</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Jumping jack 30s</p>
    <p>Crunch type vélo x14</p>
    <p>Squats x25</p>
    <p>Pompes avec bras écartés x10</p>
    <p>Fente de révérence  x30</p>
    <p>Planche 35s</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Burpees x5</p>
    <p>Fente x35</p>
    <p>Crunch bras croisé x25</p>
    <p>Lever de genoux 35s</p>
    <p>Planche latéral gauche 20s</p>
    <p>Pont 25s</p>
    <p>Planche latéral droite 20s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 35s </p>
    <p>Crunch x30</p>
    <p>Pompes bras surélevés x15</p>
    <p>Squats x25</p>
    <p>Levé de genoux 35s</p>
    <p>Pompes x10</p>
    <p>Chaise 40s</p>
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
</style>