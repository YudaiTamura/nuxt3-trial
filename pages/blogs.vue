<template>
  <div class="flex justify-center flex-col m-10">
    <h1 class="flex justify-center text-4xl font-bold mb-10">Blogs</h1>
    <ul class="flex justify-center flex-col">
      <li v-for="blog in blogs" :key="blog.id">{{ blog.id }}：{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const { data: blogs } = await useFetch("/api/blogs");
</script>
