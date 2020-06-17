<template>
  <v-app-bar absolute elevate-on-scroll height="80">
    <router-link to="/">
      <v-avatar class="mr-3" color="grey lighten-5" size="50">
        <g-image class="elevation-1" contain src="~/assets/images/drp.png" />
      </v-avatar>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-lightbulb-on-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>
