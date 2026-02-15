import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UiUx from '@/views/UiUx.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/uiux',
    name: 'UiUx',
    component: UiUx
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "/uiux/1",
    name: "UiUxProject1",
    component: () => import("@/views/UiUxProject1.vue"),
  },
  {
    path: "/uiux/2",
    name: "UiUxProject2",
    component: () => import("@/views/UiUxProject2.vue"),
  },
  {
    path: "/uiux/3",
    name: "UiUxProject3",
    component: () => import("@/views/UiUxProject3.vue"),
  },
  {
    path: "/uiux/4",
    name: "UiUxProject4",
    component: () => import("@/views/UiUxProject4.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
