<template>
    <div>
        <h1 class="text-xl md:text-3xl font-bold text-accent">{{ currentWord }}<i class="animate-pulse">|</i></h1>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const words = reactive([
    "В любой город",
    "На любую специальность",
]);
let i = ref(0);
let j = ref(0);
let currentWord = ref("");
let isDeleting = ref(false);

function type() {
    currentWord.value = words[i.value];
    if (isDeleting.value) {
        currentWord.value = currentWord.value.substring(0, j.value);
        j.value -= 1;
        if (j.value == 0) {
            isDeleting.value = false;
            i.value++;
            if (i.value == words.length) {
                i.value = 0;
            }
        }
    } else {
        currentWord.value = currentWord.value.substring(0, j.value);
        j.value = j.value + 1;
        if (j.value > words[i.value].length) {
            setTimeout(() => isDeleting.value = true, 1500)
        }
    }
    setTimeout(type, 50);
}

type();
</script>

<style scoped></style>
