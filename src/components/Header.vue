<template>
  <nav class="bg-blue-500">
    <div class="nav__content container max-w-screen-lg flex justify-between items-center mx-auto h-[60px]">
      <div class="site-logo">
        <RouterLink to="/" class="font-bold text-xl text-white">Country Carte</RouterLink> 
      </div>
      <ul class="nav__list flex gap-5">
        <li class="nav__item">
          <RouterLink to="/departments">Departements</RouterLink> 
        </li>
        <li class="nav__item">
          <RouterLink to="/municipalities">Communes</RouterLink> 
        </li>
        <li class="nav__item">
          <RouterLink to="/create-department" class=" bg-slate-50 text-blue-500 p-3 rounded-md shadow-md"> Ajouter departement</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>

<style scoped>

</style>