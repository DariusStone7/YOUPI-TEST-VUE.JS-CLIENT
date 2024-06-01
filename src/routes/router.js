import { createRouter, createWebHistory} from "vue-router";
import routes from '@/routes/routes';
import axios from "axios";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

// Définir le token d'accès dans les en-têtes de chaque requête
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

export default router;