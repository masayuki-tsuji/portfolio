<script setup>
defineProps({ src: String, href: String })
</script>

<template>
  <a
    :href="href"
    class="sns-icon-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="src" class="sns-icon" alt="sns icon" lazy />
  </a>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.sns-icon-link {
  .sns-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
@media (max-width: $break-point-sp) {
  .sns-icon-link {
    .sns-icon {
      width: 36px;
      height: 36px;
    }
  }
}
</style>
