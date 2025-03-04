<template>
  <v-app>
    <NavDrawer />
    <v-main>
      <router-view></router-view> <!-- Displays Inbox or Sent -->
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from "./components/NavDrawer.vue";

export default {
  components: {
    NavDrawer,
  },
};
</script>
