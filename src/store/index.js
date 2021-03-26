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
  },
  mutations: {
    addStateVariables(state, {
      usernameV, messageV,
    }) {
      state.messageBody.username = usernameV;
      state.messageBody.message = messageV;
    },
    pushMessage(state) {
      state.messages = [...state.messages, { ...state.messageBody }];
    },
    updateMessages(state, array) {
      state.messages = array;
    },
    resetMessages(state) {
      state.messages = [];
    },
  },
  plugins: [
    createMultiTabState({
      statesPaths: ['messages'],
    }),
  ],
});
