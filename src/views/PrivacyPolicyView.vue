<template>
  <div class="privacy-policy">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-light mb-8">Zásady ochrany osobních údajů</h1>
      <div class="prose max-w-3xl mx-auto">
        <p>Vaše soukromí je pro nás důležité. Tato stránka popisuje, jak shromažďujeme, používáme a chráníme vaše osobní údaje.</p>
        <h2 class="text-2xl font-light mt-8 mb-4">Shromažďované údaje</h2>
        <p>Shromažďujeme následující údaje:</p>
        <ul>
          <li>Jméno a kontaktní údaje</li>
          <li>Informace o vašich požadavcích</li>
        </ul>
        <h2 class="text-2xl font-light mt-8 mb-4">Použití údajů</h2>
        <p>Vaše údaje používáme k:</p>
        <ul>
          <li>Zpracování vašich požadavků</li>
          <li>Komunikaci s vámi</li>
        </ul>
        <h2 class="text-2xl font-light mt-8 mb-4">Práva uživatelů</h2>
        <p>Máte právo:</p>
        <ul>
          <li>Přístup k vašim údajům</li>
          <li>Opravu nesprávných údajů</li>
          <li>Výmaz údajů</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyView'
}
</script>

<style scoped>
.privacy-policy {
  min-height: 100vh;
  background-color: #fff;
}
</style>
