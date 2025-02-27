<template>
    <v-app id="app">
      <v-container>
        <VuetifyTiptap v-model="content" label="Message" rounded :min-height="200" :max-height="465" :max-width="900" :extensions="extensions"
        @update:content="updateContent"/>
        <!--<VuetifyViewer :value="content" />-->
      </v-container>
    </v-app>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import { VuetifyTiptap, VuetifyViewer } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import { BaseKit, Bold, Italic, Underline, Strike, Color, Highlight, Heading, Link, Image, Video, Table, Fullscreen, History } from 'vuetify-pro-tiptap'

const content = ref('');
const emit = defineEmits(['update:modelValue'])

const extensions = [
  BaseKit.configure({
    placeholder: {
      placeholder: 'Enter some text...'
    }
  }),
  Bold, Italic, Underline, Strike, Color, Highlight, Heading,
  Link, Image, Video, Table, Fullscreen,  History
]

watch(content, (newContent) => {
  emit('update:modelValue', newContent);
})
</script>