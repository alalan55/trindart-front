<template>
  <nav class="nav" ref="nav">
    <div class="nav__logo">
      <!-- <NuxtLink to="/">LOGO.</NuxtLink> -->
      <NuxtLink to="/">
        <figure>
          <img src="/images/logo.png" alt="Logo" />
        </figure>
      </NuxtLink>
    </div>

    <div class="nav__links">
      <ul ref="list">
        <li v-for="item in links" :key="item.name">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
      </ul>

      <figure @click="showOrHideAppBar()">
        <img src="/icons/menu-icon.svg" alt="Menu" />
      </figure>
    </div>
  </nav>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const nav = ref(null);
const list = ref(null);
const needShow = ref(false);

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Sobre",
    to: "/about",
  },
  {
    name: "Contatos",
    to: "/",
  },
  {
    name: "Galeria",
    to: "/",
  },
  {
    name: "Eventos",
    to: "/",
  },
];

window.addEventListener("scroll", () => {
  nav.value.classList.toggle("sticky", window.scrollY > 5);
});

onClickOutside(list, (e) => (list.value.style.left = "-100%"));

const showOrHideAppBar = () => {
  console.log(list.value.style.left);

  // list.value.style.left == "0px" ? list.value.style.left = "-100%" : ''
  // list.value.style.left == "-100%" ? list.value.style.left = "0px" : ''

  if (list.value.style.left == "0px") {
    list.value.style.left = "-100%";
    // return;
  }
  if (list.value.style.left == "-100%") {
    console.log("hello");
    list.value.style.left = "0px";
    // return;
  }

  console.log(list.value.style.left);

  // if(list.value.style.left == "-100%"){
  //   list.value.style.left = "0px";
  //   console.log(list.value.style.left)
  // }else{
  //   // console.log('ouu')
  //   list.value.style.left = "-100%";
  // }
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.nav {
  border: 1px solid transparent;
  position: fixed;
  top: 0;
  width: 100%;
  height: $t-nav-bar;
  transition: 0.6s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $t-s-1 $t-s-3;
  z-index: 99999;
  &__logo {
    a {
      text-decoration: none;
      font-weight: 800;
      color: #ffffff;

      figure {
        width: 53px;
        height: 53px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  &__links {
    ul {
      display: flex;
      align-items: center;
      gap: $t-s-1;
      transition: 0.6s;

      li {
        list-style: none;
        a {
          text-decoration: none;
          transition: 0.6s;
          font-weight: 600;
          color: #ffffff;
        }
        .router-link-exact-active {
          border-bottom: 1px solid $t-blue-2;
        }
      }
    }

    figure {
      display: none;
      width: 32px;
      height: 32px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    @media (max-width: 750px) {
      ul {
        position: fixed;
        background: white;
        top: 0;
        left: -100%;
        bottom: 0;
        width: 75%;
        flex-direction: column;
        justify-content: center;
        gap: $t-s-3;

        li {
          a {
            font-size: 2em;
            color: $t-blue-2;
          }
          .router-link-exact-active {
            color: $t-blue-3 !important;
            border-bottom: none;
            font-weight: 700;
          }
        }
      }
      figure {
        display: block;
      }
    }
  }
}

.sticky {
  background: $t-blue-1;
}
</style>
