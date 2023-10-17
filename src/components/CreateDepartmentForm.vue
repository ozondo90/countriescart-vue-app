<template>
    <form
    action=""
    method="POST"
    @submit.prevent = "send"
    class=" max-w-screen-md shadow-md shadow-neutral-400 border-1 border-neutral-200 rounded-md p-5 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
  >
    <div class="form-block flex-col my-6">
      <label for="depid" class="block text-2sm my-3">Id du departement</label>
      <input
        type="number"
        class="form-control block ring-2 ring-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full h-[35px] pl-3 placeholder:font-thin placeholder:pl-3 placeholder:text-sm"
        id="depid"
        placeholder="id(exp : 1)"
        name="depid"
        v-model="department.depId"
      />
    </div>

    <div class="form-block flex-col my-6">
      <label for="depname" class="block text-2sm my-3">
        Nom du departement</label
      >
      <input
        type="text"
        class="form-control block ring-2 ring-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full h-[35px] pl-3 placeholder:font-thin placeholder:pl-3 placeholder:text-sm"
        id="depname"
        placeholder="nom(exp : Atacora)"
        name="depname"
        v-model="department.name"
      />
    </div>

    <div class="form-block my-6">
      <button
        type="submit"
        class="block w-full bg-blue-500 rounded-md text-center text-white p-3"
      >
        Envoyer
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["sendData"])

const department = ref<{
  depId : Number,
  name : String
}>({
  depId : 0,
  name : ""
});


function send(){
  const newDepartment = department.value;
  emit("sendData" , newDepartment)
}
</script>

<style scoped>

</style>