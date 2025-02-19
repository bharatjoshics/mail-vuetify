<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item prepend-icon="mdi-account">
        <v-list-item-title class="text-center"><b>my_email@mail.com</b></v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-email" to="/inbox">
        <v-list-item-title>Inbox</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-send" to="/sent">
        <v-list-item-title>Sent</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
};
</script>
