<template>
    <div>
        <div class="py-40px md:px-50px">
            <table class="order_table hidden md:block">
                <tbody>
                    <tr>
                        <th class="pr-60px">訂單</th>
                        <th class="pr-120px">發佈日期</th>
                        <th class="pr-50px">狀態</th>
                        <th class="pr-180px">總計</th>
                        <th>動作</th>
                    </tr>
                    <tr>
                        <td><span class="notice">#4299</span></td>
                        <td>2023 年 9 月 20 日</td>
                        <td>失敗</td>
                        <td>NT$5,349 (共 8 件商品)</td>
                        <td>
                            <button class="order_button">付款</button>
                            <button class="order_button" @click="activeTab = emit('set-order-list')">查看</button>
                            <button class="order_button">取消</button>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="notice">#4297</span></td>
                        <td>2023 年 9 月 18 日</td>
                        <td>處理中</td>
                        <td>NT$5,349 (共 8 件商品)</td>
                        <td>
                            <button class="order_button" @click="activeTab = 'order_list'">查看</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile_order_list block md:hidden">
                <div class="mobile_order">
                    <div class="line">
                        <h5>訂單</h5>
                        <h5><span class="notice">#4299</span></h5>
                    </div>
                    <div class="line">
                        <h5>發佈日期</h5>
                        <h5>2023 年 9 月 18 日</h5>
                    </div>
                    <div class="line">
                        <h5>狀態</h5>
                        <h5>失敗</h5>
                    </div>
                    <div class="line">
                        <h5>總計</h5>
                        <h5>NT$5,349 (共 8 件商品)</h5>
                    </div>
                    <div class="line">
                        <h5>動作</h5>
                        <div class="flex gap-20px">
                            <button class="order_mobile_button">付款</button>
                            <button class="order_mobile_button" @click="activeTab = 'order_list'">查看</button>
                            <button class="order_mobile_button">取消</button>
                        </div>
                    </div>
                </div>
                <div class="mobile_order">
                    <div class="line">
                        <h5>訂單</h5>
                        <h5><span class="notice">#4299</span></h5>
                    </div>
                    <div class="line">
                        <h5>發佈日期</h5>
                        <h5>2023 年 9 月 18 日</h5>
                    </div>
                    <div class="line">
                        <h5>狀態</h5>
                        <h5>處理中</h5>
                    </div>
                    <div class="line">
                        <h5>總計</h5>
                        <h5>NT$5,349 (共 8 件商品)</h5>
                    </div>
                    <div class="line">
                        <h5>動作</h5>
                        <div class="flex gap-20px">
                            <button class="order_mobile_button" @click="activeTab = 'order_list'">查看</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['set-order-list']);
</script>
<style scoped>
.line{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #EEEEEE;
    padding:10px 0;
}

.notice{
    color:#543118;
}
.order_table tbody tr {
    text-align: left;
    border-bottom: 2px solid #EEEEEE;
}
.order_table tbody td,.order_table tbody th {
    padding-top: 10px;
    padding-bottom: 10px;
}

.order_button {
    margin-right: 20px;
    width: 56px;
    height: 33px;
    background-color: #CEB96E;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_button:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.order_mobile_button{
    width: 56px;
    height: 33px;
    background-color: #CEB96E;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_mobile_button:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.mobile_order{
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    padding-left:8px;
    padding-right: 8px;
}
</style>