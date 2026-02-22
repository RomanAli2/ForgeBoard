<template>
  <div :class="ThemeStore.isDark ? 'bg-black text-white' : 'bg-white text-black'" class="min-h-screen flex flex-col">
    
    <div class="flex items-center p-5 gap-3 shrink-0">
      <button @click="BackHome" :class="ThemeStore.isDark ? 'hover:bg-slate-800 text-white' : 'hover:bg-slate-300 text-black'" class="px-5 font-bold cursor-pointer py-1.5 rounded-lg">
        <i class="fa-solid fa-arrow-left ml-2"></i>Home
      </button>
      <div class="flex gap-3 items-center">
        <div :class="ThemeStore.isDark? 'text-black':'text-white'" class="rounded-2xl hover:bg-emerald-600 cursor-pointer bg-emerald-500/95 px-2.5 py-1 text-2xl font-bold">F</div>
        <div class="text-xl font-medium">ForgeBoard</div>
      </div>
    </div>

    <section class="flex-1 flex flex-col justify-center items-center px-4 pb-20">
      
      <div class="w-full max-w-md"> <div class="text-center mb-8">
          <h1 class="text-3xl font-bold">Welcome back</h1>
          <p class="text-slate-400 mt-2">Sign in to access your dashboard and bookmarks</p>
        </div>

        <div class="flex flex-col items-center">
          <button @click="PageNotFoundBtn" :class="ThemeStore.isDark ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-slate-200 text-black hover:bg-slate-300'" 
                  class="flex items-center justify-center rounded-xl py-3 w-full shadow-sm transition-all duration-200 mb-4">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              </svg>
              <span class="font-medium">Continue with Google</span>
            </div>
          </button>

          <span class="text-slate-500 mb-4 text-sm">or</span>

          <div class="w-full flex flex-col text-start">
            <label class="font-bold mb-1">Email</label>
            <input v-model="UserEmail" :class="ThemeStore.isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-200 border-slate-200'" 
                   type="email" class="rounded-xl py-3 px-4 border focus:outline-none focus:ring-2 ring-emerald-500 mb-4 w-full" placeholder="you@example.com">

            <label class="font-bold mb-1">Password</label>
            <input :class="ThemeStore.isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-200 border-slate-200'" 
                   type="password" class="rounded-xl py-3 px-4 border focus:outline-none focus:ring-2 ring-emerald-500 mb-6 w-full" placeholder="Password">

            <button @click="LoginButton" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-colors">
              <i class="fa-regular fa-envelope mr-2"></i>Sign in
            </button>

            <div class="mt-6 text-center text-sm">
              <span>Don't have an account? </span>
              <RouterLink to="/signup" class="text-emerald-500 font-bold hover:underline">Sign up</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useThemeStore } from '../../Store';
import { router } from '../../Router';
import { ref } from 'vue';
const ThemeStore=useThemeStore()
function BackHome(){
    router.push('/')
}
function PageNotFoundBtn(){
  router.push('/Error')
}
const UserEmail=ref("")
function LoginButton(){
  alert(' Entered Email is Invalid Please Signup')
}
</script>