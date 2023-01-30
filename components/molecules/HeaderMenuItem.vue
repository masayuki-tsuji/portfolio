<script setup>
defineProps({ to: String, icon: String })
</script>

<template>
  <div class="header-menu-item">
    <NuxtLink :to="to" class="header-menu-item-block">
      <span>
        <v-icon :icon="icon" class="fa-fw" />
      </span>
      <span>
        <slot></slot>
      </span>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.header-menu-item {
  &-block {
    display: block;
    padding: 15px 5px;
  }
}
</style>
