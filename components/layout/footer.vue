<template>
  <footer>
    <span>
      Trindart Studio &copy; 2023 | made by <a href="" target="_blank">Alan</a>
    </span>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

footer {
  height: $t-footer;
  background: $t-blue-1;
  border: 1px solid;
  padding: $t-s-2;
  text-align: center;
  color: #ffffff;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  span {
    font-weight: 500;

    a {
      text-decoration: none;
      color: $t-blue-2;
      font-weight: 700;
    }
  }
}
</style>
