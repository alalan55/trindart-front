<script setup></script>

<template>
  <div class="wrapper">
    <section class="wrapper__content">
      <div class="wrapper__content__title">
        <h1>Quem nós somos?</h1>
      </div>

      <div class="wrapper__content__descriptions">
        <p>
          Em quase 25 anos de existência, já passaram pelo Curso Prático de Desenho mais
          de 1500 alunos. Um dos maiores representantes da cultura japonesa em Petrópolis,
          oferecemos curso de mangá e tembém os mais diversos estilos de desenho, tais
          como comic's, moda, cartoon, caricatura, óleo sobre tela, charge, Ilustração,
          desenho arquitetônico, quadrinhos, aquarela, pastel, desenho à lápis, carvão e
          arte digital etc. As aulas são ministradas por profissionais extremamente
          qualificados e formados no próprio curso, com anos de experiência na docência em
          desenho e pintura, com linguagens e métodos de ensino práticos e simples, para
          anteder à todas as pessoas a partir dos 6 anos. Durante as aulas, o aluno
          aprende sobre materiais, conceitos e métodos que contribuem para desenvolvimento
          real de sua competência artística. Mesmo quem nunca teve contato com desenho
          pode aprender a desenhar a partir do básico ao avançado.
        </p>

        <div class="wrapper__content__descriptions__infos">
          <div><span>+ 20 anos</span> <small>Mais de 20 anos de existencia</small></div>
          <div>
            <span>+ 1500 alunos</span>
            <small>Já passaram pelas nossas unidades, mais de 1500 alunos</small>
          </div>
          <div>
            <span>2 unidades</span>
            <small
              >Temos duas unidades, porém, temos pensamento de futuras expansões</small
            >
          </div>
        </div>
      </div>

      <div class="wrapper__content__modalities">
        <AboutModalities />
      </div>

      <div class="wrapper__content__squad">
        <AboutSquad />
      </div>

      <div class="wrapper__content__units">
        <AboutUnits/>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  background: $t-blue-1;
  color: #ffffff;

  @include pageStyle();

  &__content {
    // background: $t-blue-1;
    &__title {
      text-align: center;
      margin-bottom: $t-s-3;

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

      &__infos {
        margin: $t-s-5 0 0;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: $t-s-2;
        flex-wrap: wrap;

        & > div {
          flex: 0 1 350px;
          display: flex;
          flex-direction: column;
          gap: $t-s-1;
          text-align: center;

          span {
            font-weight: 700;
            font-size: 1.5em;
            text-transform: uppercase;
            color: $t-blue-2;
          }
        }
      }
    }

    &__modalities {
      background: white;
      padding: $t-s-2;
    }
    &__units {
      background: white;
      padding: $t-s-2;
    }

    & > div {
      &:not(:last-child) {
        margin-bottom: $t-s-3;
      }
    }

    @media (max-width: 750px) {
      &__title {
        margin-bottom: $t-s-2;
        h1 {
          font-size: 2.5em;
        }
      }
    }
  }
}
</style>
