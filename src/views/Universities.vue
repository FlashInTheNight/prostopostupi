<template>
  <div class="container mx-auto py-4">
    <h2 class="uppercase text-xl mb-7 pl-7">Список университетов</h2>
    <!-- divider -->
    <div class="flex flex-col w-full">
      <!-- first content -->
      <div class="navbar gap-3 flex-wrap justify-center  bg-base-300 rounded-box">
        <div class="dropdown dropdown-end">
          упорядочить по:&#x2000;
          <label tabindex="0" class="btn w-28 btn-neutral rounded-btn">{{ btnToggle ? "Городам" : "Профилям" }}</label>
          <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li><button class="disabled:opacity-80 disabled:pointer-events-none" :disabled="btnToggle"
                @click="() => (btnToggle = !btnToggle)">Городам</button></li>
            <li><button class="disabled:opacity-80 disabled:pointer-events-none" :disabled="!btnToggle"
                @click="() => (btnToggle = !btnToggle)">Профилям</button></li>
          </ul>
        </div>

        <div>
          сортировать по:&#x2000;
          <button class="btn btn-neutral w-28 ml-[7px] md:ml-0" @click="sortList">
            {{ sortToggle ? "убыванию" : "возрастанию" }}
          </button>
        </div>

        <input v-model="searchValue" @input="searchElements()" type="text" placeholder="Найти университет"
          class="input input-bordered input-info w-full max-w-2xl xl:max-w-md placeholder:italic" />
      </div>
    </div>
    <div class="divider"></div>
    <!-- tabs -->
    <div class="tabs justify-center">
      <button @click="getAllData" class="tab tab-lifted btn-neutral focus:text-accent-content" :class="{
        'tab-active': counter === -1,
      }">
        Все Университеты
      </button>
      <button v-for="(city, index) in getCurrentTabs" class="tab tab-lifted focus:text-accent-content btn-neutral" :class="{
        'tab-active': index === counter,
      }" :key="city" @click="changeTab(index)">
        {{ city }}
      </button>
    </div>
    <!-- search panel -->
    <!-- Cards -->
    <div id="cards" class="mt-4 flex flex-wrap gap-4 md:gap-2 justify-center">
      <div id="singleCard" v-for="(vuz, index) in pagCards"
        class="card border border-bg-base-100 card-compact w-[15rem] 2xl:w-72  bg-base-100 shadow-xl mt-4 sm:mt-0" :key="vuz">
        <figure>
          <img :src="`https://loremflickr.com/640/360?lock=${index}`" alt="Фотография университета" />
        </figure>
        <div class="card-body justify-between">
          <h2 class="card-title">{{ vuz.name }}</h2>
          <div>
            <p>Город: {{ vuz.location }}</p>
            <p>
              Рейтинг: {{ vuz.rating === undefined ? 'Недостаточно данных' : vuz.rating }}
            </p>
            <div>
              <p class="mb-2">Профили:</p>
              <div class="card-actions">
                <div v-for="profile in vuz.profiles" class="badge h-min badge-accent">{{ profile }}</div>
              </div>
            </div>
          </div>
          <div class="card-actions justify-center mt-4">
            <router-link :to="`/universityInfo/${vuz.name}`" :vuz="vuz" class="btn btn-primary text-xs">Подробная информация</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- pagination -->
    <div class="join flex flex-wrap justify-center mt-3 mb-3">
      <button v-for="(pag, index) in getAllPaginationBtns" @click="paginatedData(index)"
        class="join-item btn-sm hover:bg-slate-600 border border-neutral  disabled:bg-neutral disabled:text-white" :disabled="index === pageNumber" :class="{
          'btn-active': index === pageNumber,
        }" :key="pag">
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import universities from "../data/universities.js";
import { RouterLink } from "vue-router";

// data
const btnToggle = ref(true);
const sortToggle = ref(true);
const counter = ref(0);
const currentCards = ref(null);
const cities = ref();
const profiles = ref();
const searchValue = ref();

// get data
const getCurrentCities = () => {
  currentCards.value = universities.filter(
    (e: object) => e["location"] === cities.value[counter.value]
  );
};
const getCurrentProfiles = () => {
  let currentValue = profiles.value[counter.value];
  currentCards.value = universities.filter((e: object) =>
    e["profiles"].includes(currentValue)
  );
};
const getAllData = () => {
  currentCards.value = universities.filter((e) => e);
  counter.value = -1;
};

// sorts
const sortedProfiles = () => {
  let monoArray = universities.map((e) => e.profiles).flat();
  let result = monoArray.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
  profiles.value = result;
};
const sortedCities = () => {
  let res = [];
  universities.forEach((e: object) => res.push(e["location"]));
  cities.value = [...new Set(res)];
};

const changeTab = (index: number) => {
  counter.value = index;

  if (btnToggle.value) {
    getCurrentCities();
  } else {
    getCurrentProfiles();
  }
};

const getCurrentTabs = computed(() =>
  btnToggle.value ? cities.value : profiles.value
);

const sortList = () => {
  if (sortToggle.value) {
    currentCards.value = currentCards.value.sort(
      (a, b) => a["rating"] - b["rating"]
    );
  } else {
    currentCards.value = currentCards.value.sort(
      (a, b) => b["rating"] - a["rating"]
    );
  }
  sortToggle.value = !sortToggle.value;
  paginatedData();
};

const searchElements = () => {
  currentCards.value = universities.filter((e) =>
    e["name"].toLowerCase().includes(searchValue.value)
  );
};

// pagination
const getAllPaginationBtns = computed(() =>
  currentCards.value === null
    ? ""
    : Math.ceil(currentCards.value.length / size.value)
);

const paginatedData = (index = 0) => {
  pageNumber.value = index;

  const start = pageNumber.value * size.value;
  const end = start + size.value;

  pagCards.value = currentCards.value.slice(start, end);
};

const pageNumber = ref(0);
const size = ref(10);
const pagCards = ref();

watch(
  () => currentCards.value,
  () => {
    paginatedData();
  }
);

onMounted(() => sortedCities());
onMounted(() => sortedProfiles());
onMounted(() => getAllData());
onMounted(() => paginatedData());
</script>

<style scoped></style>
