<script setup lang="ts">
interface Props {
  title: string
  icon: string
}

withDefaults(defineProps<Props>(), {
  title: "",
  icon: ""
})
</script>

<template>
  <div class="portfolio">
    <OrganismsHeaderPc class="portfolio-header-pc is-pc" />
    <OrganismsHeaderSp class="portfolio-header-sp is-mobile" />
    <div class="portfolio-content">
      <div class="title-wrapper">
        <v-icon :icon="icon" class="icon fa-fw" />
        <h1 class="title">{{ title }}</h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
$header-width: 250px;
$content-padding: 20px;
.portfolio {
  width: 100%;
  min-height: 100%;
  position: relative;
  &-header-pc {
    width: $header-width;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: $color-grey2;
  }
  &-content {
    position: absolute;
    width: calc(100% - #{$header-width} - (#{$content-padding} * 2));
    top: 0;
    left: $header-width;
    height: auto;
    min-height: 100vh;
    background-color: $color-white;
    padding: 0 $content-padding;
    .title-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $color-site;
      .icon {
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
}

@media (max-width: $break-point-sp) {
  .portfolio {
    position: unset;
    &-header-sp {
      width: 100%;
      height: 64px;
      position: sticky;
      top: 0;
      left: 0;
      color: $color-white;
      background-color: $color-site;
    }
    &-content {
      width: 100%;
      position: unset;
      padding: 0;
      .title-wrapper {
        font-size: 0.8rem;
        margin-left: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
