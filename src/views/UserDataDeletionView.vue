<template>
  <div class="user-data-deletion">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-light mb-8">Výmaz osobních údajů</h1>
      <div class="prose max-w-3xl mx-auto">
        <p>Pokud si přejete smazat své osobní údaje, postupujte podle následujících kroků:</p>
        <ol>
          <li>Napište e-mail na adresu <a href="mailto:info@martinsmolik.com" class="text-blue-500 hover:underline">info@martinsmolik.com</a>.</li>
          <li>Uveďte v e-mailu své jméno a e-mailovou adresu.</li>
          <li>Vaše údaje budou smazány do 30 dnů.</li>
        </ol>
        <p class="mt-8">Pokud máte jakékoli dotazy, neváhejte nás kontaktovat.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDataDeletionView'
}
</script>

<style scoped>
.user-data-deletion {
  min-height: 100vh;
  background-color: #fff;
}
</style>
