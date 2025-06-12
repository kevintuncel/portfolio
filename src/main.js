import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import ProjectDetail from "@/components/ProjectDetail.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";


const repoName = 'portfolio'


const base = import.meta.env.PROD ? `/${repoName}/` : '/'

const router = createRouter({
    history: createWebHistory(base),
    routes: [
        { path: '/', component: Home },
        { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail },
        { path: '/contact', component: Contact },
        { path: '/about', component: About },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
