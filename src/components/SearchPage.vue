<template>
<div :class="ThemeStore.isDark ? 'bg-black text-white' : 'bg-white text-black'" class="min-h-screen flex flex-col">
 <div
 :class="ThemeStore.isDark ? 'border-slate-800' : 'border-slate-200'" 
 class="border-b">
       
    <div class="flex items-center p-5 gap-3 shrink-0">
      <button @click="BackHome" :class="ThemeStore.isDark ? 'hover:bg-slate-800 text-white' : 'hover:bg-slate-300 text-black'" class="px-5 font-bold cursor-pointer py-1.5 rounded-lg">
        <i class="fa-solid fa-arrow-left ml-2"></i>Home
      </button>
      <div class="flex gap-3 items-center">
        <div :class="ThemeStore.isDark? 'text-black':'text-white'" class="rounded-2xl hover:bg-emerald-600 cursor-pointer bg-emerald-500/95 px-2.5 py-1 text-2xl font-bold">F</div>
        <div class="text-xl font-medium">ForgeBoard</div>
      </div>
    </div>
    
    <div class="m-4">
    <span> <input
         :class="ThemeStore.isDark ? 'outline-slate-800' : 'outline-slate-200'" 
         v-model="SearchBar"
        type="text" class="w-full py-4 md:py-5 rounded-xl font-medium  outline-3  focus:outline-emerald-500  focus:outline-3 p-5" placeholder="Search repositories.."></span>
       <span>
            <button
            :class="ThemeStore.isDark? ' text-slate-600':' text-slate-400'"
            class="py-1.5 md:py-2 z-50 mt-3 absolute right-10 px-5 rounded-lg text-md md:text-lg p-4 font-medium "><i class="fa-solid fa-magnifying-glass"></i></button>
        </span> 
    </div>
 </div><br>
 <section class="m-5  ">
<div
        :class="ThemeStore.isDark ? ' bg-slate-900 text-slate-600' : '  bg-slate-200 text-slate-500'" 
class="flex rounded-lg py-2 px-5 text-sm w-60 m-5 justify-around ">
<button class="">Repositories</button>
<button class="">Good First Issue</button>
</div><br>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
    
<div v-for="item in filterArray" class="hover:border-emerald-500 transition-border duration-400  rounded-xl border-2" :class="ThemeStore.isDark ? 'border-slate-800' : 'border-slate-300'" >
    <div  class="m-3">
      
         <div class="flex justify-between">
           <div class="flex items-center gap-2 `">
             <span><img class="h-6" :src="item.image" alt=""></span>
            <span><h1 class="font-medium hover:underline">{{ item.title }}</h1></span>
           </div>
           <div @click="BookMarkbtn(item.id)" class="cursor-pointer">
<i class="fa-regular fa-bookmark"></i>
           </div>
        </div><br>
        <div class="">
            <span class="text-xs">{{ item.discreption }}</span><br>
            <div class="flex gap-2 mt-2 text-emerald-500">
                <h1 class="text-xs bg-emerald-500/10 px-2 py-1 rounded-lg">frontend</h1>
                 <h1 class="text-xs bg-emerald-500/10 px-2 py-1 rounded-lg">Javascript</h1>
                  <h1 class="text-xs bg-emerald-500/10 rounded-lg px-2 py-1">library</h1>
            </div><br>
         <span class="flex justify-between font-medium">
               <h1 :class="{
  'text-yellow-600': item.language === 'JavaScript',
  'text-blue-500': item.language === 'TypeScript',
  'text-purple-500': item.language === 'Jupyter Notebook',
 
}">{{ item.language }}</h1>
               <h1> <a target="_blank" :href="item.action"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h1>
         </span>
        </div>
   
    </div>
</div><br>
</div>
 </section>
</div>
</template>
<script setup>
import { useThemeStore } from '../Store';
import { router } from '../Router';
import { Search } from 'lucide-vue-next';
import { computed, ref } from 'vue';
const ThemeStore=useThemeStore()
function BackHome(){
    router.push('/')
}

const RepositoriesArrays=[
    {
    id: 1,
    image: "https://logos-world.net/wp-content/uploads/2021/11/Meta-Emblem.png",
    title: "facebook/react",
    discreption: "The library for web and native user interfaces.",
    language: "JavaScript",
    action: "https://github.com/facebook/react"
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/32120805?s=200&v=4",
    title: "typescript-cheatsheets/react",
    discreption: "Cheatsheets for experienced React developers getting started with TypeScript.",
    language: "JavaScript",
    action: "https://github.com/discountry/react"
  },
  {
    id: 3,
    image: "https://avatars.githubusercontent.com/u/6861120?s=200&v=4",
    title: "duxianwei520/react",
    discreption: "React + webpack + redux + ant design + axios + less 企业级后台管理框架",
    language: "JavaScript",
    action: "https://github.com/discountry/react"
  },
  {
    id: 4,
    image: "https://avatars.githubusercontent.com/u/29303920?s=200&v=4",
    title: "primer/react",
    discreption: "An implementation of GitHub's Primer Design System using React.",
    language: "TypeScript",
    action: "https://github.com/primer/react"
  },
  {
    id: 5,
    image: "https://avatars.githubusercontent.com/u/18629427?s=200&v=4",
    title: "discountr/react",
    discreption: "React docs in Chinese | React 中文文档翻译",
    language: "JavaScript",
    action: "https://github.com/discountry/react"
  },
  {
    id: 6,
    image: "https://avatars.githubusercontent.com/u/12681305?s=200&v=4",
    title: "ysymyth/ReAct",
    discreption: "ICLR 2023 ReAct: Synergizing Reasoning and Acting in Language Models",
    language: "Jupyter Notebook",
    action: "https://github.com/discountry/react"
  },
  {
    id: 7,
    image: "https://avatars.githubusercontent.com/u/10639145?s=200&v=4",
    title: "react-redux-ant-es6/react",
    discreption: "基于React的企业后台管理开发框架",
    language: "JavaScript",
    action: "https://github.com/primer/react"
  },
  {
    id: 8,
    image: "https://avatars.githubusercontent.com/u/1092013?s=200&v=4",
    title: "HackYourFuture/React",
    discreption: "React.js: Building dynamic UIs - HackYourFuture module material",
    language: "JavaScript",
    action: "https://github.com/primer/react"
  },
  {
    id: 9,
    image: "https://avatars.githubusercontent.com/u/33073759?s=200&v=4",
    title: "Cathy0807/react",
    discreption: "京东首页构建",
    language: "JavaScript",
    action: "https://github.com/duxianwei520/react"
  },
  {
    id: 10,
    image: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
    title: "vercel/next.js",
    discreption: "The React Framework",
    language: "JavaScript",
    action: "https://github.com/duxianwei520/react"
  },
  {
    id: 11,
    image: "https://avatars.githubusercontent.com/u/521408?s=200&v=4",
    title: "xqlapt/React",
    discreption: "React学习",
    language: "JavaScript",
    action: "https://github.com/typescript-cheatsheets/react"
  },
  {
    id: 12,
    image: "https://avatars.githubusercontent.com/u/593229?s=200&v=4",
    title: "formio/Vue",
    discreption: "JSON powered forms for vue.js",
    language: "TypeScript",
    action: "https://github.com/typescript-cheatsheets/react"
  }
]
function BookMarkbtn(id){
    console.log(id)
}
const SearchBar=ref("")
const filterArray=computed(()=>{
  return RepositoriesArrays.filter(items=>{
   return items.title.toLocaleLowerCase().includes(SearchBar.value.toLocaleLowerCase())
  })
})
</script>