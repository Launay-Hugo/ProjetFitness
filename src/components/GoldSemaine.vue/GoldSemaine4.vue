<script setup>

</script>
<template>
    <h1>Semaine 4</h1>
 <div class="container">
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
    <p>Jumping jack 30s</p>
    <p>Crunch x25</p>
    <p>Fente de révérence x34</p>
    <p>Pompes contre un mur x18</p>
    <p>Crunch type vélo x25</p>
    <p>Pompes bras écarté x14</p>
    <p>Squat avec saut x20</p>
    <p>Planche sur la droite x30</p>
    <p>Planche sur la gauche x30</p>
</div>
<div>
    <h2>Jour 4</h2>
    <p>Lever de genoux 30s</p>
    <p>Pompes surélevés x15</p>
    <p>Crunch bras croisés x30</p>
    <p>Mountain climber x44</p>
    <p>Squat x30</p>
    <p>Chaise 30s</p>
    <p>Pompes x20</p>
    <p>Pont 30s </p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Jumping jack 30s</p>
    <p>Dips x12</p>
    <p>Squat avec saut x30</p>
    <p>Pompes sur les genoux x20</p>
    <p>Twist russe x36 </p>
    <p>Burpees x15  </p>
    <p>Fente et montés de genoux gauche x20 </p>
    <p>Fente et montés de genoux droit x20</p>
    <p>Planche 40s</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 30s </p>
    <p>Squat x30</p>
    <p>Pompes sur les genoux x12</p>
    <p>Fente de révérence x30</p>
    <p>Crunch type vélo x30</p>
    <p>Pompes bras écarté x15</p>
    <p>Avion x40</p>
    <p>Planches dynamique x8</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Repos</p>
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