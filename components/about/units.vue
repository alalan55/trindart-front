<template>
  <div class="units">
    <div class="units__title">
      <h2>Unidades</h2>
    </div>

    <div class="units__descriptions">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum atque nobis
        excepturi impedit non culpa perferendis ab magnam facere facilis. Ex minus velit
        totam est perferendis deleniti alias vero quos. Sequi voluptatem sit dicta quia
        dolorem, harum enim excepturi reprehenderit.
      </p>
    </div>

    <div class="units__content">
      <div class="units__content__item">
        <div class="units__content__item__title">
          <h2>Petrópolis</h2>
        </div>
        <figure>
          <img src="/images/localidade.jpg" alt="Localidade" />
        </figure>

        <div class="units__content__item__description">
          <span>
            <img src="/icons/pin-icon.svg" alt="Pin" /> Rua lourenço dias, n° 60, RJ,
            Petrópolis
          </span>
        </div>
      </div>

      <div class="units__content__item">
        <div class="units__content__item__title">
          <h2>Petrópolis</h2>
        </div>
        <figure>
          <img src="/images/localidade.jpg" alt="Localidade" />
        </figure>

        <div class="units__content__item__description">
          <span>
            <img src="/icons/pin-icon.svg" alt="Pin" /> Rua lourenço dias, n° 60, RJ,
            Petrópolis
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.units {
  color: $t-blue-1;
  max-width: 1200px;
  margin: 0 auto;
  &__title {
    text-align: center;
    margin-bottom: $t-s-3;

    h2 {
      font-size: 3em;
      font-weight: 700;
    }
  }

  &__content,
  &__descriptions {
    max-width: 1200px;
    margin: 0 auto;
    padding: $t-s-2;
  }
  &__descriptions {
    p {
      letter-spacing: 0.95px;
      font-size: 1.2rem;
      text-align: justify;
      font-weight: 200;
      line-height: 30px;
      font-weight: 400;

      &:not(:last-child) {
        margin-bottom: $t-s-1;
      }

      @media (max-width: 750px) {
        letter-spacing: 0;
      }
    }
  }
  &__content {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: $t-s-2;
    &__item {
      flex: 1 1 300px;

      &__title {
        margin-bottom: 0.5rem;
        h2 {
          font-weight: 700;
          font-size: 1.3em;
        }
      }

      figure {
        height: 300px;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 0.5rem;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease-in-out;
          &:hover {
            scale: 1.2;
          }
        }
      }

      &__description {
        // background: red;
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 0.9em;

          img {
            filter: invert(56%) sepia(2%) saturate(2556%) hue-rotate(149deg)
              brightness(99%) contrast(120%);
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
}
</style>
