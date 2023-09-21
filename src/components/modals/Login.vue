<template>
    <div class="login">
        <h4 class="title">會員登入</h4>
        <div class="w-full flex flex-col mt-20px gap-20px input_section">  
            <div>
                <h5 class="mb-5px">電子郵件</h5>
                <input class="member_input" type="text" placeholder="請輸入電子郵件">
            </div>
            <div>
                <h5 class="mb-5px">密碼</h5>
                <input class="member_input" type="text" placeholder="請輸入密碼">
            </div>
            <button>登入</button>
        </div> 
        <div class="next px-40px py-10px">
            <button>忘記密碼?</button>
            <span>|</span>
            <button>註冊會員</button>
        </div>
    </div>
</template>
<style scoped>
.close{
    width: 10px;
    height: 10px;
}
.next{
    display: flex;
    justify-content: space-between;
}
.next button{
    color:#333333;
    border: none;
    outline: none;
}
.next span{
    color:#D9D9D9;
}

.input_section{
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}
.member_input{
  padding: 0 10px;
  height: 30px;
  width: 100%;
  background-color: #EEEEEE;
}
.title{
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.2em;
  text-align: center;
  color:#000000;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 10px;
}
</style>