import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string): any =>  {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '/@': pathResolve('src'),
  'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js' //You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  },
})
