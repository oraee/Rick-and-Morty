import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/// <reference types="vite/client" />

type ArrayObject<T> = T extends Array<infer K> ? K : never;

type Defined<T> = Exclude<T, undefined | null>;
