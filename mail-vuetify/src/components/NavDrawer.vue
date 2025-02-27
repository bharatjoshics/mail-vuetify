<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item prepend-icon="mdi-account">
        <v-list-item-title class="text-center"><b>my_email@mail.com</b></v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-plus" class="mt-2" @click="dialog = true">
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
      <!--<v-list-item prepend-icon="mdi-file-document-edit-outline" to="/template">
         <v-list-item-title>Template</v-list-item-title>
      </v-list-item>-->
    </v-list>
  </v-navigation-drawer>

  <!-- Dialog Box -->
  <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>Compose Email</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field v-model="emailData.name" label="Name"></v-text-field>
            <v-text-field v-model="emailData.sender" label="From"></v-text-field>
            <v-text-field v-model="emailData.receiver" label="To"></v-text-field>
            <v-text-field v-model="emailData.subject" label="Subject"></v-text-field>
            <!--<v-textarea v-model="emailData.message" label="Message"></v-textarea>-->
            <Template v-model="emailData.message" />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="sendEmail">Send</v-btn>
            <v-btn color="secondary" @click="saveDraft">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
//import { mapMutations } from 'vuex';
import Template from './Template.vue';
export default {
  name: "NavDrawer",
  data() {
    return {
      dialog: false,
      emailData: {
        name: "",
        sender: "",
        receiver: "",
        subject: "",
        message: "",
      }
    };
  },
  methods: {
    //...mapMutations(["addInboxEmail", "addSentEmail", "addDraftEmail"]),
    sendEmail() {
      const strippedMessage = this.stripHtmlTags(this.emailData.message);
      const newEmail = { ...this.emailData, message: strippedMessage };
      this.$store.commit("ADD_INBOX_EMAIL",newEmail);
      this.$store.commit("ADD_SENT_EMAIL",newEmail);
      this.resetForm();
    },
    saveDraft() {
      const strippedMessage = this.stripHtmlTags(this.emailData.message);
      const draftEmail = { ...this.emailData, message: strippedMessage };
      this.$store.commit("ADD_DRAFT_EMAIL",draftEmail);
      this.resetForm();
    },
    resetForm() {
      this.emailData = { name: "", sender: "", receiver: "", subject: "", message: "" };
      this.dialog = false;
    },
    stripHtmlTags(input) {
      const doc = new DOMParser().parseFromString(input, 'text/html');
      return doc.body.textContent || "";
    }
  },
  components: { Template }
};
</script>
