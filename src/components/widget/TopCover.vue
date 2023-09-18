<template>
    <div class="relative flex justify-center items-center">
        <img class="h-300 object-cover image w-full" :src="props.image" alt="">
        <h2 class="title z-10">{{ props.title }}</h2>
    </div>
</template>
<script setup >
const props = defineProps({
  title: String,
  image:String
});
</script>
<style scoped>
@media(max-width:1024px){
    .image{
      aspect-ratio: 16 / 9;
    }
}
.image{
    filter: brightness(50%);
}
.title{
    position: absolute;
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#ffffff;
}
</style>