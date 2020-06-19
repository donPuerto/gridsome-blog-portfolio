<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card :elevation="hover ? 16 : 2" class="grey lighten-4" :to="post.path">
      <div v-if="post.author.length > 0">
        <v-subheader>AUTHOR</v-subheader>
        <v-list-item v-for="author in post.author" :key="author.id">
          <v-list-item-avatar color="grey">
            <g-image :src="author.avatar"></g-image>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{author.name}}</v-list-item-title>
            <v-list-item-subtitle>{{author.jobTitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-img :src="post.cover_image" height="150">
        <div class="fill-height bottom-gradient"></div>
      </v-img>

      <v-subheader>TITLE</v-subheader>

      <v-card-title class="text-subtitle-2 pt-0 mb-1">{{ post.title }}</v-card-title>
      <v-card-subtitle>{{ post.description }}</v-card-subtitle>

      <v-subheader>DATE</v-subheader>
      <v-card-subtitle class="pt-0">
        <div class="text-caption mb-1">
          Created:
          <strong>{{ post.created_at }}</strong>
        </div>
        <div class="text-caption">
          Updated:
          <strong>{{ post.updated_at }}</strong>
        </div>
      </v-card-subtitle>

      <v-divider></v-divider>

      <v-card-actions class="grey lighten-3">
        <PostTags :tags="post.tags" />
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
<script>
import PostTags from "~/components/PostTags";
export default {
  components: {
    PostTags
  },
  props: ["post"]
};
</script>

<style lang="sass"></style>
