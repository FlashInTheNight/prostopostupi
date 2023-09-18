<template>
  <div class="container p-4 mx-auto">
    <ul class="steps w-full mt-5 text-sm">
      <li class="step" :class="{
        'step-accent': currentStep >= 0,
      }">
        Вводные данные
      </li>
      <li class="step" :class="{
        'step-accent': currentStep >= 1,
      }">
        Выбор направления
      </li>
      <li class="step" :class="{
        'step-accent': currentStep === 2,
      }">
        Выдача результата
      </li>
    </ul>
    <div id="step-1" v-if="currentStep === 0">
      <div class="mt-5">
        <div id="ege score" class="form-control w-full max-w-xs mx-auto">
          <label class="label">
            <span class="label-text">Проходной балл ЕГЭ</span>
          </label>
          <input @input="checkMinScore" v-model="minScore" type="number" placeholder="Минимальная сумма 118 баллов"
            class="input input-bordered input-accent-content border-accent-content  w-full max-w-xs placeholder:text-sm" />
          <label v-show="checkedMinScoreField" id="error" class="label">
            <span class="label-text-alt text-red-500">{{
              !minScore
              ? "Это поле обязательно"
              : "минимальное сумма должна составлять как минимум 118 баллов"
            }}</span>
          </label>
        </div>
        <div id="city" class="form-control w-full max-w-xs mx-auto">
          <label class="label">
            <span class="label-text">Желаемый город</span>
          </label>
          <select @change="checkCityValue" v-model="city"
            class="select border-accent-content select-accent-content w-full max-w-xs mx-auto">
            <option value="default" disabled selected>
              Выберите желаемый город
            </option>
            <option>г. Москва</option>
            <option disabled>Санкт-Петербург</option>
            <option disabled>Новосибирск</option>
            <option disabled>Екатеринбург</option>
            <option disabled>Казань</option>
            <option disabled>Нижний Новгород</option>
            <option disabled>Челябинск</option>
            <option disabled>Самара</option>
          </select>
          <label v-show="checkedCityField" id="error" class="label">
            <span class="label-text-alt text-red-500">Выбор города обязателен</span>
          </label>
        </div>
        <div id="city" class="form-control w-full max-w-xs mx-auto">
          <label class="label">
            <span class="label-text">Области обучения</span>
          </label>
          <select @change="checkProfileValue" v-model="profile"
            class="select disabled:text-gray-700 border-accent-content select-accent-content w-full max-w-xs mx-auto">
            <option value="default" disabled selected>
              Выберите области обучения
            </option>
            <option>Технический и технологический</option>
            <option disabled>Дизайн</option>
            <option disabled>Искусство и культура</option>
            <option disabled>Логистика</option>
            <option disabled>Медицина и здравоохранение</option>
            <option disabled>Управление и менеджмент</option>
          </select>
          <label v-show="checkedProfileField" id="error" class="label">
            <span class="label-text-alt text-red-500">Выбор области обучения обязателен</span>
          </label>
        </div>
      </div>
      <button @click="getNextStep" class="btn btn-primary flex text-xs mx-auto mt-5" :class="{
        'bg-error': checkedMinScoreField || checkedCityField || checkedProfileField
      }">
        Следующий шаг
      </button>
    </div>
    <div id="step-2" class="flex flex-col gap-y-4 mt-5 text-center" v-if="currentStep === 1">
      <p class="text-sm text-center italic ">Кликните на желаемые программы обучения</p>
      <div id="Directions list" class="flex flex-wrap gap-y-2 md:gap-2 md:justify-center">
        <div v-for="item in currentDirections" class="form-control w-full md:w-60 md:h-40" :key="item">
          <label class="label justify-center cursor-pointer text-black bg-accent rounded-md flex-1" :class="{
            'bg-primary': checkedDirectons.includes(item),
            'text-white': checkedDirectons.includes(item)
          }">
            <span class="break-words">{{ item }}</span>
            <input type="checkbox" :value="item" v-model="checkedDirectons"
              class="checkbox checkbox-primary invisible w-1 h-1" />
          </label>
        </div>
      </div>
      <div class="flex justify-between">
        <button @click="getStepBack" class="btn btn-primary text-xs">
          Назад
        </button>
        <button :disabled="checkedDirectons.length === 0" @click="getResults" class="btn btn-primary text-xs">
          Показать результаты
        </button>
      </div>
    </div>
    <div id="step-3" v-if="currentStep === 2">
      <div id="cards" class="mt-4 flex flex-wrap gap-4 md:gap-2 justify-center">
        <div id="singleCard" v-for="(vuz, index) in stepThreeResults"
          class="card border border-bg-base-100 card-compact w-[15rem] 2xl:w-72  bg-base-100 shadow-xl mt-4 sm:mt-0"
          :key="vuz">
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
              <router-link :to="`/universityInfo/${vuz.name}`" :vuz="vuz" class="btn btn-primary text-xs">Подробная
                информация</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <button @click="getStepBack" class="btn btn-primary">
          Шаг назад
        </button>
        <button @click="() => (currentStep = 0)" class="btn btn-primary">
          Вернуться в начало
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import universities from "../data/universities.js";

const currentStep = ref(0);
const minScore = ref();
const city = ref("default");
const profile = ref("default");
const stepOneBusket = ref();
const currentDirections = ref(null);
const stepThreeResults = ref([]);
const checkedDirectons = ref([]);

const getCurrentDirections = () => {
  const res = stepOneBusket.value.flatMap(
    ({ direction }) => direction["Технический и технологический"]
  );
  currentDirections.value = [...new Set(res)];
};
const getNextStep = () => {
  if (minScore.value < 118 || !minScore.value) {
    checkedMinScoreField.value = true;
    return;
  } else if (city.value === "default") {
    checkedCityField.value = true;
    return;
  } else if (profile.value === "default") {
    checkedProfileField.value = true;
    return;
  }

  currentStep.value = currentStep.value += 1;
  stepOneBusket.value = universities.filter(
    (i) =>
      i.minScore >= minScore.value &&
      i["profiles"].includes(profile.value) &&
      i["location"] === city.value
  );
  getCurrentDirections();
};

const getResults = () => {
  stepThreeResults.value = [];
  currentStep.value = currentStep.value += 1;

  stepOneBusket.value.forEach((item) => {
    const { direction } = item;
    const currKeys = Object.keys(direction);
    currKeys.forEach((e) => {
      const currArray = direction[e];
      for (let i = 0; i < checkedDirectons.value.length; i++) {
        if (currArray.includes(checkedDirectons.value[i])) {
          stepThreeResults.value.push(item);
          break;
        }
      }
    });
  });
};

const getStepBack = () => currentStep.value--;

// Проверка полей

const checkedMinScoreField: Ref<boolean> = ref(false);
const checkedCityField: Ref<boolean> = ref(false);
const checkedProfileField: Ref<boolean> = ref(false);

const checkCityValue = () =>
  (checkedCityField.value = city.value === "default" ? true : false);
const checkProfileValue = () =>
  (checkedProfileField.value = profile.value === "default" ? true : false);
const checkMinScore = () =>
(checkedMinScoreField.value =
  minScore.value < 118 || !minScore.value ? true : false);

// отлючение кнопки
// const checkedValidInfo = ref(false);
</script>

<style scoped></style>
