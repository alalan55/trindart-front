<script setup></script>
<template>
  <section class="wrapper">
    <!-- <img src="/images/cover-bg.jpg" alt="Background" class="wrapper__image" /> -->
    <div class="wrapper__title">

    <h1>Trindart studio</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: url("images/cover-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  // display: grid;
  // grid-template-areas: "stack";
  // place-items: center;

  // & > * {
  //   grid-area: stack;
  // }

  // &__image {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }
  &__title {
    text-align: center;

    h1{

      font-size: 8em;
      color: white;
      font-weight: 800;
      transition: .3s ease-in-out;

      @media(max-width:750px){
        font-size: 4em;
      }
    }
  }
}
</style>
