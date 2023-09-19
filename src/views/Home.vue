<template>
  <div>
    <div id="hero" class="hero min-h-screen bg-[url('../assets/images/hero-bg.jpg')]">
      <div class="hero-overlay bg-opacity-60">
      </div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md flex flex-col gap-y-4">
          <h1 class="text-3xl md:text-5xl font-bold text-slate-200 ">Простой сайт для простого поступления</h1>
          <TypeWriter />
          <div class="mt-16 flex flex-wrap justify-center gap-4">
            <RouterLink class="btn btn-neutral glass text-xs w-60 md:w-auto" to="/universities">К списку университетов
            </RouterLink>
            <RouterLink class="btn btn-neutral glass text-xs w-60 md:w-auto" to="/modulemapping">Подобрать университет
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <About />

    <section class="md:mt-20 -mt-14 lg:mt-0">
      <h2 class="text-center px-2 uppercase font-bold text-xl 2xl:text-3xl mb-7">Топ недели</h2>
      <Vue3Marquee class="bg-black" :pauseOnHover="true" :duration="50">
        <router-link to="/universityInfo/Институт бизнеса и дизайна"
          class="card w-56 2xl:w-80 bg-base-100 shadow-xl my-7 2xl:my-12 mx-3 lg:mx-6 2xl:mx-16 image-full lg:before:h-[14rem] before:hover:opacity-90">
          <figure><img src="@/assets/images/caro-1.jpg" alt="university-1" /></figure>
          <div class="card-body justify-center p-4">
            <h2 class=" card-title justify-center text-center text-lg 2xl:text-2xl">Институт бизнеса и дизайна</h2>
          </div>
        </router-link>
        <router-link to="/universityInfo/Институт экономики и антикризисного управления"
          class="card w-56 2xl:w-80 bg-base-100 shadow-xl my-7 2xl:my-12 mx-3 lg:mx-6 2xl:mx-16 image-full lg:before:h-[14rem] before:hover:opacity-90">
          <figure><img src="@/assets/images/caro-2.jpg" alt="university-2" /></figure>
          <div class="card-body justify-center p-4">
            <h2 class=" card-title justify-center text-center text-lg 2xl:text-2xl">Институт экономики и антикризисного
              управления</h2>
          </div>
        </router-link>
        <router-link to="/universityInfo/Московский финансово-юридический университет"
          class="card w-56 2xl:w-80 bg-base-100 shadow-xl my-7 2xl:my-12 mx-3 lg:mx-6 2xl:mx-16 image-full lg:before:h-[14rem] before:hover:opacity-90">
          <figure><img src="@/assets/images/caro-2.jpg" alt="university-3" /></figure>
          <div class="card-body justify-center p-4">
            <h2 class=" card-title justify-center text-center text-lg 2xl:text-2xl">Московский финансово-юридический
              университет</h2>
          </div>
        </router-link>
        <router-link to="/universityInfo/City Business School"
          class="card w-56 2xl:w-80 bg-base-100 shadow-xl my-7 2xl:my-12 mx-3 lg:mx-6 2xl:mx-16 image-full lg:before:h-[14rem] before:hover:opacity-90">
          <figure><img src="@/assets/images/caro-4.jpg" alt="university-4" /></figure>
          <div class="card-body justify-center p-4">
            <h2 class=" card-title justify-center text-center text-lg 2xl:text-2xl">City Business School</h2>
          </div>
        </router-link>
        <router-link to="/universityInfo/Московский финансово-юридический университет"
          class="card w-56 2xl:w-80 bg-base-100 shadow-xl my-7 2xl:my-12 mx-3 lg:mx-6 2xl:mx-16 image-full lg:before:h-[14rem] before:hover:opacity-90">
          <figure><img src="@/assets/images/caro-2.jpg" alt="university-3" /></figure>
          <div class="card-body justify-center p-4">
            <h2 class=" card-title justify-center text-center text-lg 2xl:text-2xl">Московский финансово-юридический
              университет</h2>
          </div>
        </router-link>
      </Vue3Marquee>
    </section>
  </div>
</template>

<script setup lang="ts">
import TypeWriter from "@/components/TypeWriter.vue";
import About from "@/components/About.vue";
import { RouterLink } from "vue-router";

// const marqueePics = [
//   { url: '@/assets/images/caro-1.jpg', name: "Институт бизнеса и дизайна", alt: 'university-1' },
//   { url: '@/assets/images/caro-2.jpg', name: "Институт экономики и антикризисного управления", alt: 'university-2' },
//   { url: '@/assets/images/caro-2.jpg', name: "Московский финансово-юридический университет", alt: 'university-3' },
//   { url: '@/assets/images/caro-4.jpg', name: "City Business School", alt: 'university-4' }
// ];

// const getImageUrl = (name: string) => {
//   return new URL(`${name}`, import.meta.url).href
// }

</script>

<style scoped></style>
