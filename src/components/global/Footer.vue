<template>
    <div class="bg-amber-800">
        <div class="px-11 lg:px-360 xl:px-750 py-30 flex flex-col gap-10px items-center">
            <div>
                <ul class="flex gap-1">
                    <li>
                        <router-link to="/about/" class="text-white whitespace-nowrap">關於我們 |</router-link>
                    </li>
                    <li>
                        <router-link to="/details/" class="text-white whitespace-nowrap">條款與細節 |</router-link>
                    </li>
                    <li>
                        <router-link to="/process/" class="text-white whitespace-nowrap">點燈流程 |</router-link>
                    </li>
                    <li>
                        <router-link to="/privacy/" class="text-white whitespace-nowrap">隱私權政策 |</router-link>
                    </li>
                    <li>
                        <router-link to="/customerService/" class="text-white whitespace-nowrap">線上客服</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <p class="whitespace-nowrap text-white">客服電話：0912-345-678 服務信箱：service@XXXX.com.tw</p>
            </div>
            <div class="flex gap-5 justify-center">
                <img src="../../assets/footer/yt.svg" alt="">
                <img src="../../assets/footer/fb.svg" alt="">
                <img src="../../assets/footer/ig.svg" alt="">
                <img src="../../assets/footer/line.svg" alt="">
            </div>
            <div>
                <p class="whitespace-nowrap text-white">神界祈福平台Ⓒ2023 All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>
