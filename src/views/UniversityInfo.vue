<template>
  <div class="container mx-auto py-3">
    <h2 class="uppercase mb-3 text-lg ml-2">описание университета</h2>
    <div class="flex flex-wrap-reverse gap-6">
      <div class="rounded-sm h-48 md:h-[22rem] xl:h-[28rem] 2xl:h-[36rem] overflow-hidden">
        <Carousel />
      </div>
      <div id="uniInfo" class="px-2 md:px-4 xl:flex xl:gap-6 xl:justify-center">
        <ul class="flex flex-col gap-2.5 md:gap-3 xl:basis-1/4 2xl:basis-1/5 xl:justify-center">
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-house-chimney" /> <span
              class="font-semibold mr-1">Город:</span> {{ uniData.location }}
          </li>
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-star" /> <span
              class="font-semibold mr-1">Рейтинг:</span> {{ uniData.rating === undefined
                ? 'Недостаточно данных' : uniData.rating }}</li>
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-globe" /> <span
              class="font-semibold mr-1">Cайт:</span> <a class="link" target="_blank"
              href="https://example.com/">https://example.com/</a></li>
          <li class="flex gap-x-[4px] items-center">
            <font-awesome-icon class="text-slate-50" icon="fa-solid fa-comments" />
            <span class="font-semibold mr-1">Cоц. сети:</span>
            <div class="inline-flex gap-2">
              <a target="_blank" href="https://vk.com/"><font-awesome-icon class="w-8 h-8 text-[#4C75A3]"
                  icon="fa-brands fa-vk" /></a>
              <a target="_blank" href="https://web.telegram.org/a/"><font-awesome-icon class="w-8 h-8 text-[#2AABEE]"
                  icon="fa-brands fa-telegram" /></a>
            </div>
          </li>
        </ul>
        <div class="xl:basis-3/5">
          <h3 class="text-end uppercase md:text-2xl xl:text-start">Описание</h3>
          <hr class="my-2">
          <p class="max-h-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quis eligendi dolor, maiores numquam
            dignissimos quisquam nam natus. A nemo illo rerum neque. Expedita deleniti tenetur eius delectus, tempore
            debitis?
            Eaque, excepturi quos laudantium ipsum ea, atque vero quasi fugiat culpa tenetur odit rem est consequuntur?
            Minima neque fuga aperiam magni, quia, nesciunt recusandae maiores voluptas consequuntur maxime veritatis
            quas?
            Tempora placeat possimus numquam odit mollitia repellat! Nulla dignissimos harum aliquam.

          </p>
        </div>
      </div>
    </div>
    <div id="geo">

    </div>
  </div>
</template>

<script setup lang="ts">
import universities from "../data/universities.js";
import { useRoute } from 'vue-router';
import Carousel from "../components/Carousel.vue"

const route = useRoute();
const routeName = route.params.name;

const uniData = universities.filter(e => e.name === routeName)[0];


</script>

<style scoped></style>