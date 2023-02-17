<script setup></script>
<template>
  <section class="wrapper">
    <div class="wrapper__logo">
      <span>LOGO.</span>
    </div>
    <div class="wrapper__title">
      <span >Lorem ipsum at dolor met.</span>
      <h1>Trindart studio</h1>
    </div>
    <div class="wrapper--action">
      <div class="wrapper--action__button">
        <span> Começar ↪ </span>
      </div>
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
      color: white;
      font-weight: 800;
      transition: 0.3s ease-in-out;

      @media (max-width: 750px) {
        font-size: 4em;
      }
    }
  }
  &--action {
    padding: $t-s-2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__button {
      cursor: pointer;
      display: block;
      width: auto;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: $t-s-1;
      background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
      border-radius: 15px;
      animation: move 6s infinite;
      position: relative;

      &:hover {
        outline: 0;
      }

      span {
        font-size: 1.1em;
        font-weight: 600;
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
  }
}
</style>
