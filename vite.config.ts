import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    // https://vitejs.dev/config/build-options.html#build-lib
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Hello-kitt-ui',
      fileName: 'hello-kitt-ui'
    },
    rollupOptions: {
      // a definition of any external dependencides needed to run the package
      external: ['vue'],
      output: {
        // provide context to the used external dependencies in this case "vue" equal the external "vue" dependencie
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: [{ find: '@cmp', replacement: path.resolve(__dirname, './src/components') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/index.scss";
        `
      }
    }
  }
});
