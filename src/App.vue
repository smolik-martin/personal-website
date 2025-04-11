<template>
  <div class="min-h-screen bg-gray-50 font-serif">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-light tracking-widest text-gray-800 hover:text-gray-900 transition duration-300">
            MARTIN SMOLIK
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block space-x-6 text-sm tracking-wider uppercase">
          <router-link to="/" class="text-gray-700 hover:text-gray-900 hover:underline">Domů</router-link>
          <router-link to="/portfolio" class="text-gray-700 hover:text-gray-900 hover:underline">Portfolio</router-link>
          <router-link to="/services" class="text-gray-700 hover:text-gray-900 hover:underline">Služby</router-link>
          <router-link to="/pricing" class="text-gray-700 hover:text-gray-900 hover:underline">Ceník</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-gray-900 hover:underline">O mně</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-gray-900 hover:underline">Kontakt</router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden focus:outline-none"
        >
          <svg 
            v-if="!isMobileMenuOpen" 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed inset-0 bg-white z-40 md:hidden animate-fade-in"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-6 text-center text-sm tracking-wider uppercase animate-slide-up">
          <router-link 
            to="/" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            Domů
          </router-link>
          <router-link 
            to="/portfolio" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            Portfolio
          </router-link>
          <router-link 
            to="/services" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            Služby
          </router-link>
          <router-link 
            to="/pricing" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            Ceník
          </router-link>
          <router-link 
            to="/about" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            O mně
          </router-link>
          <router-link 
            to="/contact" 
            @click="toggleMobileMenu" 
            class="text-gray-700 hover:text-gray-900 hover:underline text-2xl"
          >
            Kontakt
          </router-link>
        </div>
      </div>
    </header>

    <main>
      <SeoMetadata />
      <router-view />
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-light tracking-widest mb-4">MARTIN SMOLIK</h3>
            <p class="text-gray-300 mb-4">Zachycuji váš výjimečný den s elegancí a autenticitou.</p>
            <div class="flex space-x-4">
              <a href="https://www.instagram.com/martin_smolik/" target="_blank" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                <span class="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @martin_smolik
              </a>
              <!-- a href="#" class="text-gray-300 hover:text-white"><span class="sr-only">Facebook</span>Facebook</a -->
              <!-- a href="#" class="text-gray-300 hover:text-white"><span class="sr-only">Pinterest</span>Pinterest</a -->
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-4">Kontakt</h3>
            <p class="text-gray-300 mb-2">kontakt@smolik-martin.cz</p>
            <p class="text-gray-300 mb-2">+420 773 630 881</p>
            <p class="text-gray-300">Brno, Česká republika</p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-4">Rychlé odkazy</h3>
            <ul class="space-y-2">
              <li><router-link to="/faq" class="text-gray-300 hover:text-white">Časté dotazy</router-link></li>
              <li><router-link to="/pricing" class="text-gray-300 hover:text-white">Ceník</router-link></li>
              <!--li><router-link to="/blog" class="text-gray-300 hover:text-white">Blog</router-link></li-->
              <li><router-link to="/privacy" class="text-gray-300 hover:text-white">Ochrana soukromí</router-link></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          &copy; {{ new Date().getFullYear() }} Martin Smolik. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SeoMetadata from '@/components/SeoMetadata.vue'

export default {
  name: 'App',
  components: {
    SeoMetadata
  },
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      
      // Prevent scrolling when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },
  watch: {
    // Close mobile menu when route changes
    '$route'() {
      this.isMobileMenuOpen = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

:root {
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Montserrat', sans-serif;
}

.font-serif {
  font-family: var(--font-serif);
}

.font-sans {
  font-family: var(--font-sans);
}
</style>
