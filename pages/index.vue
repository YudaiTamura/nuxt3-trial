<template>
  <ul class="flex justify-center items-center flex-col">
    <template v-for="page in pages" :key="page.id">
      <li class="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200 mt-2">
        <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
  const pages = [{ id: 1, name: "Counter", path: "/counter" }];
</script>
