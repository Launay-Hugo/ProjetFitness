<script setup>

</script>
<template>
    <h1>Semaine 1</h1>
 <div class="container programmes-670px">
<div>
<h2>Jour 1</h2>
<p>Jumping Jack 20s</p>
<p>Pompes sur les genoux x10</p>
<p>Crunch à l’envers x20</p>
<p>Dips x10</p>
<p>Fente et montés de genoux gauche x15</p>
<p>Fente et montés de genoux droit x15</p>
<p>Pompe bras écarté x10</p>
<p>Twist russe x20</p>
<p>Lever de genoux 20s</p>
<p>Planche 30s</p>

</div>
<div>
    <h2>Jour 2</h2>
<p>Burpees x5</p>
<p>Crunch bras croisés x20</p>
<p>Fente x20</p>
<p>Pompes x10</p>
<p>Squats x20</p>
<p>Lever de genoux 20s</p>
<p>Avion x20</p>
<p>Planche dynamique x5</p>

</div>
<div>
    <h2>Jour 3</h2>
<p>Jumping jack 25s</p>
<p>Crunch x25</p>
<p>Fente de révérence x20</p>
<p>Pompes contre un mur x15</p>
<p>Crunch type vélo x25</p>
<p>Pompes bras écarté x10</p>
<p>Squat avec saut x20</p>
<p>Planche sur la droite x30</p>
<p>Planche sur la gauche x30</p>

</div>
<div>
    <h2>Jour 4</h2>
<p>Lever de genoux 25s</p>
<p>Pompes surélevés x15</p>
<p>Crunch bras croisés x30</p>
<p>Mountain climber x24</p>
<p>Squat x25</p>
<p>Chaise 30s</p>
<p>Pompes x15</p>
<p>Pont 30s </p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Repos</p>
</div>
<div>
    <h2>Jour 6</h2>
<p>Jumping jack 30s</p>
<p>Dips x12</p>
<p>Squat avec saut x30</p>
<p>Pompes sur les genoux x20</p>
<p>Twist russe x36</p>
<p>Burpees x15</p>
<p>Fente et montés de genoux gauche x30</p>
<p>Fente et montés de genoux droit x30</p>
<p>Planche 40s</p>
</div>
<div>
    <h2>Jour 7</h2>
<p>Lever de genoux 30s</p>
<p>Squat x40</p>
<p>Pompes sur les genoux x12</p>
<p>Fente de révérence x40</p>
<p>Crunch type vélo x40</p>
<p>Pompes bras écarté x15</p>
<p>Avion x40</p>
<p>Planches dynamique x8</p>

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