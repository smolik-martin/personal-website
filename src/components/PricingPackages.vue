<template>
    <!-- Pricing Packages -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-light mb-4">Moje fotografické balíčky</h2>
          <p class="text-xl text-gray-300">Balíčky na míru, které odpovídají vašemu jedinečnému svatebnímu dni.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="border border-gray-700 p-8 text-center flex flex-col h-full relative"
            :class="{ 'border-yellow-400': service.name === 'Standartní' }"
          >
            <div 
              v-if="service.name === 'Standartní'" 
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-light uppercase tracking-wide"
            >
              Nejoblíbenější
            </div>
            
            <div class="flex flex-col h-full">
              <div>
                <h3 class="text-2xl font-light mb-4">{{ service.name }}</h3>
                <p class="text-gray-300 mb-6 italic">{{ service.description }}</p>
                
                <div class="border-t border-gray-700 pt-6 mb-6">
                  <ul class="text-gray-300 space-y-3 flex-grow">
                    <li 
                      v-for="(feature, i) in service.features" 
                      :key="i" 
                      class="flex items-center justify-start"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fill-rule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clip-rule="evenodd" 
                        />
                      </svg>
                      <span class="text-left">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="mt-auto">
                <p class="text-2xl font-light mb-6">{{ service.price }}</p>
                <router-link 
                  to="/contact" 
                  class="inline-block px-6 py-2 border border-white text-white font-light uppercase tracking-wide text-sm hover:bg-white hover:text-gray-900 transition duration-300"
                >
                  Rezervovat nyní
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'PricingPackages',
  data() {
    return {
      services: [
        {
          name: 'Základní',
          description: 'Perfektní pro malé svatby a soukromé obřady',
          price: 'od 12 000 Kč',
          features: [
            '6 hodin na lokaci',
            'Online galerie',
            '200+ upravených snímků'
          ]
        },
        {
          name: 'Standartní',
          description: 'Nejpopulárnější volba pro celodenní svatby',
          price: 'od 20 000 Kč',
          features: [
            '10 hodin na lokaci',
            "Individuální informativní schůzka",
            'Online galerie',
            '500+ upravených snímků',
            'Fotografie na fyzickém nosiči'
          ] 
        },
        {
          name: 'Exkluzivní',
          description: 'Vhodný pro náročnější páry preferujících individuálmí přístup bez kompromisů',
          price: 'od 27 500 Kč',
          features: [
            'Celý den na lokaci',
            "Individuální informativní schůzka",
            'Online galerie',
            '700+ upravených snímků',
            'Fotografie na fyzickém nosiči',
            'Možnost předsvatebního focení',
            'Premiové album s personalizovanými vyšívanými deskami (30 listů)'
          ]
        }
      ]
    }
  }
}
</script>
