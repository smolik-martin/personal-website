<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="relative bg-gray-900 text-white overflow-hidden">
      <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-light mb-6 tracking-wide">Příběhy lásky v obrazech</h1>
          <p class="text-xl md:text-2xl font-light text-gray-300 mb-10">Každý svatební okamžik je jedinečný příběh, který stojí za to zachytit</p>
        </div>
      </div>
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-20" 
        style="background-image: url('/weddings/nelly-kacka-2024/preparation/N&K-34.jpg')"
      ></div>
    </section>

    <!-- Portfolio Gallery -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-16">
          <router-link 
            v-for="(wedding, index) in topWeddings" 
            :key="index" 
            :to="{ name: 'WeddingDetail', params: { slug: wedding.slug } }"
            class="portfolio-item group relative block overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
            :class="{ 'md:col-span-2': index === 0 }"
          >
            <!-- Large First Wedding -->
            <div 
              v-if="index === 0" 
              class="grid md:grid-cols-2 gap-8 items-center"
            >
              <div class="relative overflow-hidden shadow-lg">
                <img 
                  :src="wedding.coverImage" 
                  :alt="`${wedding.couple} svatba`" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h2 class="text-3xl font-light text-gray-900 mb-4">{{ wedding.couple }}</h2>
                <p class="text-gray-600 mb-6 text-xl">{{ wedding.date }} | {{ wedding.location }}</p>
                <p class="text-gray-700 mb-8 text-lg">{{ wedding.shortDescription }}</p>
              </div>
            </div>

            <!-- Other Weddings -->
            <div 
              v-else 
              class="grid md:grid-cols-2 gap-8 items-center"
            >
              <div class="relative overflow-hidden shadow-lg order-2 md:order-1 self-start">
                <img 
                  :src="wedding.coverImage" 
                  :alt="`${wedding.couple} svatba`" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="order-1 md:order-2">
                <h2 class="text-3xl font-light text-gray-900 mb-4">{{ wedding.couple }}</h2>
                <p class="text-gray-600 mb-6 text-xl">{{ wedding.date }} | {{ wedding.location }}</p>
                <p class="text-gray-700 mb-8 text-lg">{{ wedding.shortDescription }}</p>
              </div>
            </div>
          </router-link>
          
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-light text-gray-900 mb-6">Vaše svatba, váš příběh</h2>
          <p class="text-xl text-gray-600 mb-10">Pojďme společně vytvořit vzpomínky, které budou trvat celou věčnost</p>
          <router-link 
            to="/contact" 
            class="inline-block px-10 py-4 bg-gray-900 text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300"
          >
            Rezervovat schůzku
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      topWeddings: [
        {
          couple: 'Marcela & David',
          date: '17. srpna 2024',
          location: 'Pohoda Nárameč',
          slug: 'marcela-david',
          shortDescription: 'Romantická svatba plná emocí a nezapomenutelných okamžiků v nádherném prostředí. Na to, že jsme se připravovali na propršený svatební den se počasí nakonec poměrně vydařilo, co myslíte?',
          coverImage: '/weddings/marcela-david-2024/portraits/DSC02305-Edit.jpg',
          images: [
            '/weddings/marcela-david-2024/preparation/MSM-2.jpg',
            '/weddings/marcela-david-2024/ceremony/MSM-10.jpg',
            '/weddings/marcela-david-2024/portraits/MSM-21.jpg',
            '/weddings/marcela-david-2024/reception/MSM-17.jpg',
            '/weddings/marcela-david-2024/dance/MSM-33.jpg'
          ]
        },
        {
          couple: 'Anežka & Štěpán',
          date: '24. srpna 2024',
          location: 'Malá Štáhle',
          slug: 'anezka-stepan',
          shortDescription: 'Příjemný svatební den v pohodové atmosféře ve společnosti rodiny a nejbližších přátel.',
          coverImage: '/weddings/anezka-stepan-2024/portraits/MSM-171.jpg',
          images: [
            '/weddings/anezka-stepan-2024/preparation/MSM-2.jpg',
            '/weddings/anezka-stepan-2024/ceremony/MSM-10.jpg',
            '/weddings/anezka-stepan-2024/portraits/MSM-21.jpg',
            '/weddings/anezka-stepan-2024/reception/MSM-17.jpg',
            '/weddings/anezka-stepan-2024/dance/AS-33.jpg'
          ]
        },
        {
          couple: 'Nelly & Kačka',
          date: '8. června 2024',
          location: 'Fara Mladé Bříště',
          slug: 'nelly-kacka',
          shortDescription: 'Jedinečný svatební den plný upřímných emocí, které prostupovaly každým okamžikem. Na překrásné zahradě mladobříšťské fary zaplněné přáteli, známými i širokou rodinou nebyla o příjemné okamžiky nouze.',
          coverImage: '/weddings/nelly-kacka-2024/portraits/N&K-402.jpg',
          images: [
            '/weddings/nelly-kacka-2024/preparation/NK-2.jpg',
            '/weddings/nelly-kacka-2024/ceremony/NK-10.jpg',
            '/weddings/nelly-kacka-2024/portraits/NK-21.jpg',
            '/weddings/nelly-kacka-2024/reception/NK-17.jpg',
            '/weddings/nelly-kacka-2024/dance/NK-33.jpg'
          ]
        },
        {
          couple: 'Kamila & Pavel',
          date: '9. září 2023',
          location: 'Stodola v meruňkovém sadu',
          slug: 'kamila-pavel',
          shortDescription: 'Skoro až pohádková svatba v okouzlujícím prostředí Stodoly v meruňkovém sadu. Překrásné počasí přidalo svatebnímu dni na jedinečném kouzlu.',
          coverImage: '/weddings/kamila-pavel-2023/portraits/image-174.jpg',
          images: [
            '/weddings/kamila-pavel-2023/preparation/KP-2.jpg',
            '/weddings/kamila-pavel-2023/ceremony/KP-10.jpg',
            '/weddings/kamila-pavel-2023/portraits/KP-21.jpg',
            '/weddings/kamila-pavel-2023/reception/KP-17.jpg',
            '/weddings/kamila-pavel-2023/dance/KP-33.jpg'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-item {
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-10px);
}
</style>
