<template>
  <div class="wrapper">
    <div class="wrapper__nav">
      <LayoutNavbar />
    </div>
    <div class="wrapper__content">
      <Transition>
        <slot />
      </Transition>
    </div>
    <div class="wrapper__footer">
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.wrapper {
  &__footer {
  }
}

// .page-enter-active,
// .page-leave-active {
//   transition: all 0.4s;
// }
// .page-enter-from,
// .page-leave-to {
//   opacity: 0;
//   filter: blur(1rem);
// }

// .page-left-enter-active,
// .page-right-enter-active,
// .page-left-leave-active,
// .page-right-leave-active {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   transition: all 150ms linear;
// }
// .page-left-enter-from, .page-right-leave-to {
//   transform: translateX(100%);
// }
// .page-left-leave-to, .page-right-enter-from {
//   transform: translateX(-100%);
// }
// .page-left-enter-to, .page-right-enter-to {
//   transform: translateX(0);
// }
</style>
