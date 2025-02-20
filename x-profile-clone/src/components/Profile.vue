<template>
    <v-container class="w-50 pa-0">
        <v-img src="/header.jpg"
        height="300" cover></v-img>

        <v-container class="pa-0 px-6">
            <v-row justify="space-between" class="profile">
                <v-col cols="auto" class="mt-2">
                    <v-avatar image="/bharat.jpg" size="200"></v-avatar>
                </v-col>
                <v-col cols="auto" class="mt-6" align-self="center">
                    <v-btn variant="outlined" rounded="xl">Edit Profile</v-btn>
                </v-col>
            </v-row>
            <div class="pl-8">
                <h2 class="pt-4">Bharat Joshi</h2>
                <p>@bharatjoshics</p>
                <p class="py-2">I thrive in fast-paced, dynamic environments and<br> passionate about leveraging technology to create<br> impactful solutions.</p>
            </div>

            <v-row class="pl-6 pt-6">
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-briefcase-outline"></v-icon>
                    <span>Science & Technology</span>
                </v-col>
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-map-marker"></v-icon>
                    <span>India</span>
                </v-col>
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-link-variant"></v-icon>
                    <span><a href="https://www.linkedin.com/in/bharatjoshics/">LinkedIn</a></span>
                </v-col>
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-calendar-month"></v-icon>
                    <span>Joined January, 2025</span>
                </v-col>
            </v-row>

            <v-row class="pl-6">
                <v-col cols="auto">
                    <h4>543 following</h4>
                </v-col>
                <v-col cols="auto">
                    <h4>54k followers</h4>
                </v-col>
            </v-row>

            <v-tabs class="pl-6" v-model="tab">
                <v-tab v-for="tab in tabList" :key="tab.value" :value="tab.value" color="blue"> {{ tab.title }}</v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item v-for="tab in tabList" :value="tab.value" :key="tab.value">
                    <component :is="tab.component" />
                </v-window-item>
            </v-window>
        </v-container>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Tweet from './Tweet.vue';
import Replies from './Replies.vue';
import Highlights from './Highlights.vue';
import Media from './Media.vue';
import Likes from './Likes.vue';

const tab = ref(null)
const tabList = [{
    title: "Posts",
    value: "posts",
    component: Tweet
},{
    title: "Replies",
    value: "replies",
    component: Replies
},{
    title: "Highlights",
    value: "highlights",
    component: Highlights
},{
    title: "Media",
    value: "media",
    component: Media
},{
    title: "Likes",
    value: "likes",
    component: Likes
}]

</script>

<style>
    .profile{
        margin-top: -100px !important;
    }
</style>