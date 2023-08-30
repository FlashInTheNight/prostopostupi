<template>
    <div class="h-screen flex flex-col justify-between">
        <NavBar />
        <RouterView class="flex-1" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";


</script>

<style scoped></style>
