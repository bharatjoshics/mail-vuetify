<template>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Details</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p><strong>Name:</strong> {{ email.name }}</p>
          <p><strong>From:</strong> {{ email.sender }}</p>
          <p><strong>To:</strong> {{ email.receiver }}</p>
          <p><strong>Subject:</strong> {{ email.subject }}</p>
          <p><strong>Message:</strong> <span v-html="email.message"></span></p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import DOMPurify from "dompurify";
  
  export default {
    props: {
      modelValue: Boolean, // Controls dialog visibility
      selectedEmail: Object, // Email data
    },
    computed: {
      dialog: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
      email() {
        return {
          ...this.selectedEmail,
          message: DOMPurify.sanitize(this.selectedEmail?.message || ""),
        };
      },
    },
    methods: {
      closeDialog() {
        this.dialog = false;
      },
    },
  };
  </script>
  