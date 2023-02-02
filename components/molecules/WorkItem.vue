<script setup lang="ts">
interface Props {
  image: string
  title: string
  overviews: string[]
  reverse: boolean
}

const props = withDefaults(defineProps<Props>(), {
  image: "",
  title: "",
  overviews: () => [],
  reverse: false
})

const displayOverview = computed(() => props.overviews.join("\n"))
</script>

<template>
  <div class="work-item" :class="{ reverse: reverse }">
    <img class="image" :src="image" alt="work image" lazy />
    <div class="content">
      <h2 class="title" v-text="title"></h2>
      <span class="overview" v-text="displayOverview"></span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '@/assets/scss/variables';
.work-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 30px;
  .image {
    width: 50%;
    height: 280px;
    object-fit: cover;
    object-position: 0% 0%;
    border: 1px solid $color-grey;
  }
  .content {
    min-width: 50%;
    margin-left: 20px;
    white-space: pre-line;
    .title {
      margin-top: 0;
    }
  }
  &.reverse {
    .image {
      order: 2;
    }
    .content {
      order: 1;
      margin-left: unset;
    }
  }
}
@media (max-width: $break-point-sp) {
  .work-item {
    flex-direction: column;
    padding: 0 10px;
    .image {
      width: 100%;
      height: 200px;
    }

    .content {
      min-width: 100%;
      margin-left: 0;
      white-space: pre-line;
      text-align: center;
      .title {
        margin-top: 5px;
        margin-bottom: 10px;
      }
      .overview {
        display: block;
        font-size: 0.8rem;
      }
    }
    &.reverse {
      .image {
        order: 1;
      }
      .content {
        order: 2;
        margin-left: 0;
      }
    }
  }
}
</style>
