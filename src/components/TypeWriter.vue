<template>
    <div>
        <h1 class="text-sm font-bold">{{ currentWord }}<i class="text-red-500">|</i></h1>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";

const words = reactive([
    "Hello, World!",
    "Welcome to my website!",
    "This is a typewriter effect.",
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
            isDeleting.value = true;
        }
    }
    setTimeout(type, 200);
}

type();
</script>

<style scoped></style>
