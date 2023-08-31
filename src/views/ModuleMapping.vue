<template>
    <div class="container p-4 mx-auto">
        <ul class="steps w-full mt-5 text-sm">
            <li
                class="step"
                :class="{
                    'step-primary': currentStep >= 0,
                }">
                Вводные данные
            </li>
            <li
                class="step"
                :class="{
                    'step-primary': currentStep >= 1,
                }">
                Выбор направления
            </li>
            <li
                class="step"
                :class="{
                    'step-primary': currentStep === 2,
                }">
                Выдача результата
            </li>
        </ul>
        <div id="step-1" v-if="currentStep === 0">
            <div class="mt-5">
                <div
                    id="ege score"
                    class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Проходной балл ЕГЭ</span>
                    </label>
                    <input
                        @input="checkMinScore"
                        v-model="minScore"
                        type="number"
                        placeholder="Минимальная сумма 118 баллов"
                        class="input input-bordered input-primary w-full max-w-xs placeholder:text-sm" />
                    <label
                        v-show="checkedMinScoreField"
                        id="error"
                        class="label">
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
                    <select
                        @change="checkCityValue"
                        v-model="city"
                        class="select select-secondary w-full max-w-xs mx-auto">
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
                        <span class="label-text-alt text-red-500"
                            >Выбор города обязателен</span
                        >
                    </label>
                </div>
                <div id="city" class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Области обучения</span>
                    </label>
                    <select
                        @change="checkProfileValue"
                        v-model="profile"
                        class="select select-secondary w-full max-w-xs mx-auto">
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
                    <label
                        v-show="checkedProfileField"
                        id="error"
                        class="label">
                        <span class="label-text-alt text-red-500"
                            >Выбор области обучения обязателен</span
                        >
                    </label>
                </div>
            </div>
            <button
                @click="getNextStep"
                class="btn btn-accent flex ml-auto mt-5"
                :class="{
                  'bg-error': checkedMinScoreField || checkedCityField || checkedProfileField
                }">
                Следующий шаг
            </button>
        </div>
        <div id="step-2" v-if="currentStep === 1">
            <div class="flex flex-wrap gap-6">
                <div
                    v-for="item in currentDirections"
                    class="form-control"
                    :key="item">
                    <label
                        class="label cursor-pointer w-56 h-56 bg-accent"
                        :class="{
                            'bg-red-500': checkedDirectons.includes(item),
                        }">
                        <div>
                            <span>{{ item }}</span>
                        </div>
                        <input
                            type="checkbox"
                            :value="item"
                            v-model="checkedDirectons"
                            class="checkbox checkbox-primary invisible" />
                    </label>
                </div>
            </div>
            <div class="flex justify-between">
                <button
                    @click="getStepBack"
                    class="btn btn-active btn-secondary">
                    Шаг Назад
                </button>
                <button
                    :disabled="checkedDirectons.length === 0"
                    @click="getResults"
                    class="btn btn-active btn-secondary">
                    Показать результаты
                </button>
            </div>
            {{ checkedDirectons }}
            <hr />
            <hr />
            {{ stepThreeResults }}
        </div>
        <div id="step-3" v-if="currentStep === 2">
            <div class="flex flex-wrap gap-6">
                <div
                    class="card w-96 bg-base-100 shadow-xl"
                    v-for="item in stepThreeResults">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.location }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">
                                {{ item.minScore }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <button @click="getStepBack" class="btn glass">
                    Шаг назад
                </button>
                <button @click="() => (currentStep = 0)" class="btn glass">
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
