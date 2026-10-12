<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const isHomePage = () => route.path == "/";
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="bg-gray-800 flex text-3xl text-amber-50 items-center p-5">
      <router-link to="/"
        ><h1 class="font-extrabold italic text-5xl">DnH</h1></router-link
      >
      <div class="grow flex justify-center space-x-8">
        <router-link to="/dice" class="hover:text-gray-300">Dice</router-link>
        <router-link to="/players" class="hover:text-gray-300"
          >Players</router-link
        >
        <router-link to="/encounters" class="hover:text-gray-300"
          >Encounters</router-link
        >
        <router-link to="/notes" class="hover:text-gray-300">Notes</router-link>
      </div>
      <div class="justify-end text-xl space-x-5 flex">
        <router-link to="/login">Log in</router-link>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div
      v-if="isHomePage()"
      class="flex flex-col items-center bg-amber-50 text-gray-800 h-full p-5"
    >
      <h1 class="text-3xl font-extrabold p-10 mt-40">
        Welcome to Dungeons and Helpers app.
      </h1>
      <p class="text-xl">
        With this app you will be able to control and mantain your Dungeons and
        Dragons campaigns as a
      </p>
      <h1 class="text-xl italic font-bold">-Dungeon Master-</h1>
    </div>
  </div>
</template>
