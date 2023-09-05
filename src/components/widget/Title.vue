<script setup lang="ts">

const props = defineProps({
  title: String,
  white:Boolean 
});
</script>
<template>
    <div class="flex flex-col items-center mb-5">
        <img class="wind" src="../../assets/widget/wind.svg" alt="">
        <h3 :class="{'custom': props.white}">{{ props.title }}</h3>
    </div>
</template>
<style scoped>
.wind{
    margin-top: 80px;
    margin-bottom: 5px;
}
@media(max-width:768px) {
    .wind{
        margin-top: 50px;
    }
}
h3{ 
    color: #543118;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 4.8px;
}
.custom{
    color:#ffffff;
}
</style>