<script setup lang="ts">

const props = defineProps({
  title: String,
});
</script>
<template>
    <div class="border-b border-gray-300 bg-white">
        <div class="px-10px max-w-1200px mx-auto">
            <h6 class="py-2">{{ props.title }}</h6>
        </div>
    </div>
</template>
