<script setup lang="ts">
useHead({
  title: "Contact",
  script: [{ src: 'https://sdk.form.run/js/v2/embed.js' }],
  meta: [
    { name: "robots", content: "none" }
  ]
})
</script>

<template>
  <TemplatesPortfolio title="Contact" icon="mail">
    <div
      class="formrun-embed"
      data-formrun-form="@tu-kun-irad"
      data-formrun-redirect="true"
    ></div>
  </TemplatesPortfolio>
</template>

<style lang="scss" scoped>
.formrun-embed {
  width: 100%;
}
</style>
