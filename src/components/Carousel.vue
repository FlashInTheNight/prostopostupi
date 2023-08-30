<template>
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="false"
        :pagination="{
            clickable: true,
        }"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper">
        <swiper-slide
            ><img
                class="w-full"
                src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                class="w-full"
                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                class="w-full"
                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                class="w-full"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
        /></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade, Navigation, Pagination],
        };
    },
};
</script>
