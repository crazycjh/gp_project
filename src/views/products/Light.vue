<template>
    <div class="cover py-80px relative">
       <div class="left">
            <img class="mb-10px" src="../../assets/products/light/light_list_arrow_left.svg" alt="">
            <p class="previous">上一位</p>
        </div>
       <div class="right">
            <img class="mb-10px" src="../../assets/products/light/light_list_arrow_right_hover.svg" alt="">
            <p class="next">下一位</p>
        </div>
       <div class="top">
            <div>
                <h5 class="mb-10px">點選人數<span class="required">*</span></h5>
                <div class="relative select_wrapper">
                     <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                        <option selected>請選擇</option>
                     </select>
                     <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <img src="../../assets/products/light/light_list_img.png" alt="">
       </div>
       <div class="body">
            <div class="container">
                <button class="believers mb-20px">第一位信眾資料</button>
                <div class="flex gap-20px mb-20px">
                    <div>
                        <h5 class="mb-10px">姓名<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <input class="body_input" type="text" placeholder="請輸入姓名">
                        </div>
                    </div>
                    <div>
                        <h5 class="mb-10px">性別<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                <option selected>請選擇</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>   
       </div>
       <div class="body2">
            <div class="container">
                <div class="flex gap-20px mb-10px">
                    <div>
                        <h5 class="mb-10px">農曆生日<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                <option selected>請選擇年份</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                    <div class="flex gap-20px">
                        <div>
                            <h5 class="mb-10px">吉月<span class="required">*</span></h5>
                            <div class="relative small_wrapper">
                                <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                    <option selected>吉月</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                        <div>
                            <h5 class="mb-10px">吉時<span class="required">*</span></h5>
                            <div class="relative small_wrapper">
                                <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                    <option selected>吉時</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <div class="body2">
            <div class="container">
                <div class="flex mb-40px">
                    <button class="translate">轉農曆</button>
                    <p class="hint">請選擇農曆日期，若不曉得農曆日期，請先選擇國曆日期後按下「轉農曆」進行轉換。</p>
                </div>
                <div class="mb-20px">
                    <h5 class="mb-10px">出生時辰<span class="required">*</span></h5>
                    <div class="relative select_wrapper">
                        <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                            <option selected>吉時</option>
                        </select>
                        <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                </div>
            </div>
       </div>
       <div class="body2">
            <div class="container">
                <div class="flex gap-20px mb-20px">
                    <div>
                        <h5 class="mb-10px">縣市<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                <option selected>請選擇縣市</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                    <div>
                        <h5 class="mb-10px">鄉鎮區<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                                <option selected>請選擇鄉鎮區</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="mb-20px">
                    <h5 class="mb-10px">詳細地址<span class="required">*</span></h5>
                    <div class="relative w-full">
                        <input class="body_input" type="text" placeholder="請輸入詳細地址">
                    </div>
                </div>
            </div>
       </div>
       <div class="body2">
            <div class="container">
                <div class="mb-20px">
                    <h5 class="mb-10px">聯絡電話<span class="required">*</span></h5>
                    <div class="relative w-full">
                        <input class="body_input" type="text" placeholder="請輸入電話號碼">
                    </div>
                </div>
            </div>
            <div class="mb-20px">
                <h5 class="mb-10px">電子信箱<span class="required">*</span></h5>
                <div class="relative w-full">
                    <input class="body_input" type="text" placeholder="請輸入電子信箱">
                </div>
            </div>
       </div>
       <div class="body2">
            <div class="container mb-30px">
                <div class="flex justify-between">
                    <div>
                        <button class="save_btn">儲存</button>
                        <button class="cancel_btn">取消</button>
                    </div>
                    <button class="add">加一位被祈福者</button>
                </div>
            </div>
       </div>
       <div class="body2 ">
            <div class="container top_border py-20px">
               <h5 class="mount mb-20px">共 <span class="count">2</span> 位</h5>
               <h5 class="mount">總計:</h5>
               <h5 class="mount">NT$1000</h5>
            </div>
       </div>
       <div class="body2 ">
            <div class="container">
                <p class="mb-5px">備註:</p>
                <textarea class="custom_textarea"></textarea>
            </div>
            
       </div>
       <div class="body2">
            <div class="container">
              
            </div>
       </div>
       <div class="bottom">
            <div class="flex">
                <input class="mr-10px" type="checkbox">
                <p>我已閱讀並同意網站的<span class="term">條款與條件</span></p>
            </div>
            <div class="container">
                <button class="visa">使用信用卡或簽帳金融卡付款</button>
                <p class="mt-20px">您的個人數據將用於處理您的訂單，支持您在整個網站的體驗，以及我們的<span class="term">隱私權政策</span>中描述的其他目的。</p>
            </div>
       </div>
    </div>
</template>
<style scoped>
.left{
    width: 50px;
    position: absolute;
    top: 35%;
    left: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.previous,.next{
    width: 22px;
    height: 69px;
}
.right{
    width: 50px;
    position: absolute;
    top: 35%;
    right: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.term{
    color:#920000;
}
.custom_textarea{
    width: 100%;
    height: 174px;
}
.count{
    color:#920000;
}
.mount{
    font-size: 20px;
}
.top_border{
    border-top: 1px dashed #AAAAAA;
}
.add{
    border:none;
    border-radius: 0;
    outline: none;
    border-bottom: 1px solid #CEB96E;
}
.save_btn{
    margin-right: 10px;
    width: 63px;
    height: 33px;
    border:none;
    border-radius: 0;
    outline: none;
    background-color:#CEB96E;
    color:#ffffff;
}
.cancel_btn{
    width: 63px;
    height: 33px;
    border:none;
    border-radius: 0;
    outline: none;
    background-color:#9B9B9B;
    color:#ffffff;
}
.translate{
    border-bottom: 1px solid #CEB96E;
    outline: none;
    border-radius: 0;
    margin-right: 6px;
}
.hint{
    color:#777777;
}
.body_input{
    padding:0 10px;
    height: 30px;
    width: 100%;
}
.believers{
    margin-top: 20px;
    width: 148px;
    height: 43px;
    border: none;
    outline: none;
    border-radius: 0;
    color: #ffffff;
    background-color: #CEB96E;
}
.visa{
    margin-top: 20px;
    width: 260px;
    height: 43px;
    border: none;
    outline: none;
    border-radius: 0;
    color: #ffffff;
    background-color: #CEB96E;
}
.required{
    margin-left: 5px;
    color:#920000;
}
.select_wrapper{
    width: 356px;
}
.small_wrapper{
    width: 167px;
}
.custom_select{
   display: flex;
   width:100%;
   height: 30px;
   padding: 0px 10px;
   justify-content: space-between;
   align-items: center;
   flex-shrink: 0;
   background: #ffffff;
   color:#333333;
}
.cover{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
    background-image: url('../../assets/products/light/light_list_bg.svg');
    /* background-repeat: no-repeat;  */
    background-size: cover;
}
.top{
    justify-content: space-around;
    padding-bottom: 18px;
    display: flex;
    align-items: flex-end;
    width: 892px;
    height: 475px;
    background-image: url('../../assets/products/light/light_cover.png');
    border-bottom: 1px ;
}
.body{
    padding-left: 80px;
    padding-right:80px;
    width: 892px;
    background-image: url('../../assets/products/light/light_bg_3.svg');
    /* background-repeat: no-repeat;  */
    background-size: cover;
}
.body .container{
    border-top:1px dashed #AAAAAA;
}
.body2{
    padding-left: 80px;
    padding-right:80px;
    width: 892px;
    background-image: url('../../assets/products/light/light_bg_3.svg');
    background-size: cover;
}
.bottom{
    padding-left: 80px;
    padding-right:80px;
    width: 892px;
    height: 340px;
    background-image: url('../../assets/products/light/light_bg_4.svg');
    background-size: cover;
}
</style>