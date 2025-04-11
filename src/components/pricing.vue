<template>
  <div>
    <PricingPackages />
    
    <!-- À La Carte Options -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-light text-gray-900 mb-4">Další možnosti</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Přizpůsobte si svůj balíček těmito doplňkovými službami
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="(option, index) in alacarteOptions" 
              :key="index" 
              class="border border-gray-700 p-8 text-center flex flex-col h-full relative"
            >
              <div>
                <h3 class="text-2xl font-light mb-4">{{ option.name }}</h3>
                <p class="text-gray-600 mb-4">{{ option.description }}</p>
              </div>
              <p class="text-2xl font-light mt-auto">{{ option.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Albums & Prints -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-light text-gray-900 mb-4">Svatební fotoalba</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Uchovejte své vzpomínky na váš vyjímečný den skrze mé fotografie navždy.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/Users/martinsmolik/CascadeProjects/personal-website/images/_MS_7518.jpg" alt="Wedding album" class="w-full h-[450px] object-cover" />
            </div>
            <div>
              <h3 class="text-2xl font-light text-gray-900 mb-6">Svatební fotoalba</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Na svatebních albech spolupracuji s Marcelou z alb Voknerová, se kterou nás spojují společné hodnoty a vášeň pro kvalitní řemeslné zpracování. Každé album je unikátním a osobním kouskem, který bude uchovávat vaše vzpomínky na celý život. Můžete si vybírat z široké škály barev desek a výšivek – od elegantních standardních vzorů po zcela personalizované možnosti, které budou přesně odpovídat vašemu stylu. Jména a datum na albu jsou samozřejmostí, aby vaše vzpomínky byly ještě víc nezapomenutelné.
              </p>
              
              <div class="space-y-4 mb-8">
                <div v-for="(album, index) in albums" :key="index" class="flex justify-between border-b border-gray-200 pb-3">
                  <div>
                    <h4 class="font-medium text-gray-900">{{ album.name }}</h4>
                    <p class="text-gray-500 text-sm">{{ album.description }}</p>
                  </div>
                  <span class="text-gray-900">{{ album.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PricingPackages from './PricingPackages.vue'

export default {
  name: 'Pricing',
  components: {
    PricingPackages
  },
  data() {
    return {
      alacarteOptions: [
        {
          name: 'Další pokrytí',
          description: 'Další hodina fotografického pokrytí svatebního dne',
          price: '350 Kč/hodina'
        },
        {
          name: 'Předsvatební focení',
          description: '2-hodinové focení s cca 50ti upravenými snímky',
          price: '3 500 Kč'
        },
        {
          name: 'Personalizované svatební fotoalbum',
          description: 'Ručně vyrobená alba jsou navržena tak, aby vyprávěla příběh vašeho vyjímečného dne prostřednictvím pečlivě vybraných obrázků. Vyrobená s láskou z kvalitních materiálů. Zevnějšek alba zdobí jedinečné vyšívané desky s personalizovaným motivem.',
          price: 'od 3 500 Kč'
        }
      ],
      albums: [
        {
          name: 'Základní album',
          description: '20 listů (40 stran), 40 premiových fotografií, 26x34 cm, vyšívané desky',
          price: 'od 3 500 Kč'
        },
        {
          name: 'Rozšířené album',
          description: '30 listů(60 stran), 60 premiových fotografií, 26x34 cm, vyšívané desky',
          price: 'od 4 800 Kč'
        }
      ]
    }
  }
}
</script>