<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center"><b>Drafts</b></v-card-title>
      <v-divider></v-divider>

      <v-table>
        <thead>
          <tr>
            <th><b>Name</b></th>
            <th><b>Subject</b></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(email, index) in draftEmails" :key="index" @click="openDraft(email)">
            <td>{{ email.name }}</td>
            <td>{{ email.subject }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <ComposeMessageDialogue v-model="dialog" :draftEmail="selectedDraft" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ComposeMessageDialogue from "./ComposeMessageDialogue.vue";

export default {
  data() {
    return {
      dialog: false,
      selectedDraft: null,
    };
  },
  computed: {
    ...mapState(["draftEmails"]),
  },
  methods: {
    openDraft(email) {
      this.selectedDraft = email;
      this.dialog = true;
    },
  },
  components: {
    ComposeMessageDialogue,
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
