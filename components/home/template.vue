<script setup></script>
<template>
  <section class="wrapper">
    <div class="wrapper__logo">
      <span>LOGO.</span>
    </div>
    <div class="wrapper__title">
      <span>Lorem ipsum at dolor met.</span>
      <h1>Trindart studio</h1>
    </div>
    <div class="wrapper--action">
      <NuxtLink to="about" class="wrapper--action__button">
        <span> Começar <img src="/icons/double-chevron-icon.svg" alt="Entrar" /> </span>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  height: 100vh;
  background: url("images/cover-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;

  &__logo {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: $t-s-1;
    span {
      font-weight: 900;
    }
  }
  &__title {
    text-align: center;
    flex: 3 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 8em;
      font-weight: 800;
      transition: 0.3s ease-in-out;

      @media (max-width: 750px) {
        font-size: 4em;
      }
    }
  }
  &--action {
    padding: $t-s-2 $t-s-2 $t-s-4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__button {
      text-decoration: none;
      cursor: pointer;
      width: auto;
      width: 150px;
      padding: 0.5rem $t-s-1;
      // background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
      border-radius: 50px;
      // animation: move 6s infinite;
      position: relative;
      border: 3px solid transparent;
      transition: 0.4s ease-in-out;
      color: #ffffff;

      &:hover {
        outline: 0;
        border: 3px solid white;
        background: white;
        color: black;

        span {
          img {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(62deg)
              brightness(103%) contrast(102%);
          }
        }
      }

      span {
        font-size: 1.1em;
        font-weight: 600;

        display: flex;
        align-items: center;
        gap: 0.1rem;
        img {
          width: 25%;
          animation: shake 2s infinite;
        }
      }
    }

    @keyframes move {
      0% {
        top: 0px;
      }
      25% {
        top: 20px;
      }
      // 75% {
      //   top: 20px;
      // }
      100% {
        top: 0px;
      }
    }

    @keyframes shake {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    @media (max-width: 750px) {
      padding: $t-s-2 $t-s-1 $t-s-4;
    }
  }
}
</style>
