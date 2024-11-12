<script setup>

</script>
<template>
    <h1>Semaine 3</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 30s</p>
<p>Crunch x22</p>
<p>Fente x26</p>
<p>Pompes contre un mur x18</p>
<p>Crunch type vélo x10</p>
<p>Squats x20</p>
<p>Planche 40s
</p>
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
  <p>Pompes sur les genoux x12</p>
  <p>Mountain climber x22</p>
  <p>Dips x10</p>
  <p>Squats x20</p>
  <p>Crunch bras croisé x22</p>
  <p>Planche latéral droite 20s</p>
  <p>Planche latéral gauche 20s</p>
</div>
<div>
    <h2>Jour 5</h2>
    <p>Lever de genoux 35s</p>
    <p>Pompes bras écarté x8</p>
    <p>Avion x20</p>
    <p>Squats  x20</p>
    <p>Planche 30s</p>
    <p>Fente x26</p>
    <p>Pont 35ss</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Jumping jack 30s</p>
    <p>Crunch  x24</p>
    <p>Jumping jack 30s</p>
    <p>Pompes contre un mur x20</p>
    <p>Mountain climber x24</p>
    <p>Fente de révérence x24</p>
    <p>Crunch type vélo x12</p>
    <p>Chaise  30s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Jumping jack 35s</p>
    <p>Fente x24</p>
    <p>Squats x22</p>
    <p>Pompe sur les genoux x14</p>
    <p>Crunch x20</p>
    <p>Fente x24</p>
    <p>Planche 35s </p>
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