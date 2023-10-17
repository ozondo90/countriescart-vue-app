<template>
  <div class="container max-w-screen-lg mx-auto mt-[100px] shadow-md shadow-stone-300 rounded-md h-screen">
    <table class="h-screen w-[100%] border-collapse">
      <thead class=" bg-neutral-950 text-white rounded-tr-md rounded-tl-md h-[35px]">
        <tr>
          <th class="border-2 border-neutral-300">NUMERO</th>
          <th class="border-2 border-neutral-300">ID DEPARTEMENT</th>
          <th class="border-2 border-neutral-300">NOM DEPARTEMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in departments" :key="index">
          <td class="border-2 border-neutral-300">{{index}}</td>
          <td class="border-2 border-neutral-300">{{element.depId}}</td>
          <td class="border-2 border-neutral-300">{{element.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useAxios } from "@/composables/useAxios";
import {ref} from "vue";

const departments = ref<[]>();

async function getDepartments(){
  try{
    const res = await useAxios().get("/departments");
    console.log(res.data)
    departments.value = res.data;
  }
  catch(err){
    console.log(err)
  }
};

getDepartments();

async function addDepartment(){
  try{
    const data = await useAxios().post("/departments" , {
      depId : 7,
      name : "Borgou"
    })
  }
  catch(err){
    console.log(err)
  }
}

</script>

<style scoped>

</style>../composables/useAxios