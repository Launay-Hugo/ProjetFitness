<template>
    <footer>
      <p>
        Made by Launay Hugo with
        <a href="https://vuejs.org/">Vue.js</a>
      </p>
    </footer>
  </template>
  
  <style scoped>
  footer {
    height: var(--footer-height);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bblack);
  }
  a {
    color: var(--orange);
    font-weight: bold;
    text-decoration: none;
  }
  </style>