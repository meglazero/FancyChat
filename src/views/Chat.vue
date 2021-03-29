<template>
    <div class="chat">
        <div>{{ testLog }} </div>
        <div class="messagebody scrollable" v-if="$store.state.loggedIn === true">
            <div class="messagebody" v-if="$store.state.messages.length == 0">
                <h2>No messages here :(</h2>
            </div>
            <div class="wrapper" v-if="$store.state.messages.length > 0">
                <div class="chatMessages card mt-2"
                v-for="message in $store.state.messages" :key="message._id">
                    <div class="card-body chat-box">
                        <div class="dateTime text-muted card-subtitle">
                            {{ message.hour }}:{{ message.minute }}
                        </div>
                        <div class="username card-title"> {{ message.username }}</div>
                        <div class="message card-text"> {{ message.message }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="notLogged" v-if="$store.state.loggedIn === false">
          <p>Need to be logged in to view chat</p>
        </div>
        <div class="bottom footer chatbox">
            <form action="" class="chat-form">
                <label for="message" class="chat-label">⌨</label>
                <input disabled type="text" name="message" id="message"
                class="chat-text" v-if="$store.state.loggedIn == false">
                <button disabled
                class="btn btn-success" v-if="$store.state.loggedIn == false">Send</button>
                <input type="text" name="message" id="message" v-model="message"
                class="chat-text" autofocus v-if="$store.state.loggedIn != false">
                <button
                class="btn btn-success" v-if="$store.state.loggedIn != false"
                @click.prevent="pushMessage">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
const API_URL = 'http://localhost:5000/';

export default {
  name: 'App',
  data() {
    return {
      messages: [],
      message: '',
      error: '',
      testLog: '',
    };
  },
  methods: {
    pushMessage() {
      fetch(`${API_URL}message`, {
        method: 'POST',
        body: JSON.stringify({
          username: this.$store.state.username,
          message: this.message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map((detail) => detail.message)
              .join('. ');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageForm = false;
            this.message = '';
            this.$store.commit('pushMessage', result);
            if (this.messages.length === 0) {
              this.messages = this.$store.state.messages;
            }
          }
        });
    },
    updateMessages(array) {
      this.$store.commit('updateMessages', array);
    },
    logIn() {
      this.$store.commit('logIn', { username: sessionStorage.getItem('user') });
    },
  },
  mounted() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        this.messages = result;
        this.updateMessages(result);
      });
    if (sessionStorage.getItem('user')) {
      this.logIn();
    }
  },
};
</script>

<style>
    window {
        position: relative;
    }

    .dateTime {
        margin-top: 1px;
    }

    .username {
        color: #4340c5;
        margin: 0 5px;
        text-transform: capitalize;
        font-weight: 600;
    }

    .message {
        font-weight: 400;
        color: #19271c;
    }

    .chat-box {
        display: flex;
        width: 100%;
    }

    .scrollable {
        height: calc(100vh - 10em);
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 1em;
    }

    .footer {
        position: absolute;
        bottom: .5em;
        left: 1.5em;
        right: 1.5em;
        width: calc(100vw - 3em);
        height: 3em;
    }

    .chat-form {
        display: flex;
    }

    .chat-text {
        flex: 1;
        margin: 0 1em;
    }

    .chat-label {
      margin: 0 -.5em;
      font-size: 1.7em;
      position: relative;
    }

    .chat-label:hover::after{
      content: 'Enter text to chat';
      position: absolute;
      top: -1.5em;
      left: .5em;
      font-size: .7em;
      width: 8em;
      background: #aca65d;
      border: solid #333 2px;
    }

    .notLogged {
      font-size: 1.5em;
      text-align: center;
      margin: 40vh auto;
      color: rgb(139, 45, 45)
    }
</style>
