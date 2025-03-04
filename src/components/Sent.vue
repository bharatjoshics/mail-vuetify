<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center"><b>Sent</b></v-card-title>
      <v-divider></v-divider>

      <v-table>
        <thead>
          <tr>
            <th><b>Name</b></th>
            <th><b>Subject</b></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(email, index) in sentEmails" :key="index" @click="openDialog(email)">
            <td>{{ email.name }}</td>
            <td>{{ email.subject }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <MessageDialogue v-model="dialog" :selectedEmail="selectedEmail" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import MessageDialogue from "./MessageDialogue.vue";

export default {
  data() {
    return {
      dialog: false,
      selectedEmail: {},
    };
  },
  computed: {
    ...mapState(["sentEmails"]),
  },
  methods: {
    openDialog(email) {
      this.selectedEmail = email;
      this.dialog = true;
    },
  },
  components: {
    MessageDialogue,
  },
};
</script>

<style scoped>
/* Apply hover effect on table rows */
tbody tr {
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

/* Change background color and text color on hover */
tbody tr:hover {
  background-color: #f0f0f0;
}
</style>