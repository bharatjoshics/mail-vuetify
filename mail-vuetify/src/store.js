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
  },
  mutations: {},
  actions: {},
  getters: {},
});
