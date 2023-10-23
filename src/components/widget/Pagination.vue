<template>
    <div>
        <ul v-if="props.totalPages > 1" class="pagination flex">
            <li>
                <a href="#" :class="{ 'page_link': true, 'disabled-link': props.currentPage === 1 }" @click.prevent="changePage(props.currentPage - 1)">&lt;</a>
            </li>
            <li v-for="page in displayPages" :key="page" :class="{ active: props.currentPage === page || page === '...' }">
                <p v-if="page === '...'" href="#" @click.prevent>...</p>
                <a v-else href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li>
                <a href="#" :class="{ 'page_link': true, 'disabled-link': props.currentPage === props.totalPages }" @click.prevent="changePage(props.currentPage + 1)">&gt;</a>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed,ref } from 'vue'
const props = defineProps({
  currentPage: Number,
  totalPages:Number,
});

const fiveArray = ref([1,2,3,4,5])
const displayPages = computed(() =>{
    // 計算顯示的頁碼陣列，包含省略號
    const result = [];
      if (props.totalPages <= 6) {
        // 總頁數小於等於5，直接顯示所有頁碼
        for (let i = 1; i <= props.totalPages; i++) {
          result.push(i);
        }
      } else {
        // 總頁數大於5，根據當前頁顯示頁碼和省略號
        if (props.currentPage <= 3) {
          // 當前頁為前三頁時，顯示前5頁和省略號
          result.push(...props.fiveArray, '...', props.totalPages);
        } else if (props.currentPage > props.totalPages -2) {
            // 當前頁為後二頁時，顯示後五頁加最後一頁和省略號
          result.push(1, '...',props.totalPages - 5,props.totalPages - 4, props.totalPages - 3,props.totalPages - 2,props.totalPages - 1 ,props.totalPages);
        } else if(props.currentPage === props.totalPages -2){
            // 當前頁為倒數第三頁時頁時，顯示後五頁加最後一頁和省略號(解除重複問題)
          result.push(1,'...',props.currentPage - 3,props.currentPage - 2,props.currentPage - 1, props.currentPage, props.currentPage + 1,props.currentPage + 2)
        } else {
          // 當前頁在中間位置時，顯示當前頁的前兩頁、當前頁和當前頁的後兩頁和省略號
          result.push(1, '...',props.currentPage - 2,props.currentPage - 1, props.currentPage, props.currentPage + 1,props.currentPage + 2 ,'...', props.totalPages);
        }
      }
      return result;
})
const emit = defineEmits(['page-changed']);

const changePage = (page) =>{
  if (page >= 1 && page <= props.totalPages) {
    window.scrollTo(0, 0);
    emit('page-changed', page);
  }
}  
</script>
<style scoped>
.pagination li a{
  color:#000000 !important;
  padding: 5px;
}
.pagination li a:hover{
  color: #ceb96e !important; 
}
a.disabled-link {
  color: gray; 
  cursor: not-allowed;
  display: none; 
}
a.disabled-link:hover {
  color: #ceb96e !important; 
  cursor: not-allowed; 
}
.page_link{
  color:#000000 !important;
}
</style>
  