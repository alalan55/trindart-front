<template>
  <div class="wrapper">
    <div class="wrapper__nav">
      <LayoutNavbar />
    </div>
    <div class="wrapper__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.wrapper {
  &__nav {
    height: $t-nav-bar;
  }
  &__content {
    border: 5px solid;
    // background: red;
    // height: calc(300vh - $t-nav-bar);
    height: calc(200vh - $t-nav-bar);
  }
}
</style>
