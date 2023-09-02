<template>
  <div>
    <div id="hero" class="hero min-h-screen bg-[url('../assets/images/hero-bg.jpg')]">
      <div class="hero-overlay bg-opacity-60">
      </div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md flex flex-col gap-y-4">
          <h1 class="text-3xl md:text-5xl font-bold">Простой сайт для простого поступления</h1>
          <TypeWriter />
          <div class="mt-16 flex flex-wrap justify-center gap-4">
            <RouterLink class="btn btn-primary text-xs w-60 md:w-auto" to="/universities">К списку университетов
            </RouterLink>
            <RouterLink class="btn btn-primary text-xs w-60 md:w-auto" to="/modulemapping">Подобрать университет
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <section class="container mt-20 mx-auto flex flex-wrap-reverse gap-y-12 xl:gap-2 2xl:gap-x-14 justify-around xl:justify-center">
      <div id="pics" class=" max-w-md lg:max-w-none grid grid-cols-2 grid-rows-2 lg:grid-rows-[minmax(0,_1fr)_13rem] 2xl:grid-rows-[minmax(0,_21rem)_13rem] items-center gap-5 md:gap-4 lg:mt-12 2xl:mt-0">
        <div data-aos="fade-right" class="h-48 lg:h-72 2xl:h-[21rem] w-32 lg:w-48 2xl:w-56 row-span-2 justify-self-end mb-20">
          <img class="rounded-lg" src="../assets/images/students1.jpg" alt="test" />
        </div>
        <div data-aos="fade-down" class="h-48 lg:h-72 2xl:h-[21rem] w-32 lg:w-48 2xl:w-56 mt-auto">
          <img class="rounded-lg" src="../assets/images/students2.jpg" alt="test" />
        </div>
        <div data-aos="fade-up" class="h-48 lg:h-72 2xl:h-[21rem] w-32 lg:w-48 2xl:w-56 mb-auto">
          <img class="rounded-lg" src="../assets/images/students3.jpg" alt="test" />
        </div>
      </div>
      <div class="flex-1 max-w-xs 2xl:max-w-lg px-1">
        <h2 class="text-center uppercase font-bold text-xl mb-3 2xl:text-3xl">Наша цель</h2>
        <p class="text-center mb-5 2xl:mb-16 2xl:text-xl">
          Наша команда профессионалов будет вам помочь найти идеальный вуз для каждого студента. Мы знаем
          все о том, что нужно учитывать при выборе университета. Мы готовы помочь вам выбрать тот вуз, который
          соответствует вашим требованиям и
          желаниям.
        </p>
        <ul data-aos="flip-right" class="flex gap-3 2xl:gap-11 flex-wrap md:justify-center">
          <li class="bg-accent pl-10 2xl:pl-2.5 md:pl-5 rounded-md shadow w-full md:w-64 2xl:w-56 flex gap-x-3 items-center h-14 2xl:h-16">
            <font-awesome-icon class="w-6 h-6" icon="fa-solid fa-circle-exclamation" />
            <p>Универсальный портал</p>
          </li>
          <li class="bg-accent pl-10 2xl:px-2.5 md:pl-5 rounded-md shadow w-full md:w-64 2xl:w-56 flex gap-x-3 items-center h-14 2xl:h-16">
            <font-awesome-icon class="w-6 h-6" icon="fa-solid fa-sliders" />
            <p>Подбор университета</p>
          </li>
          <li class="bg-accent pl-10 2xl:pl-2.5 md:pl-5 rounded-md shadow w-full md:w-64 2xl:w-56 flex gap-x-3 items-center h-14 2xl:h-16">
            <font-awesome-icon class="w-6 h-6" icon="fa-solid fa-comments" />
            <p>Сообщество</p>
          </li>
          <li class="bg-accent pl-10 2xl:pl-2.5 md:pl-5 rounded-md shadow w-full md:w-64 2xl:w-56 flex gap-x-3 items-center h-14 2xl:h-16">
            <font-awesome-icon class="w-6 h-6" icon="fa-solid fa-universal-access" />
            <p>Удобно для пользователя</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="md:mt-20 -mt-14 lg:mt-0">
      <h2 class="text-center px-2 uppercase font-bold text-xl 2xl:text-3xl mb-3">Where do you want to go?</h2>
      <Vue3Marquee class="bg-black p-4 py-10" :pauseOnHover="true" :duration="110">
        <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
        <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
        <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
        <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
        <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
      </Vue3Marquee>
    </section>
  </div>
</template>

<script setup lang="ts">
import TypeWriter from "@/components/TypeWriter.vue";
import Carousel from "@/components/Carousel.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
