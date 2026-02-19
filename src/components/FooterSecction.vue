<template>
  <footer 
    :class="ThemeStore.isDark ? 'bg-black text-slate-300' : 'bg-slate-50 text-slate-600'" 
    class="border-t border-blue-500/20 py-10 transition-colors duration-300"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h2 :class="ThemeStore.isDark ? 'text-white' : 'text-slate-900'" class="text-2xl font-bold mb-4">
            Forge<span class="text-blue-500">Board</span>
          </h2>
          <p class="text-sm leading-relaxed">
            Building the next generation of digital tools. Join our community and forge your ideas into reality.
          </p>
        </div>

        <div>
          <h3 :class="ThemeStore.isDark ? 'text-white' : 'text-slate-900'" class="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-blue-500 transition-colors">Documentation</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Components</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h3 :class="ThemeStore.isDark ? 'text-white' : 'text-slate-900'" class="font-semibold mb-4 text-lg">Stay Updated</h3>
          <div class="flex gap-2">
            <input 
              type="email" 
              placeholder="Email base..." 
              :class="ThemeStore.isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'"
              class="border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full transition-all"
            />
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] active:scale-95">
              Join
            </button>
          </div>
        </div>

      </div>

      <div :class="ThemeStore.isDark ? 'border-slate-800' : 'border-slate-200'" class="mt-10 pt-8 border-t text-center text-xs">
        <p>&copy; 2024 ForgeBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useThemeStore } from '../Store';
const ThemeStore = useThemeStore();
</script>