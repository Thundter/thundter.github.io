import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://thundter.github.io/',
  integrations: [vue()],
})