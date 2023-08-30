<template>
    <div class="navbar bg-base-300 flex-wrap min-h-[auto]">
        <div class="flex-1">
            <font-awesome-icon class="w-8 h-8 mr-10" icon="fa-solid fa-user-secret" />
            <ul class="flex flex-wrap gap-4">
                <li>
                    <RouterLink to="/">Главная</RouterLink>
                </li>
                <li>
                    <RouterLink to="/universities"
                        >Список университетов</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/modulemapping"
                        >Подобрать мой универ</RouterLink
                    >
                </li>
            </ul>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input
                    type="text"
                    placeholder="Search"
                    class="input input-bordered w-24 md:w-auto" />
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="../assets/images/stock/cat.png" />
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
