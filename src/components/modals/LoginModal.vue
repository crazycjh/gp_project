<script setup>
import { VueFinalModal } from 'vue-final-modal'
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"
  >
    <div class="flex items-center h-10">
      123
    </div>
    <slot />
  </VueFinalModal>
</template>