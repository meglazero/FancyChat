<template>
  <div class="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Nav',
  components: {
    Navbar,
  },
};
</script>
