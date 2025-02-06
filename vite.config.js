import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig(({ mode }) => {
  console.log('Current Working Directory:', process.cwd());
  console.log('Vite Mode:', mode);
  console.log('VITE_EMAILJS_SERVICE_KEY:', process.env.VITE_EMAILJS_SERVICE_KEY);
  console.log('VITE_EMAILJS_TEMPLATE_KEY:', process.env.VITE_EMAILJS_TEMPLATE_KEY);
  console.log('VITE_EMAILJS_PUBLIC_KEY:', process.env.VITE_EMAILJS_PUBLIC_KEY);
  return {
    base: "/about-me/",
    plugins: [react()],
  };
});



