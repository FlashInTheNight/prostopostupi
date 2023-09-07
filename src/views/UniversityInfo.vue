<template>
  <div class="container mx-auto py-3">
    <h2 class="uppercase mb-3 text-lg">описание университета</h2>
    <div class="flex flex-wrap gap-6">
      <div class="rounded-sm h-48 overflow-hidden">
        <Carousel />
      </div>
      <div id="uniInfo" class="px-1">
        <ul>
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-house-chimney" /> Город: {{ uniData.location }}
          </li>
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-star" /> Рейтинг: {{ uniData.rating === undefined
            ? 'Недостаточно данных' : uniData.rating }}</li>
          <li><font-awesome-icon class="text-slate-50" icon="fa-solid fa-globe" /> Cайт: <a class="link"
              href="https://example.com/">https://example.com/</a></li>
          <li>
            <font-awesome-icon class="text-slate-50" icon="fa-solid fa-comments" />
            соц. сети:
            <p class="inline-flex gap-2">
              <a href="#"><font-awesome-icon icon="fa-brands fa-vk" /></a>
              <a href="#"><font-awesome-icon icon="fa-brands fa-telegram" /></a>
            </p>
          </li>
        </ul>
        <h3>Описание</h3>
        <hr>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quis eligendi dolor, maiores numquam
          dignissimos quisquam nam natus. A nemo illo rerum neque. Expedita deleniti tenetur eius delectus, tempore
          debitis?
          Eaque, excepturi quos laudantium ipsum ea, atque vero quasi fugiat culpa tenetur odit rem est consequuntur?
          Minima neque fuga aperiam magni, quia, nesciunt recusandae maiores voluptas consequuntur maxime veritatis quas?
          Tempora placeat possimus numquam odit mollitia repellat! Nulla dignissimos harum aliquam.

        </p>
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