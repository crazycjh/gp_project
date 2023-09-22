<template>
    <div class="py-40px md:px-50px">
        <h4 class="mb-20px">訂單編號 <span class="notice">#4299</span> 於<span class="notice">2023 年 9 月 20 日</span> 下單，目前狀態為
            <span class="notice">處理中</span>。</h4>
        <div class="w-full list">
            <button class="order_list_btn hidden md:block">第一位信眾</button>
            <div class="line">
                <h5>信眾姓名:</h5>
                <h5>林君豪</h5>
            </div>
            <div class="line">
                <h5>性別:</h5>
                <h5>男</h5>
            </div>
            <div class="line">
                <h5>農曆生日:</h5>
                <h5>1992 年(民國81 年) 2 月 3 日 10~12 時</h5>
            </div>
            <div class="line">
                <h5>地址:</h5>
                <h5>330桃園市，桃園區</h5>
            </div>
            <div class="line">
                <h5>詳細地址:</h5>
                <h5>經國路246號</h5>
            </div>
            <div class="line">
                <h5>聯絡電話:</h5>
                <h5>0912345678</h5>
            </div>
            <div class="line">
                <h5>電子郵件:</h5>
                <h5>lia9021102@gmail.com</h5>
            </div>
        </div>
        <div class="w-full list">
            <button class="order_list_btn hidden md:block">第二位信眾</button>
            <div class="line">
                <h5>信眾姓名:</h5>
                <h5>王曉明</h5>
            </div>
            <div class="line">
                <h5>性別:</h5>
                <h5>男</h5>
            </div>
            <div class="line">
                <h5>農曆生日:</h5>
                <h5>1992 年(民國81 年) 2 月 3 日 10~12 時</h5>
            </div>
            <div class="line">
                <h5>地址:</h5>
                <h5>330桃園市，桃園區</h5>
            </div>
            <div class="line">
                <h5>詳細地址:</h5>
                <h5>經國路246號</h5>
            </div>
            <div class="line">
                <h5>聯絡電話:</h5>
                <h5>0912345678</h5>
            </div>
            <div class="line">
                <h5>電子郵件:</h5>
                <h5>lia9021102@gmail.com</h5>
            </div>
        </div>
        <div>
            <h4 class="payment">付款資訊</h4>
            <div class="line">
                <h5>燈別:</h5>
                <h5><span class="notice">光明燈</span></h5>
            </div>
            <div class="line">
                <h5>總計:</h5>
                <h5>NT$1,000</h5>
            </div>
            <div class="line">
                <h5>付款方式:</h5>
                <h5>信用卡</h5>
            </div>
            <div class="line">
                <h5>付款狀態:</h5>
                <h5>已付款</h5>
            </div>
            <div class="mt-10px">
                <h6 class="mb-10px">備註:</h6>
                <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.order_list_btn{
    width: 152px;
    height: 43px;
    background-color: #CEB96E;
    color:#ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_list_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.notice{
    color:#543118;
}
.mobile_order{
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    padding-left:8px;
    padding-right: 8px;
}
.payment{
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#000000;

}
.list{
    padding: 40px 0;
    border-bottom:  2px dotted #AAAAAA;
}
.line{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #EEEEEE;
    padding:10px 0;
}
</style>