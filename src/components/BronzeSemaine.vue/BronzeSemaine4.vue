<script setup>

</script>
<template>
    <h1>Semaine 4</h1>
 <div class="container">
<div>
<h2>Jour 1</h2>
<p>Jumping jack 20sec</p>
<p>Crush bras croisé x20</p>
<p>Pompe x12</p>
<p>Fente de révérence x20</p>
<p>Planche 20s</p>
</div>
<div>
    <h2>Jour 2</h2>
    <p>Lever de genoux 25s</p>
    <p>Squat x18</p>
    <p>Pompe contre un mur x20</p>
    <p>Pont 25s</p>
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
    <p>Dips x10</p>
    <p>Mountain climber x20</p>
    <p>Chaise 15s</p>
</div>
<div>
    <h2>Jour 6</h2>
    <p>Lever de genoux 25s</p>
    <p>Crunch x18</p>
    <p>Fente x22</p>
    <p>Pompes sur les genoux x15</p>
    <p>Planche 30s</p>
</div>
<div>
    <h2>Jour 7</h2>
    <p>Lever de genoux 30s</p>
    <p>Squat x20</p>
    <p>Pompe sur les genoux x15</p>
    <p>crunch x20</p>
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
    color: var(--bronze);
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