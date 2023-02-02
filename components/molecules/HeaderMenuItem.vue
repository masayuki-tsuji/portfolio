<script setup>
defineProps({ to: String, icon: String })
</script>

<template>
  <div class="header-menu-item">
    <NuxtLink :to="to" class="header-menu-item-block">
      <span class="material-symbols-outlined">{{ icon }}</span>
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.header-menu-item {
  &-block {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 20px 10px;
  }
}
</style>
