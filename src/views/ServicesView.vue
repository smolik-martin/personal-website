<template>
  <div class="services">
    <!-- Page Header -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-light text-gray-900 mb-4">Moje služby</h1>
          <p class="text-xl text-gray-600">Fotografické balíčky na míru pro váš výjimečný den</p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-6">Zachycení vašeho příběhu</h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Věřím, že každá svatba je jedinečná, stejně jako vy samotní. 
            Můj přístup kombinuje uměleckou fotografii s fotoreportáží, čímž vytvářím kolekci snímků, 
            které nejen ukazují krásu vašeho svatebního dne, ale také vyprávějí váš příběh způsobem, 
            který působí autenticky a nadčasově.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto relative">
          <h2 class="text-3xl font-light text-gray-900 mb-12 text-center">Služby</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <ul class="space-y-6">
                <li v-for="(service, index) in services" :key="index" class="border-b pb-6 last:border-b-0">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-xl font-medium text-gray-900 mb-2">{{ service.title }}</h3>
                      <p class="text-gray-600">{{ service.description }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="md:block hidden">
              <div 
                class="sticky top-24 bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300"
              >
                <h3 class="text-xl font-medium text-gray-900 mb-4">Kompletní ceník</h3>
                <p class="text-gray-600 mb-6 text-sm">
                  Chcete znát přesné ceny a detaily jednotlivých fotografických balíčků?
                </p>
                <router-link 
                  to="/pricing" 
                  class="block w-full text-center px-6 py-3 bg-gray-900 text-white font-light tracking-wide uppercase hover:bg-gray-800 transition duration-300 rounded-lg"
                >
                  Zobrazit ceník
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Process Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-light text-gray-900 mb-4">Proces</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Od prvního kontaktu až po dodání fotografií, zde je to, jak probíhá celá spolupráce
            </p>
          </div>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div 
              v-intersection="timelineLineObserver"
              class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 transition-all duration-1000 ease-out"
              :class="{
                'scale-y-0': !isTimelineVisible,
                'scale-y-100': isTimelineVisible
              }"
            ></div>
            
            <!-- Timeline Items -->
            <div class="space-y-16">
              <div 
                v-for="(step, index) in process" 
                :key="index"
                v-intersection="stepObservers[index]"
                class="relative transition-all duration-1000 ease-out"
                :class="{
                  'opacity-0 translate-y-10': !visibleSteps.includes(index),
                  'opacity-100 translate-y-0': visibleSteps.includes(index)
                }"
              >
                <div class="flex flex-col md:flex-row items-center">
                  <!-- Timeline Circle -->
                  <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gray-900 text-white font-bold z-10">
                    {{ index + 1 }}
                  </div>
                  
                  <!-- Left Side Content -->
                  <div v-if="index % 2 === 0" class="md:w-1/2 md:pr-16 md:text-right">
                    <div class="bg-white p-8 rounded-lg shadow-sm min-h-[12rem] flex flex-col group hover:shadow-lg transition duration-300">
                      <h3 class="text-2xl font-light text-gray-900 mb-3">{{ step.title }}</h3>
                      <p class="text-gray-600 flex-grow leading-relaxed">{{ step.description }}</p>
                    </div>
                  </div>
                  
                  <!-- Empty div for right side items -->
                  <div v-if="index % 2 === 0" class="md:w-1/2"></div>
                  
                  <!-- Empty div for left side items -->
                  <div v-if="index % 2 !== 0" class="md:w-1/2"></div>
                  
                  <!-- Right Side Content -->
                  <div v-if="index % 2 !== 0" class="md:w-1/2 md:pl-16 md:text-left">
                    <div class="bg-white p-8 rounded-lg shadow-sm min-h-[12rem] flex flex-col group hover:shadow-lg transition duration-300">
                      <h3 class="text-2xl font-light text-gray-900 mb-3">{{ step.title }}</h3>
                      <p class="text-gray-600 flex-grow leading-relaxed">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-light text-gray-900 mb-4">Často kladené dotazy</h2>
            <p class="text-xl text-gray-600">
              Běžné otázky ohledně mých služeb
            </p>
          </div>
          
          <Faq category="all" :limit="6" />
          
          <div class="text-center mt-12">
            <p class="text-gray-600 mb-6">
              Máte další otázky? Rád vám pomohu!
            </p>
            <router-link to="/contact" class="inline-block px-8 py-3 bg-gray-900 text-white font-light tracking-wide uppercase hover:bg-gray-800 transition duration-300">
              Kontaktujte mě
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16">
      <div class="w-full">
        <TestimonialsSection />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-6">Připraveni zarezervovat Váš svatební den?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Zachytím pro vás krásné vzpomínky, které si uchováte navždy
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/contact" class="inline-block px-8 py-3 bg-gray-900 text-white font-light tracking-wide uppercase hover:bg-gray-800 transition duration-300">
              Kontaktujte mě
            </router-link>
            <router-link to="/portfolio" class="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wide uppercase hover:bg-gray-900 hover:text-white transition duration-300">
              Zobrazit moji tvorbu
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Faq from '../components/Faq.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';

export default {
  name: 'ServicesView',
  components: {
    Faq,
    TestimonialsSection
  },
  directives: {
    intersection: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                binding.value(entry)
              }
            })
          },
          { threshold: 0.1 }
        )
        observer.observe(el)
        el._observer = observer
      },
      unmounted(el) {
        if (el._observer) {
          el._observer.disconnect()
        }
      }
    }
  },
  data() {
    return {
      services: [
        {
          title: 'Celý den na lokaci',
          description: 'Komplexní fotografické pokrytí vašeho svatebního dne'
        },
        {
          title: 'Individuální informativní schůzka',
          description: 'Osobní konzultace k plánování svatebního focení'
        },
        {
          title: 'Online galerie',
          description: 'Snadný přístup k vašim svatebním fotografiím'
        },
        {
          title: 'Až 700+ upravených snímků',
          description: 'Profesionálně upravené fotografie zachycující každý důležitý moment'
        },
        {
          title: 'Možnost předsvatebního focení',
          description: 'Romantické focení před svatebním dnem'
        },
        {
          title: 'Fotografie na fyzickém nosiči',
          description: 'Trvalá vzpomínka uložená na USB disku'
        },
        {
          title: 'Prémiové album s personalizovanými vyšívanými deskami',
          description: 'Luxusní svatební album s jedinečným designem'
        }
      ],
      weddingPackages: [
        {
          title: 'Základní',
          description: 'Perfektní pro malé svatby a soukromé obřady',
          badge: null,
          features: [
            '6 hodin na lokaci',
            'Online galerie',
            '200+ upravených snímků',
            'Možnost předsvatebního focení'
          ]
        },
        {
          title: 'Standartní',
          description: 'Nejpopulárnější volba pro celodenní svatby',
          badge: 'Nejoblíbenější',
          features: [
            '10 hodin na lokaci',
            'Individuální informativní schůzka',
            'Online galerie',
            '500+ upravených snímků',
            'Možnost předsvatebního focení',
            'Fotografie na fyzickém nosiči'
          ]
        },
        {
          title: 'Exkluzivní',
          description: 'Vhodný pro náročnější páry preferujících individuální přístup bez kompromisů',
          badge: null,
          features: [
            'Celý den na lokaci',
            'Individuální informativní schůzka',
            'Online galerie',
            '700+ upravených snímků',
            'Možnost předsvatebního focení',
            'Fotografie na fyzickém nosiči',
            'Prémiové album s personalizovanými vyšívanými deskami'
          ]
        }
      ],
      additionalServices: [
        {
          title: 'Další pokrytí',
          description: 'Rozšíření fotografického pokrytí svatebního dne',
          features: [
            'Další hodina fotografování',
            'Zachycení dodatečných momentů',
            'Flexibilní rozšíření balíčku'
          ]
        },
        {
          title: 'Předsvatební focení',
          description: 'Profesionální portrétní fotografie před svatbou',
          features: [
            '2-hodinové focení',
            '50+ upravených snímků',
            'Výběr lokace dle vašeho výběru',
            'Styling a profesionální vedení'
          ]
        },
        {
          title: 'Svatební fotoalbum',
          description: 'Luxusní vzpomínka na váš svatební den',
          features: [
            'Ručně vyrobené album',
            'Personalizované vyšívané desky',
            'Výběr nejlepších fotografií',
            'Prémiové zpracování'
          ]
        }
      ],
      process: [
        {
          title: 'První kontakt',
          description: 'Pojďme se společně pobavit o vaší představě svatebního dne. Rád vás poznám a pochopím vaše očekávání.'
        },
        {
          title: 'Konzultace a plánování',
          description: 'Domluvíme detaily focení, vybereme lokace a naplánujeme harmonogram svatebního dne.'
        },
        {
          title: 'Předsvatební focení',
          description: 'Volitelné focení před svatbou, které vám pomůže cítit se uvolněně před objektivem.'
        },
        {
          title: 'Svatební den',
          description: 'Budu s vámi celý den, abych zachytil ty nejdůležitější a nejkrásnější okamžiky.'
        },
        {
          title: 'Úprava fotografií',
          description: 'Pečlivě vyberu a upravím ty nejlepší snímky, které vyprávějí váš příběh.'
        },
        {
          title: 'Předání fotografií',
          description: 'Obdržíte online galerii a fotografie na USB nosiči.'
        }
      ],
      isTimelineVisible: false,
      visibleSteps: [],
      previewImages: [
        {
          src: '/images/wedding-preview-1.jpg',
          alt: 'Svatební fotografie - romantický moment',
          title: 'Svatební fotografie',
          description: 'Zachycení intimních okamžiků svatebního dne'
        },
        {
          src: '/images/portrait-preview-1.jpg',
          alt: 'Portrétní fotografie v přírodě',
          title: 'Portrétní fotografie',
          description: 'Profesionální portrét s přirozeným světlem'
        },
        {
          src: '/images/family-preview-1.jpg',
          alt: 'Rodinné focení v exteriéru',
          title: 'Rodinné focení',
          description: 'Zachycení vzácných rodinných okamžiků'
        }
      ],
      isPricingCardFixed: false,
      pricingCardWidth: 0,
      pricingCardTop: 0,
      scrollPosition: 0
    }
  },
  computed: {
    timelineLineObserver() {
      return (entry) => {
        if (entry.isIntersecting) {
          this.isTimelineVisible = true
        }
      }
    },
    stepObservers() {
      return this.process.map((_, index) => (entry) => {
        if (entry.isIntersecting && !this.visibleSteps.includes(index)) {
          setTimeout(() => {
            this.visibleSteps.push(index)
          }, index * 200)
        }
      })
    },
    pricingCardStyle() {
      return {
        width: `${this.pricingCardWidth}px`,
        top: `${this.pricingCardTop}px`
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.calculatePricingCardDimensions()
    window.addEventListener('resize', this.calculatePricingCardDimensions)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calculatePricingCardDimensions)
  },
  methods: {
    calculatePricingCardDimensions() {
      this.$nextTick(() => {
        if (this.$refs.pricingCardContainer && this.$refs.pricingCard) {
          this.pricingCardWidth = this.$refs.pricingCardContainer.offsetWidth
          this.pricingCardTop = 96 // 6rem in pixels
        }
      })
    },
    handleScroll() {
      if (!this.$refs.pricingCardContainer) return

      const containerTop = this.$refs.pricingCardContainer.getBoundingClientRect().top
      const containerBottom = this.$refs.pricingCardContainer.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Check if the container is in view and has enough height
      if (containerTop <= this.pricingCardTop && containerBottom > windowHeight) {
        this.isPricingCardFixed = true
      } else {
        this.isPricingCardFixed = false
      }
    }
  }
}
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
}
.sticky {
  position: sticky;
  top: 6rem; /* Adjust based on your header height */
}
.pricing-card-fixed {
  height: 100%;
}
</style>
