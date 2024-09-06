/*
 * Welcome to the RPCSX site project!
 * This project is developed with Vue.js, which is a declarative framework that uses HTML templates to create components.
 * The component library is Naive UI.
 * 
 * Important notes: 
 * The project automatically imports *most* vue and naive-ui code as you go, which saves significant space in your script blocks. Just make sure to export your components.
 * However, the icon library does not have an auto-importer, so your script blocks will need to import those.
 * Theming is not done with CSS, but overrides. See App.vue for examples. They're very similar to CSS, but check the docs.
 * Also look into the NThemeEditor component, makes theming much easier.
 */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// This handles auto-importing.
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'NIcon',
            'NConfigProvider',
            'NCard',
            'NText',
            'NH1',
            'NH2',
            'NH3'
          ]
        }
      ]
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
});
