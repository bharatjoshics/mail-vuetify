<template>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>{{ isDraft ? "Edit Draft" : "Compose Email" }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field v-model="emailData.name" label="Name" :error-messages="errors.name"></v-text-field>
          <v-text-field v-model="emailData.sender" label="From" :error-messages="errors.sender"></v-text-field>
          <v-text-field v-model="emailData.receiver" label="To" :error-messages="errors.receiver"></v-text-field>
          <v-text-field v-model="emailData.subject" label="Subject" :error-messages="errors.subject"></v-text-field>
          <Template v-model="emailData.message" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="sendEmail">Send</v-btn>
          <v-btn color="secondary" @click="saveDraft">Save to Draft</v-btn>
          <v-btn color="tertiary" @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import Template from "./Template.vue";
  import DOMPurify from "dompurify";
  
  export default {
    props: {
      modelValue: Boolean, // Controls dialog visibility
      draftEmail: Object, // If draft email is passed, populate fields
    },
    data() {
      return {
        emailData: {
          name: "",
          sender: "",
          receiver: "",
          subject: "",
          message: "",
        },
        errors: {
          name: "",
          sender: "",
          receiver: "",
          subject: "",
          message: "",
        },
      };
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
      isDraft() {
        return !!this.draftEmail;
      },
    },
    watch: {
      draftEmail: {
        immediate: true,
        handler(newDraft) {
          if (newDraft) {
            this.emailData = { ...newDraft };
          }
        },
      },
    },
    methods: {
      validateForm() {
        this.errors = {
          name: this.emailData.name ? "" : "Name is required",
          sender: this.isValidEmail(this.emailData.sender) ? "" : "Valid 'From' email is required",
          receiver: this.isValidEmail(this.emailData.receiver) ? "" : "Valid 'To' email is required",
          subject: this.emailData.subject ? "" : "Subject is required",
          message: this.emailData.message ? "" : "Message is required",
        };
        return !Object.values(this.errors).some((err) => err);
      },
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      sendEmail() {
        if (!this.validateForm()) return;
        const sanitizedMessage = DOMPurify.sanitize(this.emailData.message);
        const newEmail = { ...this.emailData, message: sanitizedMessage };

        this.$store.commit("ADD_INBOX_EMAIL", newEmail);
        this.$store.commit("ADD_SENT_EMAIL", newEmail);

        if (this.isDraft) {
        this.$store.commit("REMOVE_DRAFT_EMAIL", this.draftEmail);
      }
        this.closeDialog();
      },
      saveDraft() {
        const sanitizedMessage = DOMPurify.sanitize(this.emailData.message);
        const draftEmail = { ...this.emailData, message: sanitizedMessage };

        this.$store.commit("ADD_DRAFT_EMAIL", draftEmail);
        
        this.closeDialog();
      },
      closeDialog() {
        this.dialog = false;
        this.emailData = { name: "", sender: "", receiver: "", subject: "", message: "" };
      },
    },
    components: {
      Template,
    },
  };
  </script>  