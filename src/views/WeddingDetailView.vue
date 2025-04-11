<template>
  <div v-if="wedding" class="wedding-detail container mx-auto px-4 py-8">
    <div class="wedding-header mb-12">
      <h1 class="text-5xl font-light tracking-tight text-gray-900 mb-4">
        {{ wedding.couple }}
      </h1>
      <div class="flex items-center text-gray-600 space-x-4">
        <span class="text-lg">{{ wedding.date }}</span>
        <span class="text-xs">•</span>
        <span class="text-lg">{{ wedding.location }}</span>
      </div>
    </div>

    <div class="wedding-story mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Náš příběh</h2>
      <p class="text-gray-700 leading-relaxed">{{ wedding.story }}</p>
    </div>

    <div class="wedding-gallery">
      <div class="category-menu mb-8 flex flex-wrap items-center justify-between">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">Galerie</h2>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="category in categoryMenuItems" 
            :key="category.value"
            @click="selectCategory(category.value)"
            :class="{
              'bg-gray-900 text-white': selectedCategory === category.value,
              'bg-gray-200 text-gray-900': selectedCategory !== category.value
            }"
            class="px-4 py-2 rounded-md text-sm transition-colors duration-300"
          >
            {{ category.label }}
          </button>
        </div>
      </div>

      <div class="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
          v-for="(image, index) in filteredGalleryImages" 
          :key="index" 
          :class="getImageClass(image)"
          class="gallery-item group cursor-pointer overflow-hidden"
          @click="openLightbox(image, index)"
        >
          <div class="relative aspect-square overflow-hidden">
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div 
    v-if="lightboxOpen" 
    class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
    @click.self="closeLightbox"
  >
    <div class="relative max-w-6xl w-full flex items-center">
      <button 
        @click.stop="prevImage" 
        class="text-white text-4xl mr-4 hover:opacity-75 transition-opacity"
      >
        ←
      </button>

      <div class="flex-grow relative">
        <img 
          :src="currentLightboxImage.src" 
          :alt="currentLightboxImage.alt" 
          class="w-full h-auto max-h-[90vh] object-contain"
        />
        <button 
          @click.stop="closeLightbox" 
          class="absolute top-4 right-4 text-white text-3xl hover:opacity-75 transition-opacity"
        >
          ✕
        </button>
      </div>

      <button 
        @click.stop="nextImage" 
        class="text-white text-4xl ml-4 hover:opacity-75 transition-opacity"
      >
        →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingDetailView',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      wedding: null,
      selectedCategory: 'all',
      galleryCategories: {},
      lightboxOpen: false,
      currentLightboxIndex: 0,
      currentLightboxImages: [],
      categoryMenuItems: [
        { label: 'Všechny', value: 'all' },
        { label: 'Přípravy', value: 'preparation' },
        { label: 'Obřad', value: 'ceremony' },
        { label: 'Portréty', value: 'portraits' },
        { label: 'Hostina', value: 'reception' },
        { label: 'Detaily', value: 'details' },
        { label: 'Tanec', value: 'dance' },
        { label: 'Večer', value: 'evening' }
      ],
      categoryTranslations: {
        preparation: 'Přípravy',
        ceremony: 'Obřad',
        portraits: 'Portréty',
        reception: 'Hostina',
        details: 'Detaily',
        dance: 'Tanec',
        evening: 'Večerní atmosféra'
      },
      debugInfo: ''
    }
  },
  computed: {
    filteredGalleryImages() {
      if (this.selectedCategory === 'all') {
        return Object.values(this.galleryCategories).flat()
      }
      
      return this.galleryCategories[this.selectedCategory] || []
    },
    currentLightboxImage() {
      return this.currentLightboxImages[this.currentLightboxIndex] || {}
    }
  },
  created() {
    console.log('Created hook called with slug:', this.slug)
    
    const weddingDetails = {
      'marcela-david': {
        couple: 'Marcela & David',
        date: '17. srpna 2024',
        location: 'Pohoda Nárameč',
        story: 'Marcela a David prožili magický den plný lásky a emocí. Jejich svatba byla jako poetická cesta dvou spřízněných duší, kde každý okamžik vyprávěl jejich jedinečný příběh lásky.',
        vendors: [
          { type: 'Svatební místo', name: 'Pohoda Nárameč' },
          { type: 'Catering', name: 'Místní restaurace' },
          { type: 'Květiny', name: 'Venkovské květinářství' },
          { type: 'Fotograf', name: 'Martin Smolik Photography' }
        ],
        gallery: this.generateMockGallery(40, 'marcela-david')
      },
      'anezka-stepan': {
        couple: 'Anežka & Štěpán',
        date: '24. srpna 2024',
        location: 'Malá Štáhle',
        story: 'Anežka a Štěpán oslavili svou lásku ve stylovém rustikálním prostředí statku Kaplíř. Jejich svatba byla jako poetická cesta dvou spřízněných duší, kde každý detail vyprávěl jejich jedinečný příběh. Od vintage dekorací až po emotivní taneční chvíle, jejich den byl plný lásky a radosti.',
        vendors: [
          { type: 'Svatební místo', name: 'Malá Štáhle' },
          { type: 'Catering', name: 'Veselá' },
          { type: 'Květiny', name: 'Venkovské květiny' },
          { type: 'Fotograf', name: 'Martin Smolik Photography' }
        ],
        gallery: this.generateMockGallery(40, 'anezka-stepan')
      },
      'nelly-kacka': {
        couple: 'Nelly & Kačka',
        date: '8. června 2024',
        location: 'Fara Mladé Bříště',
        story: 'Nelly a Kačka oslavily svou lásku v intimním prostředí fary v Mladém Bříšti. Jejich svatba byla plná něhy, emocí a autentických okamžiků, které vyprávěly jejich jedinečný příběh lásky.',
        vendors: [
          { type: 'Svatební místo', name: 'Fara Mladé Bříště' },
          { type: 'Catering', name: 'Místní kuchyně' },
          { type: 'Květiny', name: 'Venkovské květinářství' },
          { type: 'Fotograf', name: 'Martin Smolik Photography' }
        ],
        gallery: this.generateMockGallery(40, 'nelly-kacka')
      },
      'kamila-pavel': {
        couple: 'Kamila & Pavel',
        date: '9. září 2023',
        location: 'Stodla v Meruňkovém sadu',
        story: 'Kamila a Pavel oslavili svou lásku v malebné stodole uprostřed rozkvetlého meruňkového sadu. Jejich svatba byla jako poetická píseň plná něhy, radosti a autentických okamžiků, které vyprávěly jejich jedinečný příběh lásky.',
        vendors: [
          { type: 'Svatební místo', name: 'Stodla v Meruňkovém sadu' },
          { type: 'Catering', name: 'Místní farmářská kuchyně' },
          { type: 'Květiny', name: 'Venkovské květinářství' },
          { type: 'Fotograf', name: 'Martin Smolik Photography' }
        ],
        gallery: this.generateMockGallery(40, 'kamila-pavel')
      }
    }

    try {
      console.log('Available wedding details:', Object.keys(weddingDetails))
      
      if (!this.slug) {
        this.debugInfo = 'No slug provided'
        console.error('No slug provided')
        return
      }

      const wedding = weddingDetails[this.slug]
      
      if (!wedding) {
        this.debugInfo = `No wedding found for slug: ${this.slug}`
        console.error(`No wedding found for slug: ${this.slug}`)
        return
      }

      this.wedding = wedding
      this.organizeGallery()
      console.log('Wedding set successfully:', this.wedding)
    } catch (error) {
      this.debugInfo = `Error in created hook: ${error.message}`
      console.error('Error in created hook:', error)
    }
  },
  beforeRouteEnter(to, from, next) {
    // Scroll to top when entering the route
    next(vm => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    })
  },
  mounted() {
    // Scroll to the top of the page when component is mounted
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  },
  methods: {
    generateMockGallery(count, wedding = null) {
      // If a specific wedding is provided, use its local images
      if (wedding === 'marcela-david') {
        const categories = [
          'preparation', 'ceremony', 'portraits', 
          'reception', 'details', 'dance', 'evening'
        ]

        const imageFiles = {
          preparation: ['DSC00018', 'DSC00160', 'DSC00175', 'MSM09869', 'MSM09919', 'MSM09929'],
          ceremony: ['DSC00288', 'DSC00292', 'DSC00307', 'DSC00343', 'DSC00370', 'DSC00650', 'DSC00697', 'DSC00725'],
          portraits: ['DSC00905', 'DSC01397', 'DSC02191', 'DSC02305-Edit', 'MSM00270', 'MSM00492', 'MSM00586', 'MSM00638'],
          reception: ['DSC00797', 'DSC01445', 'DSC01653', 'DSC01806', 'DSC01820', 'MSM00147', 'MSM00154', 'MSM00292-Edit', 'MSM00332', 'MSM00377', 'MSM00469'],
          details: ['DSC00031', 'MSM00212', 'MSM09824-Edit'],
          dance: ['DSC02071', 'DSC02153'],
          evening: ['DSC02539', 'DSC02588', 'DSC02596', 'DSC02797', 'MSM00698']
        }

        const galleryImages = []
        const sizingPatterns = [
          // Uneven sizing pattern that fills the grid
          [
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ],
          [
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ]
        ]

        categories.forEach(category => {
          imageFiles[category].forEach((filename, index) => {
            const fullPath = `/weddings/marcela-david-2024/${category}/${filename}.jpg`
            
            // Cycle through sizing patterns
            const sizing = sizingPatterns[Math.floor(index / 6) % sizingPatterns.length]
            const sizeClass = sizing[index % sizing.length]

            galleryImages.push({
              src: fullPath,
              alt: `Marcela & David - ${category} - ${index + 1}`,
              category: category,
              sizeClass: sizeClass,
              width: 1600,
              height: 1067
            })
          })
        })

        return galleryImages
      }

      // Add support for Anežka & Štěpán wedding
      if (wedding === 'anezka-stepan') {
        const categories = [
          'preparation', 'ceremony', 'portraits', 
          'reception', 'details', 'evening'
        ]

        const imageFiles = {
          preparation: ['MSM-1', 'MSM-2', 'MSM-5'],
          ceremony: ['MSM-6', 'MSM-7', 'MSM-11', 'MSM-13', 'MSM-18', 'MSM-20', 'MSM-25', 'MSM-28', 'MSM-31', 'MSM-32', 'MSM-34', 'MSM-36', 'MSM-39', 'MSM-43', 'MSM-49', 'MSM-57', 'MSM-58', 'MSM-59', 'MSM-76'],
          portraits: ['MSM-131', 'MSM-136', 'MSM-137', 'MSM-141', 'MSM-149', 'MSM-151', 'MSM-156', 'MSM-166', 'MSM-167', 'MSM-169', 'MSM-170', 'MSM-171', 'MSM-173', 'MSM-174'],
          reception: ['MSM-78', 'MSM-91', 'MSM-101', 'MSM-106'],
          details: ['MSM-4'],
          evening: ['MSM-178']
        }

        const galleryImages = []
        const sizingPatterns = [
          // Uneven sizing pattern that fills the grid
          [
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ],
          [
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ]
        ]

        categories.forEach(category => {
          imageFiles[category].forEach((filename, index) => {
            const fullPath = `/weddings/anezka-stepan-2024/${category}/${filename}.jpg`
            
            // Cycle through sizing patterns
            const sizing = sizingPatterns[Math.floor(index / 6) % sizingPatterns.length]
            const sizeClass = sizing[index % sizing.length]

            galleryImages.push({
              src: fullPath,
              alt: `Anežka & Štěpán - ${category} - ${index + 1}`,
              category: category,
              sizeClass: sizeClass,
              width: 1600,
              height: 1067
            })
          })
        })

        return galleryImages
      }

      // Add support for Nelly & Kačka wedding
      if (wedding === 'nelly-kacka') {
        const categories = [
          'preparation', 'ceremony', 'portraits', 
          'reception', 'details', 'dance', 'evening'
        ]

        const imageFiles = {
          preparation: ['N&K-12', 'N&K-18', 'N&K-20', 'N&K-34', 'N&K-38', 'N&K-44', 'N&K-47'],
          ceremony: ['N&K-83', 'N&K-90', 'N&K-93', 'N&K-97', 'N&K-109', 'N&K-113', 'N&K-118', 'N&K-124', 'N&K-151', 'N&K-228'],
          portraits: ['N&K-319', 'N&K-321', 'N&K-322', 'N&K-325', 'N&K-361', 'N&K-402', 'N&K-406', 'N&K-407'],
          reception: ['N&K-285', 'N&K-286', 'N&K-421', 'N&K-431', 'N&K-465', 'N&K-466', 'N&K-469', 'N&K-544','N&K-478', 'N&K-494'],
          details: ['N&K-23', 'N&K-30'],
          dance: ['N&K-506'],
          evening: ['N&K-545', 'N&K-557', 'N&K-571']
        }

        const galleryImages = []
        const sizingPatterns = [
          // Uneven sizing pattern that fills the grid
          [
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ],
          [
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ]
        ]

        categories.forEach(category => {
          imageFiles[category].forEach((filename, index) => {
            const fullPath = `/weddings/nelly-kacka-2024/${category}/${filename}.jpg`
            
            // Cycle through sizing patterns
            const sizing = sizingPatterns[Math.floor(index / 6) % sizingPatterns.length]
            const sizeClass = sizing[index % sizing.length]

            galleryImages.push({
              src: fullPath,
              alt: `Nelly & Kačka - ${category} - ${index + 1}`,
              category: category,
              sizeClass: sizeClass,
              width: 1600,
              height: 1067
            })
          })
        })

        return galleryImages
      }

      // Add support for Kamila & Pavel wedding
      if (wedding === 'kamila-pavel') {
        const categories = [
          'preparation', 'ceremony', 'portraits', 
          'reception', 'details', 'dance', 'evening'
        ]

        const imageFiles = {
          preparation: ['image-2', 'image-4', 'image-18', 'image-25'],
          ceremony: ['image-27', 'image-30', 'image-31', 'image-32', 'image-33', 'image-42', 'image-43', 'image-44', 'image-55', 'image-57', 'image-58'],
          portraits: ['image-6', 'image-7', 'image-9', 'image-10', 'image-156', 'image-157', 'image-169', 'image-170', 'image-171', 'image-174', 'image-175', 'image-180', 'image-181', 'image-182', 'image-183', 'image-184', 'image-185', 'image-186', 'image-187'],
          reception: ['image-60', 'image-61', 'image-64', 'image-80', 'image-97', 'image-110', 'image-133', 'image-160', 'image-163'],
          details: ['image-20', 'image-21'],
          dance: ['image-141'],
          evening: ['image-195', 'image-196']
        }

        const galleryImages = []
        const sizingPatterns = [
          // Uneven sizing pattern that fills the grid
          [
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ],
          [
            'md:col-span-1 md:row-span-2', // Tall image
            'md:col-span-2 md:row-span-1', // Wide image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-2 md:row-span-2', // Large image
            'md:col-span-1 md:row-span-1', // Small image
            'md:col-span-1 md:row-span-1'  // Small image
          ]
        ]

        categories.forEach(category => {
          imageFiles[category].forEach((filename, index) => {
            const fullPath = `/weddings/kamila-pavel-2023/${category}/${filename}.jpg`
            
            // Cycle through sizing patterns
            const sizing = sizingPatterns[Math.floor(index / 6) % sizingPatterns.length]
            const sizeClass = sizing[index % sizing.length]

            galleryImages.push({
              src: fullPath,
              alt: `Kamila & Pavel - ${category} - ${index + 1}`,
              category: category,
              sizeClass: sizeClass,
              width: 1600,
              height: 1067
            })
          })
        })

        return galleryImages
      }

      // Default stock photo gallery for other weddings
      const images = [
        { 
          src: 'https://images.unsplash.com/photo-1519741497674-611481863552',
          width: 1600,
          height: 1067
        },
        { 
          src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
          width: 1200,
          height: 1800
        },
        { 
          src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
          width: 1800,
          height: 1200
        },
        { 
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
          width: 1067,
          height: 1600
        }
      ]

      const sizingPatterns = [
        [
          'md:col-span-2 md:row-span-2', // Large image
          'md:col-span-1 md:row-span-1', // Small image
          'md:col-span-1 md:row-span-2', // Tall image
          'md:col-span-2 md:row-span-1', // Wide image
          'md:col-span-1 md:row-span-1', // Small image
          'md:col-span-1 md:row-span-1'  // Small image
        ],
        [
          'md:col-span-1 md:row-span-2', // Tall image
          'md:col-span-2 md:row-span-1', // Wide image
          'md:col-span-1 md:row-span-1', // Small image
          'md:col-span-2 md:row-span-2', // Large image
          'md:col-span-1 md:row-span-1', // Small image
          'md:col-span-1 md:row-span-1'  // Small image
        ]
      ]

      return Array.from({ length: count }, (_, index) => {
        const image = images[index % images.length]
        const sizing = sizingPatterns[Math.floor(index / 6) % sizingPatterns.length]
        
        return {
          src: `${image.src}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`,
          alt: `Wedding moment ${index + 1}`,
          category: ['preparation', 'ceremony', 'portraits', 'reception', 'details', 'evening'][index % 6],
          sizeClass: sizing[index % sizing.length],
          width: image.width,
          height: image.height
        }
      })
    },
    organizeGallery() {
      // Group images by category while maintaining original order
      this.galleryCategories = this.wedding.gallery.reduce((acc, image) => {
        if (!acc[image.category]) {
          acc[image.category] = [];
        }
        acc[image.category].push(image);
        return acc;
      }, {});
    },
    selectCategory(category) {
      this.selectedCategory = category
    },
    openLightbox(image, index) {
      this.currentLightboxIndex = index;
      this.currentLightboxImages = this.filteredGalleryImages;
      this.lightboxOpen = true;
      this.$nextTick(() => {
        this.setupKeyboardNavigation()
      })
    },
    closeLightbox() {
      this.lightboxOpen = false
      this.removeKeyboardNavigation()
    },
    setupKeyboardNavigation() {
      window.addEventListener('keydown', this.handleKeyboardNavigation)
    },
    removeKeyboardNavigation() {
      window.removeEventListener('keydown', this.handleKeyboardNavigation)
    },
    handleKeyboardNavigation(event) {
      if (!this.lightboxOpen) return

      switch(event.key) {
        case 'ArrowLeft':
          this.prevImage()
          event.preventDefault()
          break
        case 'ArrowRight':
          this.nextImage()
          event.preventDefault()
          break
        case 'Escape':
          this.closeLightbox()
          event.preventDefault()
          break
      }
    },
    nextImage() {
      this.currentLightboxIndex = (this.currentLightboxIndex + 1) % this.currentLightboxImages.length
    },
    prevImage() {
      this.currentLightboxIndex = (this.currentLightboxIndex - 1 + this.currentLightboxImages.length) % this.currentLightboxImages.length
    },
    getImageClass(image) {
      const aspectRatio = image.width / image.height
      if (aspectRatio > 1.5) return 'wide'
      if (aspectRatio < 0.7) return 'tall'
      return 'square'
    },
  },
  beforeUnmount() {
    this.removeKeyboardNavigation()
  },
}
</script>

<style scoped>
/* No additional custom styles needed, using Tailwind classes */
</style>
