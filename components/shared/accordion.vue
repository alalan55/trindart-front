<script setup>
const props = defineProps({
  info:{type: String, required: true, default: 'Título'}
})
const showInfo = ref(false);
</script>

<template>
  <div class="accordion" v-auto-animate>
    <div class="accordion__header" @click="showInfo = !showInfo">
      <div class="left">
        <h1>{{props.info}}</h1>
      </div>
      <div class="right">
        <figure>
          <img
            :src="
              !showInfo ? '/icons/chevron-down-icon.svg' : '/icons/chevron-up-icon.svg'
            "
            alt="Abirir"
          />
        </figure>
      </div>
    </div>

    <div v-if="showInfo" class="accordion__body">
        <div class="accordion__body__descriptions">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate in mollitia at molestias, eos, nostrum obcaecati, fuga dolores rerum sed quisquam dolore sit. Amet, minus molestiae. Sint, fuga impedit.</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.accordion {
    color: $t-blue-1;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $t-s-1 0;
    cursor: pointer;
    border-bottom: 1px solid;
    .left {
      h1 {
        font-size: 1.5em;
        font-weight: 600;
      }
    }
    .right {
      figure {
        height: 40px;
        width: 40px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  &__body {
    padding: $t-s-1 0;
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
}
</style>
