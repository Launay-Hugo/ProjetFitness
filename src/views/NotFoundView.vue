<!-- Composant NotFoundView.vue -->

<template>
    <main >
      <h1>
        Désolé cette page n'existe pas !!
      </h1>
  <img src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/404_jzfayt.png"  alt="404">
  <div class="button">
      <button> <RouterLink :to="{name:'home'}"><span>Retour à l'accueil</span></RouterLink></button>
    </div>
    </main>
  </template>
  <style scoped>
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 50px;
  }
  a{
  color: white;
  text-decoration: none;
}
h1{text-align: center;
margin-bottom: 20px;}
img{
    height: 400px;
    width: 500px;
    align-self: center;
}
.button{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

</style>