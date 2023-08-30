<template>
    <div>
        <div class="flex h-screen bg-slate-500">
            <div class="w-[50%]">
                <p>Explore University of</p>
                <TypeWriter />
                <button class="btn">button 1</button>
                <button class="btn btn-primary">button 1</button>
            </div>
            <div class="w-[50%] max-h-96">
                <Carousel class="h-full" />
            </div>
        </div>

        <!-- what we do -->
        <div class="container flex">
            <div
                id="pics"
                class="w-[60%] grid grid-cols-2 grid-rows-2 items-center gap-5">
                <div
                    data-aos="fade-right"
                    class="h-56 w-32 row-span-2 justify-self-end">
                    <img
                        src="../assets/images/stock/carousel/pic-1.jpg"
                        alt="test" />
                </div>
                <div data-aos="fade-down" class="h-56 w-32">
                    <img
                        src="../assets/images/stock/carousel/pic-2.png"
                        alt="test" />
                </div>
                <div data-aos="fade-up" class="h-56 w-32">
                    <img
                        src="../assets/images/stock/carousel/pic-3.jpg"
                        alt="test" />
                </div>
            </div>
            <div class="w-[40%]">
                <p>WHAT WE DO</p>
                <p>Our mission is to simplify the exchange process.</p>
                <p>
                    As students ourselves, we understand how painful it is to
                    collate information that is scattered everywhere. With
                    SGXchange, your one-stop portal for university exchange, all
                    the information is now easily accessible
                </p>
                <ul data-aos="zoom-in-up" class="flex flex-wrap">
                    <li>
                        <font-awesome-icon
                            class="w-4 h-4"
                            icon="fa-solid fa-user-secret" />
                        <p>One-stop Portal</p>
                    </li>
                    <li>
                        <font-awesome-icon
                            class="w-4 h-4"
                            icon="fa-solid fa-user-secret" />
                        <p>Module Mapping</p>
                    </li>
                    <li>
                        <font-awesome-icon
                            class="w-4 h-4"
                            icon="fa-solid fa-user-secret" />
                        <p>Community</p>
                    </li>
                    <li>
                        <font-awesome-icon
                            class="w-4 h-4"
                            icon="fa-solid fa-user-secret" />
                        <p>User Friendly</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- // what we do -->

        <section>
            <p class="text-6xl">Where do you want to go?</p>
            <Vue3Marquee class="bg-black p-4 py-10" :pauseOnHover="true" :duration="110">
                <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
                <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
                <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
                <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
                <img class="mx-5" height="200" width="300" src="../assets/images/stock/cat.png" />
            </Vue3Marquee>
        </section>
    </div>
</template>

<script setup lang="ts">
import TypeWriter from "@/components/TypeWriter.vue";
import Carousel from "@/components/Carousel.vue";
</script>

<style scoped></style>
