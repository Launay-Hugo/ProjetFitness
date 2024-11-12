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
    <p>Jumping jack 40s</p>
    <p>Fente x28</p>
    <p>Crunch x26</p>
    <p>Pompes sur les genoux x16</p>
    <p>Fente de révérence x24</p>
    <p>Mountain climber x28</p>
    <p>Dips x12</p>
    <p>Crunch x26 </p>
    <p>Chaise 35s</p>
</div>
<div>
    <h2>Jour 4</h2>
  <p>Lever de genoux 40s</p>
  <p>Pompes main surélevé x12</p>
  <p>Fente et monté de genoux </p>
  <p>gauche x8</p>
  <p>Fente et monté de genoux</p>
  <p>droit x8</p>
  <p>Crunch x28</p>
  <p>Squats x24</p>
  <p>Avion x26</p>
  <p>Fente  x28</p>
  <p>Planche latéral droite 25s</p>
  <p>Planche latéral gauche 25s</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Burpess  x5</p>
    <p>Twist russe x26</p>
    <p>Squats x24</p>
    <p>Fente de révérence x26</p>
    <p>Crunch bras croisé x22</p>
    <p>Fente x28</p>
    <p>Dips x12</p>
    <p>Crunch x28</p>
    <p>Planche 40s</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Jumping jack 45s</p>
    <p>Fente x30</p>
    <p>Crunch x30</p>
    <p>Squats x26</p>
    <p>Lever de genoux 30s</p>
    <p>Pompes sur les genoux x18</p>
    <p>Fente et monté de genoux gauche x10</p>
    <p>Fente et monté de genoux droit x10</p>
    <p>Crunch x30</p>
    <p>Pompes contre un mur x24</p>
    <p>Pont 45s
    </p>
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
    color: var(--silver);
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