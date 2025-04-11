<template>
  <div class="pricing">
    <!-- Page Header -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-light text-gray-900 mb-4">Ceník</h1>
          <p class="text-xl text-gray-600">Nabídka svatebních fotografických služeb</p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Věřím, že vaše svatební fotografie jsou jednou z nejdůležitějších investic, které v životě učiníte. 
            Dlouho poté, co je dort sněden a květiny uvadnou, vaše fotografie zůstanou jako hmatatelné vzpomínky na váš výjimečný den.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Moje balíčky jsou vytvořeny tak, aby poskytovaly možnosti pro různé potřeby a rozpočty, a zároveň zajistili, že každý pár obdrží 
            výjimečnou kvalitu a služby, které definují moji značku.
          </p>
        </div>
      </div>
    </section>
    <Pricing />

    <!-- FAQ Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-light text-center text-gray-900 mb-8">Často kladené dotazy k rezervacím</h2>
          <Faq category="booking" />
        </div>
      </div>
    </section>
  </div>
</template>

<!-- FAQ Section -->
<script>
import Pricing from '../components/pricing.vue';
import Faq from '../components/Faq.vue';

export default {
  name: 'PricingView',
  components: {
    Pricing,
    Faq
  },
  data() {
    return {
    }
  },
  created() {
    console.log('PricingView component created')
  },
  mounted() {
    console.log('PricingView component mounted')
  },
  activated() {
    console.log('PricingView component activated')
  }
}
</script>

<style scoped>
.pricing {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
</style>
