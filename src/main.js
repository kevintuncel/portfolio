import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
