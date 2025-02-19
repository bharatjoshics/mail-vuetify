<template>
    <v-container>
      <v-card>
        <v-card-title class="text-center"><b>Inbox</b></v-card-title>
        <v-divider></v-divider>
  
        <v-table>
          <thead>
            <tr>
              <th><b>Name</b></th>
              <th><b>Subject</b></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(email, index) in inboxEmails" :key="index" @click="openDialog(email)">
              <td>{{ email.name }}</td>
              <td>{{ email.subject }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
  
      <!-- Dialog Box -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>Details</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p><strong>Name:</strong> {{ selectedEmail.name }}</p>
            <p><strong>From:</strong> {{ selectedEmail.sender }}</p>
            <p><strong>To:</strong> {{ selectedEmail.receiver }}</p>
            <p><strong>Subject:</strong> {{ selectedEmail.subject }}</p>
            <p><strong>Message:</strong> {{ selectedEmail.message }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    data() {
      return {
        dialog: false,
        selectedEmail: {},
      };
    },
    computed: {
      ...mapState(["inboxEmails"]),
    },
    methods: {
      openDialog(email) {
        this.selectedEmail = email;
        this.dialog = true;
      },
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
