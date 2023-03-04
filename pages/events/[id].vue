<script setup>
const route = useRoute();
useHead({
  title: `${route.params.id}`,
});
</script>

<template>
  <div>
    <EventsSelectedEvent />
  </div>
</template>
