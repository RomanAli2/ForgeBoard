<template>
  <div :class="ThemeStore.isDark ? 'bg-black text-white' : 'bg-white text-black'" class="transition-colors duration-300">
    
    <section class="min-h-screen flex flex-col items-center justify-center px-6">
      <div 
        :class="[
          'transition-all duration-1000 ease-out transform',
          show ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        ]"
        class="text-center"
      >
        <span class="inline-block px-4 py-1.5 border border-slate-700 rounded-full text-sm font-medium mb-8">
          ✨ Open Source • Community Driven
        </span>

        <h1 class="text-4xl md:text-7xl font-bold tracking-tight mb-6">
          Connect with <span class="text-emerald-500 bg-clip-text">Open Source</span><br>Opportunities
        </h1>
        
        <p class="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Discover the perfect projects to contribute to, grow your skills, and build 
          your open source portfolio with ContribForge.
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button :class="ThemeStore.isDark ? 'text-black' : 'text-white'"
          @click="SearchPage" 
            class="px-8 py-4 cursor-pointer font-semibold rounded-xl 
bg-emerald-500 hover:bg-emerald-600 
shadow-lg shadow-emerald-500/30 
hover:shadow-emerald-400/60
hover:ring-2 hover:ring-emerald-300/50
hover:scale-[1.02]
transition-all hover:-translate-y-1 duration-300 
w-full md:w-auto hover:shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_40px_rgba(16,185,129,0.4)]">
            Start Contributing <i class="fa-solid fa-arrow-right ml-2"></i>
          </button>
          <button  @click="SearchPage"  class="px-8 py-4 cursor-pointer rounded-xl font-semibold bg-transparent border border-slate-300 hover:border-emerald-500 transition-all hover:-translate-y-1 w-full md:w-auto">
            Explore Projects
          </button>
        </div>

        <div class="flex gap-12 md:gap-24 justify-center mt-20">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">10K+</h2>
            <p class="text-slate-500">Repositories</p>
          </div>
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">50K+</h2>
            <p class="text-slate-500">Issues</p>
          </div>
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold">30K+</h2>
            <p class="text-slate-500">Contributors</p>
          </div>
        </div>
      </div>
    </section>

    <section id="Features" class="py-24 px-6"><br><br>
      <div class="max-w-7xl mx-auto text-center mb-16">
        <br>
        <h2 class="text-3xl md:text-5xl font-bold mb-4">Everything you need to contribute</h2>
        <p class="text-slate-500 text-lg">From discovery to tracking, ContribForge provides the <br> tools to make your journey seamless.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div class="p-8 border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group">
          <div class="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6 border border-emerald-500/20">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">Discover Repositories</h3>
          <p class="text-slate-500">Explore thousands of beginner-friendly open source projects tailored to your skills.</p>
        </div>

        <div class="p-8 border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
          <div class="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6 border border-emerald-500/20">
            <i class="fa-solid fa-rainbow"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">Skill Matching</h3>
          <p class="text-slate-500">Find issues that match your tech stack and experience level automatically.</p>
        </div>

        <div class="p-8 border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
          <div class="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6 border border-emerald-500/20">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">Track Progress</h3>
          <p class="text-slate-500">Build your reputation and showcase your contributions to the world.</p>
        </div>
      </div>
    </section>

    <section id="work" class="py-24 bg-slate-500/5"><br>
      <br>
      <div class="text-center mb-16"><br>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p class="text-slate-500">Three simple steps to start your journey today.</p>
      </div>
      
      <div class="max-w-3xl mx-auto px-6 space-y-12">
        <div v-for="(step, index) in steps" :key="index" class="flex gap-15 items-start">
          <span class="shrink-0 w-16 h-16 flex items-center justify-center border border-emerald-500/30 text-emerald-500 rounded-2xl font-bold text-2xl">
            0{{ index + 1 }}
          </span>
          <div>
            <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
            <p class="text-slate-500">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>
<br>
    <section id="community" class="py-24 px-6 text-center">
      <br><br>
      <h2 class="text-3xl md:text-5xl font-bold mb-6">Built by the community, <span class="text-emerald-500">for the community</span></h2>
      <p class="text-slate-500 max-w-2xl mx-auto mb-16 text-lg">
        ContribForge is an open source project powered by developers who believe in making contributions accessible to everyone.
      </p>

      <div class="flex flex-wrap justify-center gap-18 mb-16">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 flex items-center justify-center border border-emerald-400/30 text-emerald-400 rounded-2xl text-2xl mb-4">
            <i class="fa-brands fa-github"></i>
          </div>
          <p class="font-bold">100%<br><span class="font-normal text-slate-500">Open Source</span></p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 flex items-center justify-center border border-emerald-400/30 text-emerald-400 rounded-2xl text-2xl mb-4">
            <i class="fa-solid fa-user-group"></i>
          </div>
          <p class="font-bold">Community<br><span class="font-normal text-slate-500">Driven</span></p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 flex items-center justify-center border border-emerald-400/30 text-emerald-400 rounded-2xl text-2xl mb-4">
            <i class="fa-regular fa-heart"></i>
          </div>
          <p class="font-bold">Free<br><span class="font-normal text-slate-500">Forever</span></p>
        </div>
      </div>

      <div class="space-y-4">
        <div class="flex justify-center -space-x-3">
          <div v-for="char in ['A','B','C','D','E']" :key="char" 
               class="h-10 w-10 border-2 border-black rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white text-xs">
            {{ char }}
          </div>
          <div class="h-10 w-10 border-2 border-black rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-xs">
            99+
          </div>
        </div>
        <p class="text-slate-500">Join our growing community of contributors</p>
      </div>
    </section><br><br><br><br>
    <section>
        <div class="text-center ">
            <span>
                <h1 class="text-2xl md:text-4xl font-bold">
Start your open source journey today</h1><br>
<p class="text-sm md:text-lg text-slate-500">Join thousands of developers who are building their portfolios and <br>     making an impact in the open source community.</p>
            </span><br>
            <br>
            <button        @click="SearchPage"  :class="ThemeStore.isDark? ' text-black':' text-white'" class="px-6 md:px-10 text-xl py-3 md:py-4 border-2 border-emerald-500  font-bold rounded-lg bg-emerald-500 transition-all duration-300 hover:bg-emerald-500 cursor-pointer hover:shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_40px_rgba(16,185,129,0.4)]">Get start for free <i class="fa-solid fa-arrow-right ml-2"></i></button><br><br>
            <p class="text-md text-slate-500">No credit card required • Free forever for individuals</p>
        </div>
    </section><br><br><br><br><br>
 <br><br><br> </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useThemeStore } from '../Store';
import { router } from '../Router';
const ThemeStore = useThemeStore()
const show = ref(false)

const steps = [
  { title: 'Search Repositories', desc: 'Browse through curated collections or search for specific technologies.' },
  { title: 'Filter by Preference', desc: 'Find issues that match your skill level, from "good first issue" to advanced.' },
  { title: 'Contribute & Track', desc: 'Submit your PRs and watch your open-source portfolio grow in real-time.' }
]

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})
function SearchPage(){
  router.push('/Search')
}
</script>