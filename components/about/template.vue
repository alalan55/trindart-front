<script setup></script>

<template>
  <div class="wrapper">
    <section class="wrapper__content">
      <div class="wrapper__content__title">
        <h1>Quem nós somos?</h1>
      </div>

      <div class="wrapper__content__descriptions">
        <p>
          Em quase 25 anos de existência, já passaram pelo Curso Prático de
          Desenho mais de 1500 alunos. Um dos maiores representantes da cultura japonesa
          em Petrópolis, oferecemos curso de mangá e tembém os mais diversos estilos de
          desenho, tais como comic's, moda, cartoon, caricatura, óleo sobre tela, charge,
          Ilustração, desenho arquitetônico, quadrinhos, aquarela, pastel, desenho à
          lápis, carvão e arte digital etc. As aulas são ministradas por profissionais
          extremamente qualificados e formados no próprio curso, com anos de experiência
          na docência em desenho e pintura, com linguagens e métodos de ensino práticos e
          simples, para anteder à todas as pessoas a partir dos 6 anos. Durante as aulas,
          o aluno aprende sobre materiais, conceitos e métodos que contribuem para
          desenvolvimento real de sua competência artística. Mesmo quem nunca teve contato
          com desenho pode aprender a desenhar a partir do básico ao avançado.
        </p>

        <!-- <p>
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
        </p> -->
      </div>

      <div class="wrapper__content__modalities">
        <AboutModalities />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  // min-height: 100vh;
  background: $t-blue-1;
  color: #ffffff;

  @include pageStyle();

  &__content {
    &__title {
      text-align: center;
      margin-bottom: 3rem;

      h1 {
        font-size: 4em;
        font-weight: 700;
        transition: 0.4s ease-in-out;
      }
    }
    &__descriptions {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      position: relative;

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

    &__modalities {
      background: white;
      padding: 2rem;
    }

    & > div {
      // border: 3px solid red;
      &:not(:last-child) {
        margin-bottom: $t-s-3;
      }
    }

    @media (max-width: 750px) {
      &__title {
        h1 {
          font-size: 2.5em;
        }
      }
    }
  }
}
</style>
