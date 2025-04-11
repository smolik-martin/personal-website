<template>
  <div class="faq">
    <!-- Page Header -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-light text-gray-900 mb-4">Často kladené dotazy</h1>
          <p class="text-xl text-gray-600">Vše, co potřebujete vědět o mých svatebních fotografických službách</p>
        </div>
      </div>
    </section>

    <!-- FAQ Categories -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'px-6 py-2 font-light transition-colors duration-300',
                activeCategory === category.id 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <!-- Přenášíme prop "category" se správnou hodnotou -->
        <Faq :category="activeCategory" />
      </div>
    </section>

    <!-- Still Have Questions -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-6">Máte další otázky?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Jsem tu, abych vám pomohl! Kontaktujte mě přímo a co nejdříve se vám ozvu.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/contact" class="inline-block px-8 py-3 bg-gray-900 text-white font-light tracking-wide uppercase hover:bg-gray-800 transition duration-300">
              Kontaktujte mě
            </router-link>
            <a href="mailto:kontakt@smolik-martin.com" class="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wide uppercase hover:bg-gray-900 hover:text-white transition duration-300">
              Pošlete mi e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Faq from '@/components/Faq.vue';

export default {
  name: 'FaqView',
  components: {
    Faq
  },
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Všechny otázky' },
        { id: 'booking', name: 'Rezervace a ceny' },
        { id: 'process', name: 'Můj proces' },
        { id: 'wedding-day', name: 'Svatební den' },
        { id: 'after', name: 'Po svatbě' },
        { id: 'technical', name: 'Technické dotazy' }
      ]
    };
  }
};
</script>