<template>
  <div class="wrapper">
    <div class="wrapper__nav">
      <LayoutNavbar />
    </div>
    <div class="wrapper__content">
      <slot />
    </div>
    <div class="wrapper__footer">
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.wrapper {
  &__footer {
  }
}
</style>
