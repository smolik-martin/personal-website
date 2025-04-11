<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center text-center px-4">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/Homepage/hero.webp');"></div>
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-6xl font-light text-white mb-6 tracking-wide">Každý moment má svůj příběh</h1>
        <p class="text-lg md:text-2xl text-white mb-8 font-light">Elegantní svatební fotografie, která vypráví jedinečný příběh</p>
        <div class="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <router-link to="/portfolio" class="inline-block px-8 py-3 bg-white text-gray-900 font-light tracking-wide uppercase hover:bg-gray-100 transition duration-300">
            Zobrazit Portfolio
          </router-link>
          <router-link to="/contact" class="inline-block px-8 py-3 border border-white text-white font-light tracking-wide uppercase hover:bg-white hover:bg-opacity-10 transition duration-300">
            Rezervovat termín
          </router-link>
        </div>
      </div>
      <div class="absolute bottom-8 left-0 right-0 text-center">
        <a href="#about" class="text-white animate-bounce inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-light text-gray-900 mb-4">Vítejte</h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Zachycuji krásu, emoce a přirozené momenty vašeho svatebního dne tak, aby si zachovaly nadčasový nádech.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-2">Tvůrčí vize</h3>
            <p class="text-gray-600">Spojuji reportážní a umělecký styl, s cílem zachytit příběh vašeho výjimečného dne.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-2">Autentické momenty</h3>
            <p class="text-gray-600">Soustředím se na zachycení skutečných emocí a přirozených okamžiků, které odrážejí vaši lásku.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-2">Smysl pro detail</h3>
            <p class="text-gray-600">Od jemného zdobení na vašich šatech po slzy v očích vašeho partnera.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview Section -->
    <section class="py-20 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-light text-gray-900 mb-4">Moje svatební portfolio</h2>
          <p class="text-xl text-gray-600">Nahlédnutí do krásných svateb, které jsem měl tu čest zachytit.</p>
        </div>
        
        <!-- Carousel Container -->
        <div class="relative w-full overflow-hidden">
          <!-- Scrolling Image Track -->
          <div 
            ref="portfolioTrack"
            class="flex transition-transform duration-10000 ease-in-out"
            :style="{ transform: `translateX(${-currentOffset}px)` }"
          >
            <div 
              v-for="(image, index) in infinitePortfolioImages" 
              :key="index" 
              class="flex-shrink-0 w-1/3 px-2 overflow-hidden"
            >
              <div class="aspect-w-3">
                <img 
                  :src="image.src" 
                  :alt="image.alt" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            ref="portfolioButton"
            to="/portfolio" 
            class="inline-block px-10 py-4 border-2 border-gray-900 text-white bg-gray-900 font-medium tracking-wide uppercase hover:bg-transparent hover:text-gray-900 transition-all duration-700 ease-out"
            :class="{ 'opacity-100 translate-y-0': isPortfolioButtonVisible }"
          >
            Zobrazit kompletní portfolio
          </router-link>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingPackages />

    <!-- Explore Full Pricing -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-light mb-6">Chcete vědět víc o mých službách?</h2>
          <p class="text-xl text-gray-600 mb-10">
            Prozkoumejte kompletní nabídku fotografických balíčků, doplňkových služeb a možností, které vám pomohou zachytit ty nejdůležitější okamžiky vašeho svatebního dne.
          </p>
          <router-link 
            to="/pricing" 
            class="inline-block mt-8 px-10 py-4 border-2 border-gray-900 text-white bg-gray-900 font-medium tracking-wide uppercase hover:bg-transparent hover:text-gray-900 transition-all duration-700 ease-out"
          >
            Prozkoumat kompletní ceník
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Contact CTA -->
    <section class="py-20 bg-cover bg-center relative" style="background-image: url('/weddings/nelly-kacka-2024/details/N&K-23.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-xl mx-auto text-center text-white">
          <h2 class="text-3xl font-light mb-6">Připraveni zarezervovat Váš svatební den?</h2>
          <p class="text-xl mb-8">Rád se s vámi pobavím o tom, jak společně vytvoříme krásné vzpomínky.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/contact" class="inline-block px-8 py-3 bg-white text-gray-900 font-light tracking-wide uppercase hover:bg-gray-100 transition duration-300">Kontaktujte mě</router-link>
            <router-link to="/portfolio" class="inline-block px-8 py-3 border border-white text-white font-light tracking-wide uppercase hover:bg-white hover:bg-opacity-10 transition duration-300">Prohlédnout moji práci</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-8">
            <h3 class="text-3xl font-light text-gray-900 mb-4">Sledujte moji tvorbu na Instagramu</h3>
            <p class="text-xl text-gray-600 mb-6">
              Nahlédněte do zákulisí mé práce, inspirativních momentů a nejnovějších svatebních příběhů.
            </p>
          </div>
          
          <div class="flex justify-center items-center space-x-6">
            <a 
              href="https://www.instagram.com/martin_smolik/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center px-10 py-4 border-2 border-gray-900 text-white bg-gray-900 font-medium tracking-wide uppercase hover:bg-transparent hover:text-gray-900 transition-all duration-700 ease-out"
            >
              sledovat
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PricingPackages from '../components/PricingPackages.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';

export default {
  name: 'HomeView',
  components: {
    PricingPackages,
    TestimonialsSection
  },
  data() {
    return {
      portfolioImages: [
        {
          src: '/weddings/marcela-david-2024/portraits/DSC02191.jpg',
          alt: 'Polibek při západu slunce'
        },
        {
          src: '/images/Homepage/image-9.jpg',
          alt: 'Zamilovaný svatební pár v kapli'
        },
        {
          src: '/images/Homepage/DSC03937.jpg',
          alt: 'Pár kráčející mezi stromy'
        },
        {
          src: '/images/Homepage/MSM-2.jpg',
          alt: 'Nevěstiny detaily'
        },
        {
          src: '/images/Homepage/MSM-18.jpg',
          alt: 'Svatební obřad v kostele'
        },
        {
          src: '/images/Homepage/MSM-169.jpg',
          alt: 'Pár na zadním sedadle automobilu'
        }
      ],
      currentOffset: 0,
      carouselInterval: null,
      scrollSpeed: 2, 
      maxOffset: 100000,
      isPortfolioButtonVisible: false
    }
  },
  computed: {
    infinitePortfolioImages() {
      return Array(100).fill().flatMap(() => this.portfolioImages)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.startCarousel()
      window.addEventListener('resize', this.resetCarousel)
      this.setupPortfolioButtonObserver()
    })
  },
  beforeUnmount() {
    this.stopCarousel()
    window.removeEventListener('resize', this.resetCarousel)
    if (this.portfolioButtonObserver) {
      this.portfolioButtonObserver.disconnect()
    }
  },
  methods: {
    startCarousel() {
      let lastTime = null;
      const animate = (currentTime) => {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = currentTime - lastTime;
        
        const imageWidth = this.$refs.portfolioTrack.querySelector('div').offsetWidth

        this.currentOffset = (this.currentOffset + this.scrollSpeed * deltaTime / 16) % this.maxOffset

        lastTime = currentTime;
        this.carouselInterval = requestAnimationFrame(animate)
      }

      this.carouselInterval = requestAnimationFrame(animate)
    },
    stopCarousel() {
      if (this.carouselInterval) {
        cancelAnimationFrame(this.carouselInterval)
      }
    },
    resetCarousel() {
      this.stopCarousel()
      this.currentOffset = 0
      this.startCarousel()
    },
    setupPortfolioButtonObserver() {
      // Create Intersection Observer for portfolio button
      this.portfolioButtonObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isPortfolioButtonVisible = true
            }
          })
        },
        {
          threshold: 0.1 // Trigger when 10% of the button is visible
        }
      )

      // Start observing the button
      if (this.$refs.portfolioButton) {
        this.portfolioButtonObserver.observe(this.$refs.portfolioButton.$el)
      }
    }
  }
}
</script>

<style scoped>
.aspect-w-3 {
  position: relative;
  padding-bottom: 133.33%;
}

.aspect-w-3 > img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
}

.aspect-square {
  position: relative;
  padding-bottom: 100%;
}

.aspect-square > img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
}

.portfolio-track {
  will-change: transform;
}
</style>
