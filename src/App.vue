<template>
  <div class="app">
    <!-- <div class="nav">
      <router-link to="/" class="btn">Fancy Chat</router-link>
      <router-link to="/" class="btn" v-if="loggedIn">Log Out</router-link>
      <router-link to="/login" class="btn btn-primary" v-if="!loggedIn">Log In</router-link>
    </div> -->
    <Navbar v-bind:loggedIn="loggedVariable || false" />
    <router-view/>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
