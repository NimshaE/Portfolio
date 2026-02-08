import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UiUx from '@/views/UiUx.vue'
import Researches from '@/views/Researches.vue'
import AiProjects from '@/views/AiProjects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ai',
    name: 'AiProjects',
    component: AiProjects
  },
  {
    path: '/research',
    name: 'Researches',
    component: Researches
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
    path: "/research/1",
    name: "Research1",
    component: () => import("@/views/Research1.vue"),
  },
  {
    path: "/research/2",
    name: "Research2",
    component: () => import("@/views/Research2.vue"),
  },
  {
    path: "/research/3",
    name: "Research3",
    component: () => import("@/views/Research3.vue"),
  },
  {
    path: "/research/4",
    name: "Research4",
    component: () => import("@/views/Research4.vue"),
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
  {
    path: "/uiux/5",
    name: "UiUxProject5",
    component: () => import("@/views/UiUxProject5.vue"),
  },
  {
    path: "/uiux/6",
    name: "UiUxProject6",
    component: () => import("@/views/UiUxProject6.vue"),
  },
  {
    path: "/uiux/7",
    name: "UiUxProject7",
    component: () => import("@/views/UiUxProject7.vue"),
  },
  {
    path: "/uiux/8",
    name: "UiUxProject8",
    component: () => import("@/views/UiUxProject8.vue"),
  },
  {
    path: "/ai/1",
    name: "AiProjectStory1",
    component: () => import("@/views/AiProjectStory1.vue")
  },
  {
    path: "/ai/2",
    name: "AiProjectStory2",
    component: () => import("@/views/AiProjectStory2.vue")
  },
  {
    path: "/ai/3",
    name: "AiProjectStory3",
    component: () => import("@/views/AiProjectStory3.vue")
  },
  {
    path: "/ai/4",
    name: "AiProjectStory4",
    component: () => import("@/views/AiProjectStory4.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
