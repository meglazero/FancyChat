<template>
  <div class="navbar">

    <div class="container">
      <router-link to="/" class="btn btn-success"><h1>Fancy Chat</h1></router-link>

      <div class="userpanel">
        <div class="userToast" v-if="$store.state.loggedIn === true">Welcome
          <span class="capitalize">{{ $store.state.username }}</span>!</div>
        <button class="btn btn-danger"
        v-if="$store.state.loggedIn === true" @click="LogOut">Log Out</button>
        <button class="btn btn-primary"
        v-if="$store.state.loggedIn === false" @click.prevent='logIn = !logIn'>Log In</button>
      </div>
    </div>

    <div class="logInWindow" v-show="logIn && $store.state.loggedIn === false">
      <form action="">
        <div class="error-message">{{ error }}</div>
        <div class="username-input inputs">
          <label for="username">Username: </label>
          <input type="text" name="username" id="username" v-model="username">
        </div>
        <div class="password-input inputs">
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" v-model="password">
        </div>
        <div class="buttons">
          <button
          class="btn btn-primary" @click.prevent="LogIn">Log in</button>
          <button @click.prevent="CreateAccount"
          class="btn btn-success">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const hasha = require('hasha');

const API_URL = 'http://localhost:5050/';

export default {
  name: 'Navbar',
  data() {
    return {
      logIn: false,
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    // send request to server, if result is user send username to store
    // to store variable there

    LogIn() {
      const logInDetails = {
        username: this.username,
        password: hasha(this.password),
        secured: 'y',
      };
      fetch(`${API_URL}login`, {
        method: 'POST',
        body: JSON.stringify(logInDetails),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            this.error = result.error;
          } else {
            this.error = '';
            this.showMessageForm = false;
            this.logIn = !this.logIn;
            sessionStorage.setItem('user', result.username);
            this.$store.commit('logIn', {
              username: result.username,
            });
          }
        });
    },
    CreateAccount() {
      const accountDetails = {
        username: this.username,
        password: hasha(this.password),
        secured: 'y',
      };
      fetch(`${API_URL}users`, {
        method: 'POST',
        body: JSON.stringify(accountDetails),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            this.error = result.error;
          } else {
            this.error = result;
            this.showMessageForm = false;
            sessionStorage.setItem('user', result.username);
            this.$store.commit('logIn', {
              username: result.username,
            });
          }
        });
    },
    LogOut() {
      this.username = '';
      this.password = '';
      this.$store.commit('logOut');
    },
  },
};

</script>

<style>
.navbar {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: .5em 0;
  width: 100vw;
  max-width: 100vw;
}

form {
  margin: 0;
  padding: 0;
}

.logInWindow {
  position: absolute;
  top: 4em;
  right: .5em;
  display: flex;
  margin: 0;
  padding: .3em;
  border: solid 1px;
  z-index: 1;
  background: #fff
}

.logInWindow .inputs {
  flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: .5em;
}

.inputs label {
  flex: 1;
}

.inputs input {
  flex: 1;
  margin-left: .3em;
}

.buttons {
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
}

.userpanel {
  display: flex;
}

.capitalize {
  text-transform: capitalize;
}

.userToast {
  padding: 0 .5em;
  margin-top: .4em;
  font-weight: 600;
}

.error-message {
  font-weight: 600;
  color: rgb(141, 34, 34);
  text-align: center;
}

</style>
