<script setup lang="ts">
import Menu from './Menu.vue';
</script>
<template>
    <div class="relative h-80 w-full mb-0 z-50">
        <div class="md:px-30 lg:px-30 2xl:px-360 w-full py-10 px-10 header fixed top-0 h-80">
            <Menu />
        </div>
    </div>
</template>
<style scoped>
.header{
    background-color:#920000;
}
</style>