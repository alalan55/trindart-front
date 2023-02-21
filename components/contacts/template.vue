<script setup>
const medias = [
  {
    link: "",
    icon: "/icons/facebook-icon.svg",
    title: "Facebook",
  },
  {
    link: "",
    icon: "/icons/instagram-icon.svg",
    title: "Instagram",
  },
  {
    link: "",
    icon: "/icons/twitter-icon.svg",
    title: "Twitter",
  },
  {
    link: "",
    icon: "/icons/youtube-icon.svg",
    title: "YouTube",
  },
];
</script>

<template>
  <div class="wrapper">
    <section class="wrapper__content">
      <div class="wrapper__content__title">
        <h1>Contatos</h1>
        <br />
        <span> Clique nos links abaixo e nos encontre: </span>
      </div>

      <!-- <div class="wrapper__content__descriptions">
        <p>Clique nos links abaixo e nos encontre:</p>
      </div> -->

      <div class="wrapper__content__links">
        <a v-for="item in medias" :key="item.link" :href="item.link" target="_blank">
          <figure>
            <img :src="item.icon" :alt="item.title" />
          </figure>
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.wrapper {
  color: #ffffff;
  &__content {
    height: calc(100vh - $t-footer);
    background: $t-blue-1;
    @include pageStyle();

    &__title {
      text-align: center;
      margin-bottom: $t-s-1;

      h1 {
        font-size: 4em;
        font-weight: 700;
        transition: 0.4s ease-in-out;

        @media (max-width: 850px) {
          font-size: 2em !important;
        }
      }
    }

    &__descriptions {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      position: relative;
      text-align: center;

      p {
        letter-spacing: 0.95px;
        font-size: 1.2rem;
        text-align: center;
        font-weight: 200;
        line-height: 30px;

        @media (max-width: 750px) {
          letter-spacing: 0;
        }
      }
    }

    &__links {
      max-width: 1200px;
      margin: 0 auto;
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem $t-s-2;

      a {
        text-decoration: none;
        flex: 0 1 80px;
        border: 2px solid white;
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s ease-in-out;

        figure {
          width: 40px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        &:hover {
          background: white;
          figure {
            img {
              filter: invert(90%) sepia(29%) saturate(727%) hue-rotate(149deg)
                brightness(99%) contrast(12%);
            }
          }
        }
      }
    }

    @media (max-width: 750px) {
      &__title {
        margin-bottom: $t-s-2;
        h1 {
          font-size: 2.5em;
        }
      }

      &__links {
        min-height: 35vh;
      }
    }
  }
}
</style>
