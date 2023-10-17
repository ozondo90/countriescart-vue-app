import { createRouter, createWebHistory } from 'vue-router'

import DepartmentsView from "@/views/DepartmentsView.vue";
import HomeView from '../views/HomeView.vue';
import MunicipalitiesView from "@/views/MunicipalitiesView.vue"
import PagesLayout from '@/views/Layouts/PagesLayout.vue';
import createDepartmentsView from "@/views/CreateDepartmentsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageslayout',
      component: PagesLayout,
      children : [
        {
          path: "",
          name: 'home',
          component: HomeView,
        },
        {
          path: '/departments',
          name: 'departments',
          component: DepartmentsView
        },
        {
          path: '/municipalities',
          name: 'municipalities',
          component: MunicipalitiesView
        },
        {
          path: '/create-department',
          name: 'createdepartment',
          component: createDepartmentsView
        }
      ]
    },
  ]
})

export default router
