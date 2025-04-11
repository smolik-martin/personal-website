<template>
  <div class="faq-section">
    <div class="space-y-6">
      <div 
        v-for="(faq, index) in visibleFaqs" 
        :key="index" 
        class="border-b border-gray-200 pb-6"
      >
        <button 
          @click="faq.isOpen = !faq.isOpen"
          class="flex justify-between items-center w-full text-left focus:outline-none"
        >
          <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 text-gray-500 transition-transform" 
            :class="{ 'transform rotate-180': faq.isOpen }"
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div v-if="faq.isOpen" class="mt-4 text-gray-600 leading-relaxed">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  // Očekáváme předání prop "category", kde "all" znamená všechny FAQ, 
  // nebo konkrétní kategorii, např. "booking", "photos" apod.
  props: {
    category: {
      type: String,
      default: 'all'
    },
    // Volitelně lze omezit počet zobrazených FAQ přes prop limit
    limit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      allFaqs: [
        // Rezervace a platby
        {
          question: 'Jak daleko dopředu je potřeba rezervovat termín?',
          answer: 'Doporučuji rezervovat termín 9-12 měsíců předem, zvláště pro svatby v hlavní sezóně (květen-říjen). Oblíbené termíny bývají obsazeny i 18 měsíců dopředu.',
          isOpen: false,
          category: 'booking'
        },
        {
          question: 'Jak probíhá rezervace a platba?',
          answer: 'Pro závaznou rezervaci vašeho svatebního data potřebuji souhlas se smluvními podmínkami a 25% nevratnou zálohu. Zbývající částka je splatná do pěti pracovních dní ode dne svatby. Přijímám platby bankovním převodem nebo v hotovosti.',
          isOpen: false,
          category: 'booking'
        },
        {
          question: 'Nabízíte flexibilní platební plány?',
          answer: 'Ano, chápu, že svatby s sebou nesou mnoho výdajů. Po počáteční záloze můžete rozdělit zbývající částku do měsíčních plateb až do vašeho svatebního data.',
          isOpen: false,
          category: 'booking'
        },
        {
          question: 'Jaká je vaše cenová struktura?',
          answer: 'Celodenní svatební fotografické balíčky začínají na 20 000 Kč za Základní balíček a končí na 27 500 Kč za Exkluzivní balíček. Každý balíček zahrnuje různý počet hodin pokrytí, počet fotografů a výstupy. Navštivte prosím naši stránku Služby a Ceník pro podrobné informace o cenách.',
          category: 'booking',
          isOpen: false
        },
        {
          question: 'Vyžadujete zálohu pro rezervaci?',
          answer: 'Ano, vyžaduji 25% nevratnou zálohu a souhlas se smluvními podmínkami pro zajištění vašeho svatebního termínu. Zbývající částka je splatná do pěti dní po datu vaší svatby. Na požádání nabízím splátkové plány pro doplacení zbývající částky.',
          category: 'booking',
          isOpen: false
        },
        {
          question: 'Cestujete za svatbami?',
          answer: 'Ano! Žádná lokalita není problém. Cestování v okruhu 50 km od Brna je zahrnuto v mých balíčcích. Pro destinace mimo tento okruh si účtuji 3 Kč/km. U mezinárodních svateb požaduji pokrytí cestovních výdajů a ubytování.',
          category: 'booking',
          isOpen: false
        },
        // Fotografie a dodání
        {
          question: 'Kolik fotografií obdržíme?',
          answer: 'Počet se liší podle vašeho balíčku a detailů svatebního dne, ale můžete očekávat přibližně 40-75 upravených snímků za hodinu fotografování.',
          isOpen: false,
          category: 'photos'
        },
        {
          question: 'Jak dlouho trvá, než dostaneme fotografie?',
          answer: 'Dodání kompletního souboru fotografii trvá obvykle 1-4 týdnů od data svatby. Výběr několika prvních fotografii vám mohu poslat již do týdne po svatbě.',
          isOpen: false,
          category: 'photos'
        },
        {
          question: 'V jakém formátu dostaneme fotografie?',
          answer: 'Všechny fotografie obdržíte vždy v digitální podobě ve vysokém rozlišení, vhodném pro tisk i sdílení online. Fotografie jsou dodávány prostřednictvím online galerie s možností stažení. Fotografie je možné dodat jak na USB nebo v tištěné podobě v premiovém fotoalbu v závislosti na zvoleném balíčku.',
          isOpen: false,
          category: 'photos'
        },
        // Cestování a lokace
        {
          question: 'Cestujete za focením mimo Jihomoravský kraj?',
          answer: 'Ano, cestuji po celé České republice i do zahraničí. Cestování v okruhu 50 km od Brna je zahrnuto ve všech balíčcích. Pro destinace mimo tento okruh si účtuji cestovní poplatek ve výši 3 Kč/km.',
          isOpen: false,
          category: 'travel'
        },
        // Vybavení a záloha
        {
          question: 'Máte záložní vybavení?',
          answer: 'Absolutně! Vždy s sebou nosím dva fotoaparáty, objektivy a osvětlovací techniku, abych byl připraven na jakoukoli situaci.',
          isOpen: false,
          category: 'equipment'
        },
        // Styl a přístup
        {
          question: 'Jaký je váš fotografický styl?',
          answer: 'Můj styl kombinuje dokumentární přístup s uměleckými portréty. Snažím se zachytit autentické momenty a emoce, které vyprávějí příběh vašeho dne, doplněné o kreativně komponované portréty.',
          isOpen: false,
          category: 'style'
        },
        {
          question: 'Upravujete všechny fotografie?',
          answer: 'Ano, každá fotografie, kterou obdržíte, prochází pečlivou úpravou pro zajištění konzistentního vzhledu a nejvyšší kvality. Úpravy zahrnují korekci barev, expozice a celkový vzhled snímku.',
          isOpen: false,
          category: 'style'
        },
        // Proces
        {
          question: 'Co se stane po rezervaci?',
          answer: 'Po rezervaci vám zašlu uvítací tipy pro přípravu naší spolupráce. Přibližně 6-8 týdnů před vaší svatbou naplánujeme závěrečnou schůzku k projednání vašeho harmonogramu, seznamu snímků a jakýchkoli speciálních požadavků.',
          isOpen: false,
          category: 'process'
        },
        {
          question: 'Nabízíte předsvatební fotografie?',
          answer: 'Ano! Předsvatební fotografie jsou součástí Exkluzivního balíčku a mohou být přidány i ke zbylým balíčkům. Předsvatební focení vřele doporučuji, protože nám dává šanci pracovat spolu ještě před svatebním dnem, pomáhá vám cítit se pohodlně před fotoaparátem a poskytuje vám obrázky pro oznámení nebo vaše svatební webové stránky.',
          isOpen: false,
          category: 'process'
        },
        {
          question: 'Jak byste popsal svůj fotografický styl?',
          answer: 'Můj fotografický styl kombinuje uměleckou fotografii s přirozenou fotoreportáží. Zaměřuji se na zachycení autentických okamžiků a emocí. Můj styl úpravy fotografií je čistý, věrný barvám a nadčasový, vyhýbám se moderním filtrům, které mohou v průběhu let působit zastarale. Věřím, že vaše svatební fotografie by měly vypadat stejně krásně za 50 let jako dnes.',
          isOpen: false,
          category: 'process'
        },
        // Svatební den
        {
          question: 'Co se stane, když bude v den naší svatby pršet?',
          answer: 'Jsem dobře připraven na všechny povětrnostní podmínky! Vždy prozkoumávám záložní místa pro portréty i v případě nepříznivého počasí.',
          isOpen: false,
          category: 'wedding-day'
        },
        {
          question: 'Pomáháte s časovým harmonogramem svatebního dne?',
          answer: 'Ano, rád vám pomůžu s plánováním svatebního dne. Poskytnu pokyny k časovému harmonogramu, abychom zajistili, že bude dostatek času na všechna fotografie, které chcete. Pomůžu vám naplánovat nejlepší čas pro portréty na základě osvětlení a vaší lokace.',
          isOpen: false,
          category: 'wedding-day'
        },
        {
          question: 'Pořizujete formální rodinné portréty?',
          answer: 'Ano, věřím, že rodinné portréty jsou důležitou součástí svatební fotografie. Před svatbou si prosím vytvořte seznam konkrétních rodinných skupin, které byste chtěli zdokumentovat. Doporučuji se poté tohoto seznamu držet, aby byla zajištěna efektivita a bylo více času na portréty páru.',
          isOpen: false,
          category: 'wedding-day'
        },
        // Po svatebním dni
        {
          question: 'Dostaneme RAW, neupravené soubory?',
          answer: 'RAW soubory neposkytuji, protože nereprezentují moji finální práci. Každý dodaný snímek byl pečlivě vybrán a profesionálně upraven tak, aby splňoval mé standardy. Vaše galerie bude obsahovat soubory JPG ve vysokém rozlišení, které jsou ideální pro tisk a sdílení.',
          isOpen: false,
          category: 'after'
        },
        {
          question: 'Nabízíte svatební alba?',
          answer: 'Ano, nabízím ručně vyráběná alba premiové kvality. Exkluzivní balíček zahrnuje svatební album v ceně a může být přidáno i ke zbývajícím balíčkům. Společně s tvůrkyní alb Marcelou Voknerovou vás provedeme procesem návrhu alba a pomůžeme vám vybrat snímky, které nejlépe vyprávějí příběh vašeho dne. K dispozici jsou také rodičovská alba a další kopie.',
          isOpen: false,
          category: 'after'
        },
        // Technické detaily
        {
          question: 'Jaké vybavení používáte?',
          answer: 'Používám profesionální fotoaparáty a objektivy Sony. Vždy s sebou mám dvě těla fotoaparátů a minimálně dva objektivy, profesionální osvětlovací vybavení, dostatek paměťových karet a baterií, abych byl připraven na jakoukoli situaci.',
          isOpen: false,
          category: 'technical'
        },
        {
          question: 'Co se stane, když onemocníte nebo nebudete moci fotografovat naši svatbu?',
          answer: 'V případě vzácné nouzové situace mám síť profesionálních fotografů s podobnými styly, kteří mohou zaskočit. Vaše svatba bude pokryta za každých okolností. Nikdy jsem nezmeškal svatbu kvůli nemoci nebo nouzové situaci, ale věřím v připravenost na všechny eventuality.',
          isOpen: false,
          category: 'technical'
        }
      ]
    }
  },
  computed: {
    visibleFaqs() {
      // Pokud prop "category" je "all", vrátíme všechny FAQ, jinak jen FAQ odpovídající zadané kategorii
      const filteredFaqs = this.allFaqs.filter(faq => 
        this.category === 'all' || faq.category === this.category
      );
      
      // Pokud byl nastaven limit (>0), omezíme výstup na daný počet FAQ
      return this.limit > 0 
        ? filteredFaqs.slice(0, this.limit) 
        : filteredFaqs;
    }
  }
}
</script>