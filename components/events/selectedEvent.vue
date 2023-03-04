<template>
  <div class="wrapper">
    <figure class="wrapper__hero">
      <!-- {{ $route.params.id }} -->
      <img src="/images/localidade.jpg" alt="Capa" />
    </figure>

    <div class="wrapper__content">
      <div class="wrapper__content__title">
        <h2>Título do evento</h2>
      </div>

      <div class="wrapper__content__descriptions">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum tenetur
          maxime harum, tempora facere optio hic fugiat placeat, natus odio culpa aliquid
          aperiam quisquam, corporis officiis pariatur ullam nam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Fuga perferendis quaerat quo tenetur
          excepturi est quam dolorem nam aperiam exercitationem. Ducimus mollitia odit
          recusandae ipsum itaque voluptatem, dignissimos ipsa optio?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum magnam
          iste commodi eligendi dolorum molestias, similique vero id, quibusdam eaque
          cumque iusto deserunt sit ab aperiam repellendus odit temporibus?
        </p>
      </div>

      <div class="wrapper__content__informations">
        <div
          v-for="item in informations"
          :key="item.text"
          class="wrapper__content__informations__item"
        >
          <figure>
            <img :src="item.icon" :alt="item.alt" />
          </figure>
          <span> {{ item.text }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const informations = [
  {
    text: "Rua maria das dores, n°33",
    alt: "Local",
    icon: "/icons/pin-icon.svg",
  },
  {
    text: "De 15:00 às 21:00",
    alt: "Horario",
    icon: "/icons/clock-icon.svg",
  },
  {
    text: "21/02/2024",
    alt: "Data",
    icon: "/icons/calendar-icon.svg",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.wrapper {
  color: $t-blue-1;
  &__hero {
    background: $t-blue-2;
    height: 60vh;
    background: rgba(0, 0, 0, 0.9);
    transition: 0.2s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }

    @media (max-width: 750px) {
      height: 40vh;
    }
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: $t-s-2;
    &__title {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 3em;
        font-weight: 700;
      }
    }

    &__descriptions {
      margin-bottom: $t-s-3;

      p {
        letter-spacing: 0.95px;
        font-size: 1.2rem;
        font-weight: 200;
        line-height: 30px;
        font-weight: 400;

        &:not(:last-child) {
          margin-bottom: 1rem;
        }

        @media (max-width: 750px) {
          letter-spacing: 0;
        }
      }
    }

    &__informations {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: $t-s-1;
      &__item {
        flex: 1 1 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        figure {
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: invert(120%) sepia(18%) saturate(406%) hue-rotate(148deg)
              brightness(92%) contrast(91%);
          }
        }
        span {
          font-weight: 600;
        }

        @media (max-width: 697px) {
          justify-content: flex-start;
        }
      }
    }
  }
}
</style>
