<template>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Email Details</v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="selectedEmail">
          <p><strong>Name:</strong> {{ selectedEmail.name }}</p>
          <p><strong>From:</strong> {{ selectedEmail.sender }}</p>
          <p><strong>To:</strong> {{ selectedEmail.receiver }}</p>
          <p><strong>Subject:</strong> {{ selectedEmail.subject }}</p>
          <p><strong>Message:</strong> {{ selectedEmail.message }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['selectedEmail']),
      dialog() {
        return !!this.selectedEmail;
      }
    },
    methods: {
      ...mapMutations(['closeDialog'])
    }
  };
  </script>
  