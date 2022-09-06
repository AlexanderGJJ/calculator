import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import * as dotenv from 'dotenv';
// dotenv.config();

type viteConfigInput = {
  mode: string;
  command: string;
};

// https://vitejs.dev/config/
export default (args: viteConfigInput) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:5]' : '[local]__[hash:base64:5]';

  return defineConfig({
    server: {
      port: 8080,
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:8080",
      //     secure: false,
      //     rewrite: path => path.replace(/^\/api/, ""),
      //   },
      // },
    },
    css: {
      modules: {
        generateScopedName,
        localsConvention: 'camelCase' || 'dashes',
      },
    },
    plugins: [react()],
  });
};
