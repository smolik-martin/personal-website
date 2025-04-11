<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl font-light text-gray-900 mb-4">Co říkají naši novomanželé</h2>
        <p class="text-xl text-gray-600">Poslechněte si příběhy párů, jejichž výjimečné chvíle jsem zachytil.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 p-8 relative flex flex-col">
          <div class="text-gray-300 absolute top-4 left-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p class="text-gray-600 mb-6 mt-10 italic leading-relaxed text-base">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center mt-auto">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-gray-500">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          quote: 'Pro náš svatební den jsme si opravdu nemohli vybrat lepšího fotografa. Martin byl po celý den naprosto skvělý – vždy ochotný, plný nápadů a s tak pozitivní a přirozenou energií, že z nás okamžitě spadla veškerá nervozita. Díky jeho přístupu bylo focení naprosto pohodové a přirozené. Výsledné fotografie nám doslova vyrazily dech. Každý snímek zachytil atmosféru i emoce našeho dne tak dokonale, že se nám při jejich prohlížení vehnaly slzy do očí. Byla to radost i dojetí v jednom. Bylo nám velkou ctí mít u sebe člověka, který svou práci dělá s upřímným nadšením, profesionalitou a skutečným zájmem o lidi. Martine, děkujeme z celého srdce!',
          name: 'Marcela & David',
          location: 'Svatba 17. srpna 2024',
          avatar: '/weddings/marcela-david-2024/portraits/DSC01397.jpg'
        },
        {
          quote: 'Profesionální přístup, skvělá komunikace a nádherné fotografie. Nemohli jsme být spokojenější!',
          name: 'Nelly & Kačka',
          location: 'Svatba 8. června 2024',
          avatar: '/weddings/nelly-kacka-2024/portraits/N&K-321.jpg'
        },
        {
          quote: 'Martin je profesionál, který vždy přesně věděl, jak nás správně usměrnit při focení. Skvěle využíval přirozené světlo, díky čemuž jsou fotografie krásné a prosvětlené. Rozhodně doporučuji!',
          name: 'Anežka & Štěpán',
          location: 'Svatba 24. srpna 2024',
          avatar: '/weddings/anezka-stepan-2024/portraits/MSM-156.jpg'
        }
      ]
    }
  }
}
</script>
