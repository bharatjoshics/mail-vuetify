<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item prepend-icon="mdi-account">
        <v-list-item-title class="text-center"><b>my_email@mail.com</b></v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-plus" class="mt-2" @click="openComposeDialog">
        <v-list-item-title>Compose</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-email" to="/inbox" class="mt-2">
        <v-list-item-title>Inbox</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-send" to="/sent">
        <v-list-item-title>Sent</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-file-document-edit-outline" to="/draft">
        <v-list-item-title>Draft</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <ComposeMessageDialogue v-model="dialog" :draftEmail="selectedDraft" />
</template>

<script>
import Template from "./Template.vue";
import DOMPurify from "dompurify";
import ComposeMessageDialogue from "./ComposeMessageDialogue.vue";

export default {
  name: "NavDrawer",
  data() {
    return {
      dialog: false,
      selectedDraft: null,
      emailData: {
        name: "",
        sender: "",
        receiver: "",
        subject: "",
        message: "",
      },
      // Validation rules
      requiredRule: (v) => !!v || "This field is required",
      emailRule: (v) => /.+@.+\..+/.test(v) || "Enter a valid email",
    };
  },
  methods: {
    async validateAndSend() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;

      const sanitizedMessage = DOMPurify.sanitize(this.emailData.message);
      const newEmail = { ...this.emailData, message: sanitizedMessage };
      this.$store.commit("ADD_INBOX_EMAIL", newEmail);
      this.$store.commit("ADD_SENT_EMAIL", newEmail);
      this.resetForm();
    },
    saveDraft() {
      const sanitizedMessage = DOMPurify.sanitize(this.emailData.message);
      const draftEmail = { ...this.emailData, message: sanitizedMessage };
      this.$store.commit("ADD_DRAFT_EMAIL", draftEmail);
      this.resetForm();
    },
    cancelDraft() {
      this.resetForm();
      this.dialog = false;
    },
    resetForm() {
      this.emailData = { name: "", sender: "", receiver: "", subject: "", message: "" };
      this.dialog = false;
    },
    openComposeDialog(draft = null) {
      this.selectedDraft = draft;
      this.dialog = true;
    }
  },
  components: { Template, ComposeMessageDialogue }
};
</script>
