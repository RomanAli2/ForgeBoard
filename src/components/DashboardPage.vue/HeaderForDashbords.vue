<template>
  <div :class="ThemeStore.isDark ?  'bg-black/93 text-white' :'bg-white text-black'" 
       class="border-b border-slate-800 transtion-color duration-300
         shadow-b shadow-slate-800 left-60 md:left-80 right-0  fixed top-0 z-50 ">
   <header class="flex justify-between items-center px-2 m-2 py-4">
    <div class="">
        <h1 class="text-2xl font-bold">{{ Nameuse.PageName }}</h1>
    </div>
    <div class="">
         <button
           :class="ThemeStore.isDark ?  'hover:bg-slate-800' :'hover:bg-slate-200'" 
          @click="toggleMode" class="px-2  py-2 md:py-1.5 cursor-pointer w-full md:w-auto rounded-xl ">
            {{ ThemeStore.isDark ? '☀️' : '🌙' }}
          </button>
    </div>
   </header>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useThemeStore } from '../../Store';
const ThemeStore=useThemeStore()
const Nameuse=defineProps(
    {
        PageName:String
    }
)
const isDark=ref(false)
function toggleMode() {
    ThemeStore.setTheme(isDark.value)
 isDark.value = !isDark.value
 
}
</script>
