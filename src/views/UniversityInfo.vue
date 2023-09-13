<template>
  <div class="container mx-auto py-3">
    <h2 class="uppercase mb-3 text-lg ml-2">описание университета</h2>
    <div class="flex flex-wrap-reverse gap-6">
      <div class="rounded-sm h-48 md:h-[22rem] xl:h-[28rem] 2xl:h-[36rem] overflow-hidden">
        <Carousel />
      </div>
      <div id="description" class="px-2 md:px-4 lg:w-[48rem] 2xl:w-[60rem] lg:mx-auto">
        <h3 class="md:text-center uppercase md:text-2xl">Описание</h3>
        <hr class="my-2">
        <p class="max-h-96 lg:text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quis eligendi dolor, maiores numquam
          dignissimos quisquam nam natus. A nemo illo rerum neque. Expedita deleniti tenetur eius delectus, tempore
          debitis?
          Eaque, excepturi quos laudantium ipsum ea, atque vero quasi fugiat culpa tenetur odit rem est consequuntur?
          Minima neque fuga aperiam magni, quia, nesciunt recusandae maiores voluptas consequuntur maxime veritatis
          quas?
          Tempora placeat possimus numquam odit mollitia repellat! Nulla dignissimos harum aliquam.
        </p>
      </div>
      <div id="uniInfo" class="w-full px-2 md:px-4 flex flex-col lg:flex-row gap-6 lg:items-center xl:justify-center">
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
        <iframe class="w-full h-52 md:h-72 lg:basis-[64%]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3336.2787474887573!2d37.527289423877704!3d55.702217211198224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c6435a66743%3A0xfae7174706dad052!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnC7Qki7Qm9C-0LzQvtC90L7RgdC-0LLQsA!5e0!3m2!1sru!2sru!4v1694465486966!5m2!1sru!2sru"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import universities from "../data/universities.js";
import { useRoute } from 'vue-router';
import Carousel from "../components/Carousel.vue"
import { ref, onMounted } from 'vue'

const route = useRoute();
const routeName = route.params.name;

const uniData = universities.filter(e => e.name === routeName)[0];

onMounted(() => window.scrollTo(0,0));
</script>

<style scoped></style>