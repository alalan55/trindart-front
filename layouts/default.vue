<template>
  <div class="wrapper">
    <div class="wrapper__nav">
      <LayoutNavbar />
    </div>
    <div class="wrapper__content">
      <slot />
    </div>
    <div class="wrapper__footer">
      <LayoutFooter/>
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
    // height: $t-nav-bar; BOTANDO ESSE VALOR, PASSO AS INFORMAÇÕES PARA O TAMANHO DA BARRA DE NAVEGAÇÃO
  }
  &__content {
    // background: red;
    // height: calc(300vh - $t-nav-bar);
  }
}
</style>
