import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [react()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        port: 3000, 
    },
})