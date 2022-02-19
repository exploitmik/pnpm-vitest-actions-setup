/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // @ts-ignore
  test: {
    include: ['src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './jest/setupTests.ts',
    coverage: {
      reporter: ['html', 'lcov'],
    },
  },
});
