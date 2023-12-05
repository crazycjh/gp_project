<template>
    <loading :active="isLoading"></loading>
    <div class="max-w-1200px mx-auto max-xl:px-10px w-full mt-30px md:mt-80px">
        <div class="flex">
            <div class="left_tabs hidden xl:block">
                <h4 class="type">商品分類</h4>
                <div class="mt-40px">
                    <div class="tab">
                        <span class="tag" @click="router.push('/product/all')"
                            >全部</span
                        >
                    </div>
                    <div v-for="item in types" :key="item.id">
                        <div class="flex justify-between tab">
                            <span
                                class="tag"
                                @click="router.push(`/product/${item.slug}`)"
                                :class="{ active: activeType === item.slug }"
                                >{{ item.name }}</span
                            >
                            <img
                                v-show="
                                    item.children.length > 0 &&
                                    activeType !== item.slug
                                "
                                src="../../assets/products/culture/down_arrow_icon.svg"
                                alt=""
                            />
                            <img
                                v-show="
                                    item.children.length > 0 &&
                                    activeType === item.slug
                                "
                                src="../../assets/products/culture/up_arrow_icon.svg"
                                alt=""
                            />
                        </div>
                        <div v-show="item.children.length > 0" class="inner">
                            <div
                                v-for="child in item.children"
                                :key="child.id"
                                class="child"
                            >
                                <span
                                    class="tag"
                                    @click="
                                        router.push(`/product/${child.slug}`)
                                    "
                                    :class="{
                                        active: activeType === child.slug,
                                    }"
                                    >{{ child.name }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="lg:ml-30px mt-20px flex flex-col gap-10px w-full max-w-890px"
            >
                <div
                    class="top_section pb-60px flex flex-col md:flex-row gap-20px relative"
                >
                    <div
                        class="flex justify-center items-center gap-10px md:hidden"
                    >
                        <img
                            class="filter"
                            src="../../assets/products/culture/filter_icon.svg"
                            alt=""
                        />
                        <span
                            class="whitespace-nowrap"
                            @click="isOpen = !isOpen"
                            >篩選</span
                        >
                    </div>
                    <div class="images">
                        <div class="relative">
                            <img
                                class="main_img mb-10px"
                                :src="main_img"
                                alt=""
                                @click="open"
                            />
                            <img
                                class="enlarge"
                                src="../../assets/products/culture/enlarge_red.svg"
                                alt=""
                                @click="open"
                            />
                        </div>
                        <swiper
                            class="swiper_section"
                            :style="{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#CEB96E',
                                '--swiper-pagination-bottom': '6px',
                                '--swiper-pagination-bullet-inactive-color':
                                    '#333333',
                            }"
                            :breakpoints="{
                                '640': {
                                    slidesPerView: 4,
                                },
                            }"
                            :slides-per-view="4"
                            :spaceBetween="10"
                            :loop="true"
                            :modules="modules"
                            :navigation="true"
                        >
                            <swiper-slide
                                class="gallery_swiper"
                                v-for="(img, index) in product.gallery"
                                :key="img"
                            >
                                <img
                                    class="small_img"
                                    :src="img"
                                    alt=""
                                    @click="setMainImg(index)"
                                />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="info flex flex-col">
                        <h4>
                            <span class="route">首頁/文創商品/</span
                            >{{ product.category_name }}
                        </h4>
                        <h3 class="product_title">{{ product.title }}</h3>
                        <div class="flex gap-10px">
                            <span v-if="!product.sale" class="product_price"
                                >NT${{
                                    product.price
                                        ? parseInt(
                                              product.price
                                          ).toLocaleString()
                                        : ""
                                }}</span
                            >
                            <span v-if="product.sale" class="product_price sale"
                                >NT${{
                                    product.price
                                        ? parseInt(
                                              product.price
                                          ).toLocaleString()
                                        : ""
                                }}</span
                            >
                            <span v-if="product.sale" class="product_price"
                                >NT${{
                                    product.sale
                                        ? parseInt(
                                              product.sale
                                          ).toLocaleString()
                                        : ""
                                }}</span
                            >
                        </div>
                        <p class="excerpt">{{ product.excerpt }}</p>
                        <div class="flex gap-10px">
                            <div class="count_container">
                                <span class="count_left" @click="decrease"
                                    >-</span
                                >
                                <input
                                    v-model="count"
                                    class="product_count"
                                    min="1"
                                />
                                <span class="count_right" @click="count += 1"
                                    >+</span
                                >
                            </div>

                            <button
                                class="cart_btn"
                                @click="addToCartMain(product.id)"
                            >
                                加入購物車
                            </button>
                        </div>
                        <div class="share">
                            <p>分享至:</p>
                            <img
                                src="../../assets/latest/fb.svg"
                                alt=""
                                @click="fbShare"
                            />
                            <img
                                src="../../assets/latest/line.svg"
                                alt=""
                                @click="lineShare"
                            />
                        </div>
                        <p>分類:{{ product.category_name }}</p>
                    </div>
                </div>
                <div class="mb-40px">
                    <h4 class="pt-0 pb-20px">商品資訊</h4>
                    <div
                        class="flex flex-col gap-20px"
                        v-html="product.content"
                    ></div>
                </div>
                <div class="relative mb-60px w-full">
                    <h5 class="relative_title mb-10px">相關商品</h5>
                    <swiper
                        class="relative_swiper"
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-navigation-top-offset': '40%',
                            '--swiper-pagination-color': '#CEB96E',
                            '--swiper-pagination-bottom': '6px',
                            '--swiper-pagination-bullet-inactive-color':
                                '#333333',
                        }"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 4,
                            },
                        }"
                        :slides-per-view="2"
                        :spaceBetween="10"
                        :loop="true"
                        :modules="modules"
                        :navigation="true"
                    >
                        <swiper-slide
                            class="relative_slide"
                            v-for="item in relative"
                            :key="item.id"
                        >
                            <router-link :to="`/product/culture/${item.id}`">
                                <img
                                    class="relative_img"
                                    :src="item.image"
                                    alt=""
                                />
                            </router-link>
                            <div class="max-md:px-10px">
                                <h3 class="category my-10px">
                                    {{ item.category_name }}
                                </h3>
                                <h5>{{ item.title }}</h5>
                                <div class="flex gap-10px mb-10px">
                                    <span
                                        v-if="!item.sale"
                                        class="product_price"
                                        >NT${{
                                            item.price
                                                ? parseInt(
                                                      item.price
                                                  ).toLocaleString()
                                                : ""
                                        }}</span
                                    >
                                    <span
                                        v-if="item.sale"
                                        class="product_price sale"
                                        >NT${{
                                            item.price
                                                ? parseInt(
                                                      item.price
                                                  ).toLocaleString()
                                                : ""
                                        }}</span
                                    >
                                    <span v-if="item.sale" class="product_price"
                                        >NT${{
                                            item.sale
                                                ? parseInt(
                                                      item.sale
                                                  ).toLocaleString()
                                                : ""
                                        }}</span
                                    >
                                </div>
                                <button
                                    class="add_btn"
                                    @click="addToCart(item.id)"
                                >
                                    加入購物車
                                </button>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <Transition name="slide-fade">
        <div class="mobileMenu" v-show="isOpen">
            <h4 class="type mt-50px ml-10px">商品分類</h4>
            <ul class="mobileUl">
                <li class="nav-item-mobile">
                    <span
                        @click="router.push('all')"
                        :class="{ active: activePage === 'all' }"
                        >全部</span
                    >
                </li>
                <li
                    v-for="item in types"
                    :key="item.id"
                    class="nav-item-mobile"
                >
                    <span
                        @click="router.push(`${item.slug}`)"
                        :class="{ active: activePage === item.slug }"
                        >{{ item.name }}</span
                    >
                    <div v-show="item.children.length > 0" class="inner">
                        <div
                            v-for="child in item.children"
                            :key="child.id"
                            class="child"
                        >
                            <span
                                class="tag"
                                @click="router.push(`${child.slug}`)"
                                :class="{ active: activePage === child.slug }"
                                >{{ child.name }}</span
                            >
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </Transition>
    <div class="mask" v-show="isOpen" @click="isOpen = !isOpen"></div>
    <img
        class="close"
        v-show="isOpen"
        @click="isOpen = !isOpen"
        src="../../assets/header/Union.svg"
        alt=""
    />
</template>
<script setup>
//官方套件
import { onMounted, ref, reactive, watch, computed, onBeforeMount } from "vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

import { useModal } from "vue-final-modal";
import { useAuth } from "@/store/auth.js";

import { useMeta } from "vue-meta";

//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Autoplay, Pagination, Navigation];

//自制組件
const backend = import.meta.env.VITE_BACKEND_PATH;
import ImageModal from "@/components/modals/ImageModal.vue";
import LoginModal from "@/components/modals/LoginModal.vue";
import CartModal from "@/components/modals/CartModal.vue";

//取的id
const productID = ref();
const currentUrl = ref("");
onMounted(() => {
    productID.value = route.params.productID;
    currentUrl.value = window.location.href;
    console.log(route.meta);
    if (route.meta) {
        useMeta({
            title: route.meta.productData.title,
            description: route.meta.productData.content,
            // 'og:title':route.meta.productData.title,
            // 'og:description':route.meta.productData.content,
            // 'og:image':route.meta.productData.image,
        });
    }
});

//line.fb分享
const lineShare = () => {
    const shareUrl = `https://social-plugins.line.me/lineit/share?url=${currentUrl.value}`;
    openWindow(shareUrl);
};
const fbShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl.value}`;
    openWindow(shareUrl);
};

const openWindow = (shareUrl) => {
    const windowWidth = 500;
    const windowHeight = 550;
    const windowLeft = window.screen.width - windowWidth;
    const windowTop = window.screen.height / 2 - windowHeight / 2;
    const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`;
    window.open(shareUrl, "_blank", windowFeatures);
};

//取資料
const count = ref(1);
const product = ref([]);
const types = ref([]);
const activeType = ref("");
const relative = ref([]);
const isLoading = ref(false);
const main_img = ref("");
onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/culture/${
                productID.value
            }`
        );
        product.value = response.data.data;
        types.value = response.data.type;
        activeType.value = response.data.data.category_slug;
        relative.value = response.data.relative;
        main_img.value = response.data.data.image;
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
});

//點小圖換大突
const activeGallery = ref(0);
const setMainImg = (index) => {
    activeGallery.value = index;
    main_img.value = product.value.gallery[index];
};

//控制modal
const auth = useAuth();
const { open, close } = useModal({
    component: ImageModal,
    attrs: {
        image: main_img,
        onConfirm() {
            close();
        },
        //手動製造迴圈使activeGallery的索引不超出其長度
        onPreviousSwiper() {
            const length = product.value.gallery.length;
            if (activeGallery.value === 0) {
                activeGallery.value = length - 1;
            } else {
                activeGallery.value -= 1;
            }
            setMainImg(activeGallery.value);
        },
        onNextSwiper() {
            const length = product.value.gallery.length;
            if (activeGallery.value === length - 1) {
                activeGallery.value = 0;
            } else {
                activeGallery.value += 1;
            }
            setMainImg(activeGallery.value);
        },
    },
});

//登入modal
const login = useModal({
    component: LoginModal,
    attrs: {
        onConfirm() {
            login.close();
        },
    },
});

//購物車modal 第二個modal所以不能用解構來處理
const cart = useModal({
    component: CartModal,
    attrs: {
        onConfirm() {
            router.push(`/cart/${auth.member.user_id}`);
            cart.close();
        },
        onClose() {
            cart.close();
        },
        onInfo() {
            cart.close();
            router.push(`/info/${auth.member.user_id}`);
        },
    },
});

//相關商品加入購物車流程
const addToCart = (id) => {
    cart.close();
    if (auth.isLogin) {
        addWCsession(id);
        //避免購物車已打開未觸發
        cart.open();
    } else {
        open();
    }
};

//主商品加入購物車流程
const addToCartMain = (id) => {
    cart.close();
    if (auth.isLogin) {
        addWCsessionMain(id);
        //避免購物車已打開未觸發
        cart.open();
    } else {
        open();
    }
};

//主商品加入wcSession
const addWCsessionMain = async (id) => {
    isLoading.value = true;
    const requestData = {
        product_id: id,
        user_id: auth.member.user_id,
        quantity: count.value,
    };
    try {
        const response = await axios.post(
            `${backend}api/gc/add/cart`,
            requestData
        );
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
};

//加入wcSession
const addWCsession = async (id) => {
    isLoading.value = true;
    const requestData = {
        product_id: id,
        user_id: auth.member.user_id,
    };
    try {
        const response = await axios.post(
            `${backend}api/gc/add/cart`,
            requestData
        );
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
};

//控制手機板選單
const isOpen = ref(false);
watch(isOpen, (newValue) => {
    newValue
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "auto");
});

//控制減數字
const decrease = () => {
    if (count.value >= 2) {
        count.value--;
    }
};
</script>
<style scoped>
.sale {
    color: #888888;
    text-decoration: line-through;
}
.count_container {
    position: relative;
}
.product_count {
    margin-bottom: 30px;
    width: 57px;
    height: 30px;
    text-align: center;
    outline: none;
}

.count_left {
    top: 0;
    left: 0;
    height: 30px;
    width: 15px;
    background-color: #eeeeee;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.count_right {
    top: 0;
    right: 0;
    height: 30px;
    width: 15px;
    background-color: #eeeeee;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.swiper_section {
    margin-left: 0;
    max-width: 415px;
}

.route {
    color: #aaaaaa;
}
.enlarge {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 5px;
    bottom: 5px;
    cursor: pointer;
    z-index: 10;
}

.relative_img {
    width: 216px;
    height: 216px;
}
.relative_swiper {
    max-width: 890px;
}
@media (max-width: 1024px) {
    .relative_img {
        width: 100%;
        height: auto;
    }
    .relative_slide {
        width: 49% !important;
    }
}
.relative_title {
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #3a3a3a;
}
.top_section {
    border-bottom: 1px solid #eeeeee;
}
.top_section:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 7%;
    height: 100%;
    border-bottom: 2px solid #920000;
    box-sizing: border-box;
}

.share {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 10px;
}

.excerpt {
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 460px;
}
@media (max-width: 768px) {
    .excerpt {
        max-width: 100%;
    }
}

.prodcut_price {
    margin-top: 10px;
    font-family: Noto Sans TC;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
}

.product_title {
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #3a3a3a;
    padding-bottom: 20px;
    position: relative;
}

.product_title:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 20%;
    height: 100%;
    border-bottom: 2px solid #c3c3c3;
    box-sizing: border-box;
}

.main_img {
    aspect-ratio: 1 / 1;
    width: 415px;
    height: 415px;
    cursor: pointer;
}

.small_img {
    width: 96px;
    height: 96px;
    cursor: pointer;
}
@media (max-width: 768px) {
    .main_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .small_img {
        /* width: 100%; */
        object-fit: cover;
    }
}
.gallery_swiper {
    width: 96px !important;
}

.tag {
    cursor: pointer;
}

.active {
    color: #ceb96e;
}

.child {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-left: 1px solid #eeeeee;
}

.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.close {
    z-index: 100;
    top: 15px;
    right: 15px;
    position: absolute;
}

.mask {
    z-index: 50;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #00000080;
    width: 100%;
    height: 100vh;
}

.mobileUl {
    margin-top: 34px;
}

.mobileMenu {
    z-index: 60;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    height: 100vh;
    width: 65vw;
}

.nav-link {
    color: #ffffff;
}

.nav-link-mobile {
    color: #000000;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
}

.nav-link-mobile:hover {
    color: #ceb96e;
}

.nav-item-mobile {
    padding-top: 15px;
    padding-bottom: 7px;
    padding-left: 22px;
    border-bottom: 1px solid #eeeeee;
}

.filter {
    height: 24px;
    width: 24px;
}

.category {
    font-size: 14px;
    color: #888888;
}

.name {
    font-size: 16px;
    color: #920000;
}

.price {
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
}

.cart_btn {
    width: 96px;
    height: 30px;
    color: #ffffff;
    padding: 5px 10px;
    border: 1px solid #920000;
    outline: none;
    border-radius: 0;
    font-size: 14px;
    background-color: #920000;
}
.add_btn {
    width: 96px;
    height: 30px;
    color: #920000;
    padding: 5px 10px;
    border: 1px solid #920000;
    outline: none;
    border-radius: 0;
    font-size: 14px;
    background-color: #ffffff;
}
.cart_btn:hover {
    background-color: #920000;
    color: #ffffff;
}

.photo {
    width: 290px;
    height: 290px;
}

@media (max-width: 1024px) {
    .photo {
        width: 200px;
        height: 200px;
    }
}

@media (max-width:512px) {
    .photo {
        width: 160px;
        height: 160px;
    }
}

.tab {
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
}

.type {
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
    padding-bottom: 13px;
    position: relative;
}

.type::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 20%;
    height: 100%;
    border-bottom: 2px solid #920000;
    box-sizing: border-box;
}

.left_tabs {
    min-width: 272px;
}

.custom_select {
    margin-left: 10px;
    display: flex;
    width: 200px;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #eee;
    color: #333333;
}
</style>
