<template>
  <CreateDepartmentForm @sendData="storeDepartment"/>
</template>

<script setup lang="ts">
import CreateDepartmentForm from "../components/CreateDepartmentForm.vue";
import { useAxios } from "@/composables/useAxios";

async function storeDepartment(newDepartment : {}){
  try{
    await useAxios().post("/departments" , newDepartment)
  }
  catch(err){
    console.log(err)
  }
}

</script>

<style scoped></style>
