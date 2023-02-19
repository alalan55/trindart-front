<script setup></script>

<template>
  <div class="wrapper">
    <section class="wrapper__content">
      <div class="wrapper__content__title">
        <h1>Quem nós somos?</h1>
      </div>

      <div class="wrapper__content__descriptions">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi
          praesentium nesciunt error illum ratione vitae dolore. Quas totam ipsa quod
          magni alias quo, minus neque a beatae odio dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam quaerat at similique eius voluptate,
          pariatur ipsam voluptatem nostrum sequi laudantium modi ad repellendus ipsum sed
          ea fugit maiores, ut iusto.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi
          praesentium nesciunt error illum ratione vitae dolore. Quas totam ipsa quod
          magni alias quo, minus neque a beatae odio dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam quaerat at similique eius voluptate,
          pariatur ipsam voluptatem nostrum sequi laudantium modi ad repellendus ipsum sed
          ea fugit maiores, ut iusto. minus neque a beatae odio dolore. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam quaerat at similique eius
          voluptate, pariatur ipsam voluptatem nostrum sequi laudantium modi ad
          repellendus ipsum sed ea fugit maiores, ut iusto.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi
          praesentium nesciunt error illum ratione vitae dolore. Quas totam ipsa quod
          magni alias quo, minus neque a beatae odio dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam quaerat at similique eius voluptate,
          pariatur ipsam voluptatem nostrum sequi laudantium modi ad repellendus ipsum sed
          ea fugit maiores, ut iusto. minus neque a beatae odio dolore. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam quaerat at similique eius
          voluptate, pariatur ipsam voluptatem nostrum sequi laudantium modi ad
          repellendus ipsum sed ea fugit maiores, ut iusto. eligendi praesentium nesciunt
          error illum ratione vitae dolore. Quas totam ipsa quod magni alias quo, minus
          neque a beatae odio dolore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam quaerat at similique eius voluptate, pariatur ipsam voluptatem
          nostrum sequi laudantium modi ad repellendus ipsum sed ea fugit maiores, ut
          iusto. minus neque a beatae odio dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam quaerat at similique eius voluptate, pariatur ipsam
          voluptatem nostrum sequi laudantium modi ad repellendus ipsum sed ea fugit
          maiores, ut iusto.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  min-height: 100vh;
  background: $t-blue-1;
  color: #ffffff;

  @include pageStyle();

  &__content {
    &__title {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2em;
      font-weight: 700;
    }
    &__descriptions {
      p {
        letter-spacing: 0.95px;
        font-size: 1.2rem;
        text-align: justify;
        font-weight: 200;
        line-height: 30px;

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
