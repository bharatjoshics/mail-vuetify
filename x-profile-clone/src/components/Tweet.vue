<template>
    <v-container fluid>
        <v-row align="start" justify="space-between" no-gutters>
            <v-col cols="12" class="d-flex justify-space-between">
                <div class="d-flex">
                    <v-avatar image="/bharat.jpg" size="50"></v-avatar>
                    <p class="ml-2 mt-2">
                        <strong>Bharat</strong>
                        <span class="ml-2">@bharatjoshics</span>
                        <span class="ml-2">Feb 14</span>
                        <p>Hello Everyone!!!</p>
                        <v-row>
                            <v-col cols="4">
                                <v-icon icon="mdi-chat-outline"></v-icon>
                            </v-col>
                            <v-col cols="4">
                                <v-icon icon="mdi-repeat-variant"></v-icon>
                            </v-col>
                            <v-col cols="4">
                                <v-icon icon="mdi-heart-outline"></v-icon>
                            </v-col>
                        </v-row>
                    </p>
                </div>
                <v-btn variant="outlined" rounded="xl">Promote</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>