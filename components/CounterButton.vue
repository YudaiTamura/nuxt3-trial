<template>
  <div class="flex justify-around mt-5">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="increment"
    >
      増やす
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="decrement"
    >
      減らす
    </button>
  </div>
</template>

<script setup lang="ts">
  const { increment, decrement } = useCounter();
</script>
