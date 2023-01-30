<script setup>
defineProps({ src: String })
</script>

<template>
  <img :src="src" class="root-icon" alt="irad" lazy />
</template>

<style lang="scss" scoped>
.root-icon {
  width: 100%;
  height: 100%;
}
</style>
