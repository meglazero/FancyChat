<template>
  <div class="navbar">
      <router-link to="/" class="btn btn-success"><h1>Fancy Chat</h1></router-link>
      <router-link to="/" class="btn btn-danger"
      v-if="loggedIn === true">Log Out</router-link>
      <router-link to="/login" class="btn btn-primary"
      v-if="loggedIn === false">Log In</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    loggedIn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
