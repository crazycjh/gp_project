<script setup lang="ts">
import { onMounted } from 'vue'
import axios from 'axios'

defineProps<{ msg: string }>()

onMounted(async () => {
  try {
    const response = await axios.get('https://demo2.gcreate.com.tw/gc_godpray/wp-json/my-plugin/v1/get-products')
    console.log('API 請求結果:', response.data)
  } catch (error) {
    console.error('API 請求失敗:', error)
  }
})
</script>

<template>
  <h1 class="text-center bg-gray-100 p-5">{{ msg }}</h1>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
