<template>
  <div class="modalities">
    <div class="modalities__title">
      <h2>Modalidades</h2>
    </div>
    <div class="modalities__descriptions">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum atque nobis
        excepturi impedit non culpa perferendis ab magnam facere facilis. Ex minus velit
        totam est perferendis deleniti alias vero quos.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum atque nobis
        excepturi impedit non culpa perferendis ab magnam facere facilis. Ex minus velit
        totam est perferendis deleniti alias vero quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sequi voluptatem sit dicta quia dolorem, harum enim
        excepturi reprehenderit, eum numquam distinctio asperiores ducimus aperiam laborum
        incidunt optio nemo illum accusantium!
      </p>
    </div>

    <div class="modalities__content">
      <SharedAccordion v-for="item in 5" :key="item" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.modalities {
  color: $t-blue-1;
  max-width: 1200px;
  margin: 0 auto;
  &__title {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 3em;
      font-weight: 700;
    }
  }

  &__content,
  &__descriptions {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  &__descriptions {
    position: relative;

    p {
      letter-spacing: 0.95px;
      font-size: 1.2rem;
      text-align: justify;
      font-weight: 200;
      line-height: 30px;
      font-weight: 400;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      @media (max-width: 750px) {
        letter-spacing: 0;
        // line-height: 20px;
      }
    }
  }
}
</style>
