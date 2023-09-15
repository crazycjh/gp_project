<template>
    <div class="flex flex-col items-center mb-5">
        <img class="photo" :src="link" alt="">
    </div>
</template>
<script setup >
const props = defineProps({
  link: String,
});
</script>
<style scoped>
.photo{
    width: 100%;
}
</style>