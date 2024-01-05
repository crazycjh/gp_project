<template>
<section class="md:flex-row md:justify-center flex max-w-[700px] mt-20 mx-auto flex-col gap-6 ">
    <div class="flex flex-col items-center basis-1/3 gap-1 boder--left"> 
        <!-- 做虛線左右邊框 -->
        <div class=" w-[45px]">
            <img class="w-full" src="../../assets/index/calendar_icon.png" />
        </div>
        <div>
            {{ date.year }}年{{ date.month }}月{{ date.day }}日({{ date.weekday }})
        </div>
    </div>
    <div class="basis-1/3 flex flex-col items-center gap-1 boder--outside--x boder--mobile--y">
        <div class=" px-2 boder--x text-[#920000]">農曆</div>
        <div class=" mt-1">{{ calendarInfo.year }}({{ calendarInfo.zodiac }})年{{ calendarInfo.month }}月{{ calendarInfo.day }}日</div>
        <div class="flex items-center">
            <div>
                查看農民曆
            </div>
            <div class=" rounded-full bg-temple-red flex justify-center items-center w-5 h-5 ml-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
    </div>
    <div class="basis-1/3 flex flex-col items-center gap-1 boder--right">
        <div class="px-2 boder--x text-[#920000]">神明聖誕</div>
        <div>玉皇上帝大天尊聖壽</div> 
        <!-- 檢查該日是否有神明生日 -->
        <!-- 如果多過三個要隱藏，並且hover時顯示(怎麼做？) -->
    </div>
</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import lunarFun from 'lunar-fun';


const calendarInfo = ref({year:'', month:'', day:'', zodiac:''});
let date = ref({
    year : '',
    month : '',
    day : '',
    weekday : '',
})

onMounted(()=> {
    getCurrentDate();
    convertCalendar(date);
    
})

// 當天國曆轉換農曆
const getCurrentDate = ()=> {
let today = new Date();

 date.value.year = today.getFullYear();
 date.value.month = today.getMonth() + 1;
 date.value.day = today.getDate();
 date.value.weekday =convertNumToWord(today.getDay());

};
const convertCalendar = (year, month, day) =>{
    

        const [lunarYear, lunarMonth, lunarDay, run] = lunarFun.gregorianToLunal(date.value.year, date.value.month, date.value.day)
        calendarInfo.value.zodiac = converZodiac(lunarFun.getZodiac(lunarYear))
        // console.log(lunarYear, lunarMonth, lunarDay);
        calendarInfo.value.year = lunarFun.getEarthlyBranches(lunarYear) + lunarFun.getHeavenlyStems(lunarYear)
        calendarInfo.value.month = run ? '潤'+ convertNumToWord(lunarMonth) : convertNumToWord(lunarMonth);
        calendarInfo.value.day = convertNumToWord(lunarDay);

};

const convertNumToWord = (lunar)=> {
    const chineseNumbers = ['零', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '廿', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '三十一'];

    if (lunar >= 1 && lunar <= 31) {
        return chineseNumbers[lunar];
    } else {
        return '未知';
    }
};

const converZodiac = (zodiac)=> {
    const zodiacMap = {
        '鼠': '鼠', '牛': '牛', '虎': '虎', '兔': '兔',
        '龙': '龍', '蛇': '蛇', '马': '馬', '羊': '羊',
        '猴': '猴', '鸡': '雞', '狗': '狗', '猪': '豬'
    };
    return zodiac.split('').map(char => zodiacMap[char] || char).join('');
};

</script>
<style>
.boder--x {
    position: relative;
}
.boder--x::before {
    content: '';
    position:absolute;
    inset:0;
    top:3px;
    border-right-width: 1.8px;
    border-left-width: 1.8px;
    border-color: #920000;

}

.boder--outside--x, .boder--left, .boder--right {
    position: relative;
}

.boder--outside--x::before {
    content: '';
    position:absolute;
    inset:0;
    border-style: dashed;
    border-right-width: 1.8px;
    border-left-width: 1.8px;
    height:100px;
}

.boder--left::before{
    content: '';
    position:absolute;
    inset:0;
    border-style: dashed;
    border-left-width: 1.8px;

    height:100px;
}

.boder--right::before {
    content: '';
    position:absolute;
    inset:0;
    border-style: dashed;
    border-right-width: 1.8px;
    height:100px;
}

@media (max-width:768px) {
    .boder--outside--x::before, .boder--left::before, .boder--right::before {
        content:none;
        position:static;
        border-style:none;
        border-right-width:0;
        border-left-width:0;
    }

    .boder--outside--x, .boder--leftm,  .boder--right{
        position:static;
    }

    .boder--mobile--y {
        position: relative;
    }

    .boder--mobile--y::before {
        width:45%;
        content: '';
        position:absolute;
        inset:0;
        padding: 10px 0;
        top:-10px;
        border-style: dashed;
        border-top-width: 1.8px;
        border-bottom-width: 1.8px;
        margin:0 auto;
        height:105px;
        /* height:100px; */
    }

}

</style>