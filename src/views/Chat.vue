<template>
    <div class="chat">
        <div class="messagebody scrollable">
            <div class="messagebody" v-if="messages.length == 0">
                <h2>No messages here :(</h2>
            </div>
            <div class="wrapper" v-else>
                <div class="chatMessages card mt-2"
                v-for="message in messages" :key="message.message">
                    <div class="card-body chat-box">
                        <div class="dateTime text-muted card-subtitle">
                            {{ message.dateTime.getHours() }}:{{ message.dateTime.getMinutes() }}
                        </div>
                        <div class="username card-title"> {{ message.username }}</div>
                        <div class="message card-text"> {{ message.message }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom footer chatbox">
            <form action="" class="chat-form">
                <label for="message" class="chat-label">Enter Message: </label>
                <input disabled type="text" name="message" id="message"
                class="chat-text" v-if="username == null">
                <button disabled type="submit"
                class="btn btn-success" v-if="username == null">Send</button>
                <input type="text" name="message" id="message"
                class="chat-text" autofocus v-if="username != null">
                <button type="submit"
                class="btn btn-success" v-if="username != null">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
const API_URL = 'http://localhost:5000/messages';

// remove these once they're implemented
console.log(API_URL);

export default {
  name: 'Chat',
  data: () => ({
    messages: [
      {
        username: 'Test',
        message: 'This is the message',
        dateTime: new Date(),
      },
      {
        username: 'Test2',
        message: 'This is the message2',
        dateTime: new Date(),
      },
      {
        username: 'Test3',
        message: 'This is the message3',
        dateTime: new Date(),
      },
    ],
    username: null,
  }),
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
        margin-top: .5em;
    }
</style>
