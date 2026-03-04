<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>You did it!</h1>
  <p>
    <RouterLink to="/watch">watch</RouterLink> |
    <RouterLink to="/lifecycle">lifecycle</RouterLink> |
    <RouterLink to="/parentComp">parentCompApp</RouterLink> |
    <RouterLink to="/todoList">todoList</RouterLink> |
    <RouterLink to="/slot">slot</RouterLink> |
  </p>
  <RouterView></RouterView>
</template>

<style scoped></style>
