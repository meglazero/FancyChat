import Vue from 'vue';
import Vuex from 'vuex';
import createMultiTabState from 'vuex-multi-tab-state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    messageBody: {
      username: '',
      message: '',
      dateTime: new Date(),
    },
    loggedIn: false,
    username: '',
  },
  mutations: {
    // addStateVariables(state, {
    //   usernameV, messageV,
    // }) {
    //   state.messageBody.username = usernameV;
    //   state.messageBody.message = messageV;
    // },
    pushMessage(state, messageJSON) {
      state.messages = [...state.messages, messageJSON];
    },
    updateMessages(state, array) {
      state.messages = array;
    },
    resetMessages(state) {
      state.messages = [];
    },
    logIn(state, user) {
      state.username = user.username;
      state.loggedIn = true;
    },
    logOut(state) {
      state.username = '';
      state.loggedIn = false;
    },
  },
  plugins: [
    createMultiTabState({
      statesPaths: ['messages'],
    }),
  ],
});
