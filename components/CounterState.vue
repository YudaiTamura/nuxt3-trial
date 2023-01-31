<template>
  <div class="flex justify-center text-3xl">カウンター：{{ counter }}</div>
</template>

<script setup lang="ts">
  const { counter } = useCounter();
</script>
