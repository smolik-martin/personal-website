import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import UserDataDeletionView from '@/views/UserDataDeletionView.vue';
import PricingView from '@/views/PricingView.vue';
import WeddingDetailView from '../views/WeddingDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/wedding/:slug',
    name: 'WeddingDetail',
    component: WeddingDetailView,
    props: (route) => {
      // Normalize slug by appending -2024 if not already present
      const slug = route.params.slug.includes('-') 
        ? route.params.slug 
        : route.params.slug + '-2024'
      return { slug }
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    alias: '/sluzby'
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    alias: '/kontakt'
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FaqView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView
  },
  {
    path: '/user-data-deletion',
    name: 'UserDataDeletion',
    component: UserDataDeletionView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? 'https://smolik-martin.cz' : '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top of the page when navigating between routes
    return { top: 0, behavior: 'smooth' }
  }
})

// Add navigation guards for debugging
router.beforeEach((to, from, next) => {
  console.log('Navigating from:', from.path)
  console.log('Navigating to:', to.path)
  next()
})

router.afterEach((to, from) => {
  console.log('Navigation completed:', to.path)
})

export default router
