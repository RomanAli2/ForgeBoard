<template>
<div :class="ThemeStore.isDark ? 'bg-black/90 text-white' : 'bg-slate-100 text-black'" class="h-screen transition-colors w-60 md:w-80 duration-300">
<div class="w-60 md:w-80 h-screen flex flex-col justify-between">
        <div class="flex flex-col gap-9 m-5">
             <div @click="HomePagebtn"  class="flex gap-3 cursor-pointer items-center">
          <div :class="ThemeStore.isDark? ' text-black':' text-white'" class="rounded-2xl hover:bg-emerald-600 cursor-pointer bg-emerald-500/95 px-2.5 py-1 text-2xl font-bold">
            F
          </div>
          <div class="text-xl font-medium">ForgeBoard</div>
        </div>
       
          
                <div class="text-slate-400 text-lg font-bold">Navigation</div>
            <div class="flex text-md md:text-lg flex-col w-full gap-4 items-center"> 
                <RouterLink class="w-full   rounded-lg p-3 flex items-center  py-3 font-medium" :exact-active-class="ThemeStore.isDark ?'bg-slate-800':'bg-white'" to="/Dashboard/">
                   <i class="fa-solid fa-border-all mr-2"></i> Overview
                </RouterLink>
                 <RouterLink  class="w-full rounded-lg p-3  py-3 flex  items-center font-medium" :active-class="ThemeStore.isDark?'bg-slate-800':'bg-white'" to="/Dashboard/Contribution">
               <i class="fa-solid fa-hexagon-nodes mr-2"></i>  Contribution
                </RouterLink>
                <RouterLink class="w-full  rounded-lg p-3  py-3  flex items-center font-medium" :active-class="ThemeStore.isDark?'bg-slate-800':'bg-white'" to="/Dashboard/BookMarks">
                   <i class="fa-regular fa-bookmark mr-2"></i> All  Bookmarks
                </RouterLink>
                <RouterLink class="w-full rounded-lg p-3  py-3 flex  items-center font-medium" :active-class="ThemeStore.isDark?'bg-slate-800':'bg-white'" to="/Dashboard/Repositories">
                <i class="fa-solid fa-diagram-project mr-2"></i> Repositories
                </RouterLink>
            </div>
           
        </div>
          
            <div class=" m-8">
              <span class="m-5">
                  <h1 class="text-md md:text-xl font-medium">{{ UserName }}</h1>
                <p class="text-xs md:text-sm">{{ UserEmails }}</p><br>
                <button @click="SignOutButton" :class="ThemeStore.isDark ? 'border-slate-700 hover:bg-slate-800' : 'hover:bg-slate-200 border-slate-300'" class="px-3 border py-1 rounded-lg cursor-pointer"> <i class="fa-solid fa-arrow-right-to-bracket "></i> Sign Out</button>
              </span>
            </div>
        </div>
    </div>

</template>
<script setup>
import { router } from '../../Router';
import { useThemeStore } from '../../Store';
const ThemeStore=useThemeStore()
function HomePagebtn(){
    router.push('/')
}
const UserName=localStorage.getItem('UserNameEntered')
const UserEmails=localStorage.getItem('UserEmail')
function SignOutButton(){
    localStorage.removeItem('UserNameEntered')
    localStorage.removeItem('UserEmail')
    router.push('/')

}
</script>