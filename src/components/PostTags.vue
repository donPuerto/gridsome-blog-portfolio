<template>
  <div>
    <v-chip class="ma-2" text-color="white" v-for="tag in tags" :key="tag.id" :color="tag.color">
      <v-avatar left>
        <v-icon>mdi-vuejs</v-icon>
      </v-avatar>
      <g-link :to="tag.path" style="text-decoration: none;">
        <span class="white--text">{{ tag.id }}</span>
      </g-link>
    </v-chip>
  </div>
</template>
<script>
export default {
  props: ["tags"]
};
</script>