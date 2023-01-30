<script setup>
defineProps({ src: String })
</script>

<template>
  <img :src="src" class="user-icon" alt="masayuki tsuji's profile image" lazy />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.user-icon {
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: 100% 0%;
  border-radius: 50%;
}
</style>
