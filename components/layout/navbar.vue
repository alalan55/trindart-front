<template>
  <nav class="nav" ref="nav">
    <div class="nav__logo">
      <NuxtLink to="/">LOGO.</NuxtLink>
    </div>

    <div class="nav__links">
      <ul>
        <li v-for="item in links" :key="item.name">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const nav = ref(null);
const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Sobre",
    to: "/",
  },
  {
    name: "Contatos",
    to: "/",
  },
  {
    name: "Galeria",
    to: "/",
  },
];

window.addEventListener("scroll", () => {
  nav.value.classList.toggle("sticky", window.scrollY > 5);
});
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: $t-nav-bar;
  transition: 0.6s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $t-s-1;
  z-index: 99999;
  &__logo {
    a {
      text-decoration: none;
      font-weight: 800;
    }
  }

  &__links {
    ul {
      position: relative;
      display: flex;
      align-items: center;
      gap: $t-s-1;

      li {
        list-style: none;
        position: relative;
        a {
          text-decoration: none;
          transition: 0.6s;
          font-weight: 600;
        }
      }
    }
  }
}

.sticky {
  background: red;
}
</style>
