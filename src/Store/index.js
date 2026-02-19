// stores/themeStore.js
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('ThemeToggle', {
  state: () => ({
    isDark: true 
  }),
  actions: {
    setTheme(val) {
      this.isDark = val; 
    }
  }
});
