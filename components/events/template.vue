<template>
  <div class="events">
    <div class="events__title">
      <h2>Eventos</h2>
    </div>

    <div class="events__descriptions">
      <p>
        Abaixo, você pode conferir no nosso calendário, todos os eventos que teremos
        durante o ano
      </p>
    </div>

    <div class="events__list">
      <div
        v-for="(item, i) in ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4']"
        :key="item"
        class="events__list__item"
        @click="$router.push(`/events/${i}`)"
      >
        <div>
          <div class="header">
            <span class="name"> {{ item }} </span>
          </div>
          <div class="body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloremque
              ipsum amet nemo ratione. Dicta, eligendi aspernatur recusandae odit
              dignissimos eos pariatur nisi rerum ipsa esse exercitationem, vel, modi
              iusto.
            </p>
          </div>
        </div>
        <figure></figure>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.events {
  margin: 0 auto;
  padding: $t-s-6 $t-s-2;
  background: $t-blue-1;
  //   @include pageStyle();
  color: white;

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
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    margin-bottom: $t-s-3;

    p {
      letter-spacing: 0.95px;
      font-size: 1.2rem;
      text-align: center;
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
  &__list {
    max-width: 1000px;
    margin: 0 auto;

    &__item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: $t-s-1;
      flex-wrap: wrap;
      transition: 0.4s ease-in-out;

      div {
        flex: 1 1 350px;
        order: 2;
        .header {
          margin-bottom: $t-s-1;
          span {
            display: block;
            font-size: 2em;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          small {
            color: $t-blue-2;
            font-weight: 500;
          }
        }
        .body {
          p {
            letter-spacing: 0.95px;
            font-size: 1em;
            text-align: justify;
            font-weight: 200;
            line-height: 30px;
            font-weight: 400;
          }
        }
      }

      figure {
        flex: 0 0 auto;
        width: 250px;
        height: 200px;
        border-radius: 10px;
        overflow: hidden;
        background: $t-blue-3;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &:not(:last-child) {
        margin-bottom: $t-s-3;
      }
      //   &:nth-child(even) {
      //     div {
      //       order: 2;
      //       .header {
      //         text-align: right;
      //       }
      //     }
      //   }

      @media (max-width: 697px) {
        justify-content: center;

        // &:nth-child(even) {
        //   figure {
        //     order: 2;
        //   }
        //   div {
        //     .header {
        //       text-align: left;
        //     }
        //   }
        // }
      }
    }
  }
}
</style>
