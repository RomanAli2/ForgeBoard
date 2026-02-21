<template>
 <div :class="ThemeStore.isDark ? 'bg-black text-white' : 'bg-white text-black'" class="transition-colors duration-300 h-screen flex items-center justify-center">
<div class="text-center font-bold">
    <h1 class="text-5xl">404</h1>
    <h3 class="text-2xl">Page not found</h3>
    <button @click="BackHomebtn" class="bg-emerald-500 px-5 py-2 hover:bg-emerald-600 cursor-pointer mt-2  rounded-lg"><i class="fa-solid fa-arrow-left mr-2"></i>Back Home</button>
</div>
 </div>
</template>
<script setup>
import { router } from '../../Router';
import { useThemeStore } from '../../Store';
const ThemeStore=useThemeStore()
function BackHomebtn(){
    router.push('/')
}
</script>