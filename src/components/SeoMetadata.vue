<template>
  <div class="seo-metadata"></div>
</template>

<script>
export default {
  name: 'SeoMetadata',
  metaInfo() {
    return {
      title: 'Martin Smolík: Svatební fotograf s příběhem',
      meta: [
        // Primary SEO Meta Tags
        { 
          name: 'description', 
          content: 'Profesionální svatební fotograf v Brně. Zachycuji autentické emoce a jedinečné momenty vašeho svatebního dne s uměleckým a citlivým přístupem.' 
        },
        
        // Open Graph Tags
        { property: 'og:type', content: 'business.business' },
        { property: 'og:title', content: 'Martin Smolík - Svatební fotografie' },
        { 
          property: 'og:description', 
          content: 'Umělecké svatební foto zachycující přirozené emoce a jedinečné okamžiky. Profesionální fotograf se sídlem v Brně.' 
        },
        { property: 'og:url', content: 'https://www.smolik-martin.cz' },
        { 
          property: 'og:image', 
          content: 'https://smolik-martin.cz/images/_MS_8179_crop.jpeg' 
        },
        { property: 'business:contact:email', content: 'kontakt@smolik-martin.cz' },
        { property: 'business:contact:phone_number', content: '+420 773 630 881' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Martin Smolík - Svatební fotograf' },
        { 
          name: 'twitter:description', 
          content: 'Profesionální svatební fotografie s důrazem na přirozenost a emoce. Brno a celá Česká republika.' 
        },
        { 
          name: 'twitter:image', 
          content: 'https://smolik-martin.cz/images/_MS_8179_crop.jpeg' 
        },

        // Keywords
        { 
          name: 'keywords', 
          content: 'svatební fotograf, svatební plánování, svatba na klíč, luxusní svatba, svatební místo, organizace svatby, svatební inspirace, Brno, fotografie' 
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Martin Smolík Svatební Fotografie',
            'image': 'https://smolik-martin.cz/images/_MS_8179_crop.jpeg',
            'description': 'Profesionální svatební fotograf specializující se na autentické a citlivé zachycení vašeho svatebního dne.',
            'telephone': '+420 773 630 881',
            'email': 'kontakt@smolik-martin.cz',
            'url': 'https://www.smolik-martin.cz',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Brno',
              'addressCountry': 'CZ'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': null,
              'longitude': null
            },
            'priceRange': '$$',
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ],
              'opens': '00:00',
              'closes': '23:59'
            },
            'serviceType': [
              'Svatební fotografie',
              'Portrétní fotografie',
              'Předsvatební focení'
            ],
            'areaServed': {
              '@type': 'GeoCircle',
              'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'addressLocality': 'Brno',
                'addressRegion': 'Jihomoravský kraj'
              },
              'geoRadius': '100 km'
            },
            'offers': {
              '@type': 'Offer',
              'description': 'Profesionální svatební fotografické služby',
              'priceCurrency': 'CZK',
              'hasPriceSpecification': {
                '@type': 'PriceSpecification',
                'minPrice': '20000',
                'maxPrice': '35000'
              }
            }
          })
        }
      ]
    }
  }
}
</script>
