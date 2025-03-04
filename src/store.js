import { createStore } from "vuex";

export default createStore({
  state: {
    inboxEmails: [
      {
        name: "Rachit Pant",
        sender: "madhav@mail.com",
        receiver: "bharat@mail.com",
        subject: "Reminder",
        message: "Hey, it's a reminder for you to work hard and learn Vue, Nuxt, etc technologies for your career.",
      },
    ],
    sentEmails: [
      {
        name: "Rachit Pant",
        sender: "bharat@mail.com",
        receiver: "madhav@mail.com",
        subject: "Working",
        message: "Hello, work is going on.",
      },
    ],
    draftEmails: [
      {
        name: "Rashmi Joshi Pant",
        sender: "bharat@mail.com",
        receiver: "rashmi@mail.com",
        subject: "Hii",
        message: "Hii Didiii"
      }
    ]
  },
  mutations: {
    ADD_INBOX_EMAIL(state, email) {
      state.inboxEmails.push(email);
    },
    ADD_SENT_EMAIL(state, email) {
      state.sentEmails.push(email);
    },
    ADD_DRAFT_EMAIL(state, email) {
      state.draftEmails.push(email);
    },
    REMOVE_DRAFT_EMAIL(state, emailToRemove) {
      state.draftEmails = state.draftEmails.filter(
        (email) =>
          email.name !== emailToRemove.name ||
          email.sender !== emailToRemove.sender ||
          email.receiver !== emailToRemove.receiver ||
          email.subject !== emailToRemove.subject ||
          email.message !== emailToRemove.message
      );
    }
  },
  actions: {},
  getters: {},
});
