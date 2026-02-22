<template>
  <div :class="ThemeStore.isDark ?  'bg-black/93 text-white' :'bg-white text-black'" 
       class="border-b border-slate-500 transtion-color duration-300
         shadow-b shadow-slate-700  sticky top-0 z-50 fullBody">
       
    <header class="" >
      <nav class="p-7 flex-col md:flex-row flex gap-2  justify-between">
        <div class="flex justify-between">
        <div  class="flex gap-3 items-center">
          <div :class="ThemeStore.isDark? ' text-black':' text-white'" class="rounded-2xl hover:bg-emerald-600 cursor-pointer bg-emerald-500/95 px-2.5 py-1 text-2xl font-bold">
            F
          </div>
          <div class="text-xl font-medium">ForgeBoard</div></div>
          <div class=" md:hidden items-center flex">
    <button   :class="ThemeStore.isDark ?  'hover:bg-slate-800' :'hover:bg-slate-200'"  @click="HeaderTogglebtn" class=" px-3 rounded-lg py-1.5"><i :class="HeaderToggleMode?'fa-solid fa-xmark':'fa-solid fa-bars'"></i></button>
</div>
        </div>
       
        <div v-if="HeaderToggleMode" class="flex gap-6  z-50 md:z-0  flex-col md:flex-row items-center">
         <span class="text-center  w-full md:w-auto "><button @click="goTo('Features')" class="cursor-pointer">Features</button></span>
          <span  class=" text-center w-full md:w-auto "><button @click="goTo('work')" class="cursor-pointer">How It Works</button></span>
          <span  class=" text-center w-full  md:w-auto">    <button @click="goTo('community')" class="cursor-pointer">Community</button></span>
        </div>
        <div v-if="HeaderToggleMode" class="flex gap-2 mt-2 md:mt-0 z-50 md:z-0 flex-col md:flex-row items-center">
          <button v-if="LocalStorageCheck===false"
           :class="ThemeStore.isDark ?  'hover:bg-slate-800' :'hover:bg-slate-200'" 
          @click="LoginPagebtn"  class="px-4 cursor-pointer py-2 md:py-2 w-full md:w-auto  rounded-xl">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign in
          </button>
          <button v-if="LocalStorageCheck" @click="DashBoardbtn" :class="ThemeStore.isDark? ' text-black':' text-white'" class="px-4 cursor-pointer   py-2 md:py-2 w-full md:w-auto bg-emerald-500 font-medium hover:bg-emerald-600 rounded-xl">
         DashBoard
          </button>
           <button v-else  @click="SearchPage" :class="ThemeStore.isDark? ' text-black':' text-white'" class="px-4 cursor-pointer   py-2 md:py-2 w-full md:w-auto bg-emerald-500 font-medium hover:bg-emerald-600 rounded-xl">
        Get Started
          </button>
          <button
           :class="ThemeStore.isDark ?  'hover:bg-slate-800' :'hover:bg-slate-200'" 
          @click="toggleMode" class="px-2  py-2 md:py-1.5 cursor-pointer w-full md:w-auto rounded-xl ">
            {{ ThemeStore.isDark ? '☀️' : '🌙' }}
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useThemeStore } from '../Store'
import {router} from '../Router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()

const goTo = async (id) => {

  if (route.path !== '/') {
    await router.push('/')
  }

  // thora delay taake component mount ho jaye
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, 200)
}
const ThemeStore=useThemeStore()
function toggleMode() {
    ThemeStore.setTheme(isDark.value)
 isDark.value = !isDark.value
 
}

const HeaderToggleMode=ref(false)
const isDark = ref(false)
function screenCheck(){
  
  HeaderToggleMode.value = window.innerWidth >= 758
}


onMounted(()=>{
  screenCheck()
  window.addEventListener('resize',screenCheck)
})
onUnmounted(()=>{
      window.removeEventListener('resize',screenCheck)
})

function HeaderTogglebtn(){
    HeaderToggleMode.value=!HeaderToggleMode.value
}
function LoginPagebtn(){
  router.push('/login')
}
function SearchPage(){
  router.push('/Search')
}
const LocalStorageCheck=ref(false)
if(localStorage.length>0){
  LocalStorageCheck.value=true
}
function DashBoardbtn(){
  router.push('/Dashboard')
}
</script>
