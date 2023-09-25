<template>
    <div class="flex mx-auto max-w-1200px md:px-50px relative">
        <div class="todo z-10">
            <div class="todo_left w-full h-full">
                <img class="w-full h-full" :src="`${backend}wp-content/uploads/2023/09/home_agent_img.jpg`" alt="">
            </div>
            <div class="todo_right w-full">
                <Title class="btn" title="代辦事項"/>
                <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                <InnerLinkBtn  text="了解更多" link="/latest/all"/>
            </div>

        </div>
    </div>
 </template>
 <script setup >
 //自製元件
import InnerLinkBtn from '../widget/InnerLinkBtn.vue';
import Title from '../widget/Title.vue';
const backend = import.meta.env.VITE_BACKEND_PATH
 </script>
 <style scoped>
.todo{
    width: 100%;
    min-height: 338px;
    display: flex;
    margin-bottom: -150px;
    object-fit: cover;
}
@media(width < 1024px){
    .todo{
        flex-direction: column;
        margin-bottom: 0px;
        min-height: auto;
    }
    .todo_right{
        padding-top: 100px;
        padding-bottom: 100px;
    }
}
@media(width <768px){
    .todo_right{
        padding-top: 80px;
        padding-bottom: 80px;
    }
}
.todo_right{
    background-color: #ffffff;
    border:1px solid #CEB96E;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
    justify-content: center;
}

.btn{
    margin-top: -70px;
    margin-bottom: 0;
}

 </style>