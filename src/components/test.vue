<template>
    <div class="w-full h-full flex justify-center items-center">
        <h1 ref="typewriter" class="text-4xl font-bold">{{ currentWord }}</h1>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    setup() {
        const words = [
            "Hello, World!",
            "Welcome to my website!",
            "This is a typewriter effect.",
        ];
        let i = 0;
        let j = 0;
        const currentWord = ref(words[i]);
        let isDeleting = false;

        function type() {
            const typewriter = document.getElementById("typewriter");
            if (isDeleting) {
                typewriter.textContent = currentWord.value.substring(0, j - 1);
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            } else {
                typewriter.textContent = currentWord.value.substring(0, j + 1);
                j++;
                if (j === currentWord.value.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 100);
        }

        onMounted(type);

        return {
            currentWord,
        };
    },
};
</script>

<style>
/* Add your styles here */
</style>
