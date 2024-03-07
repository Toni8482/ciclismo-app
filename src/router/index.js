import { createRouter, createWebHistory } from 'vue-router'
import Tablas from '../components/TablasCiclismo.vue'
import NuevoPort from '../components/NuevoPort.vue'
import EditarPort from '../components/EditarPort.vue'

 const routes = [
 {
     path: '/',
     name: 'tablas',
     component: Tablas
 },
 {
    path: '/nuevoPort',
    name: 'nuevoPort',
    component: NuevoPort
},
{
    path: '/editarPort/:id',
    name: 'editarPort',
    component: EditarPort
},
 ]

 const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
 })

 export default router