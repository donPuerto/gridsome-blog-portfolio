<template>
  <Layout>
    <v-container style="margin-top: 60px;">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-banner class="pt-2">
              <div class="text-h5">{{ $page.post.title }}</div>
              <div class="text-body-2">{{ $page.post.description }}</div>
              <div class="text-body-2 mt-1 text--grey">
                <strong>Author:</strong>
                {{ $page.post.author }}
              </div>
              <v-spacer></v-spacer>
              <div class="mt-5 text-caption">
                <strong>Date Created:</strong>
                <span>{{ $page.post.created_at }}</span>
              </div>
              <div class="text-caption">
                <strong>Date Updated:</strong>
                <span>{{ $page.post.updated_at }}</span>
              </div>

              <template v-slot:actions>
                <div v-for="tag in $page.post.tags" :key="tag.id">
                  <v-chip
                    :to="tag.path"
                    class
                    :color="tag.color"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon>{{ tag.icon }}</v-icon>
                    </v-avatar>

                    {{ tag.id }}
                  </v-chip>
                </div>
              </template>
            </v-banner>
            <v-card-text class="grey lighten-4">
              <v-sheet max-width="80%" class="mx-auto py-10 px-10">
                <VueRemarkContent />
              </v-sheet>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<page-query>
  query Post ($id: ID!) {
  post(id: $id) {
      title,
      description
      author
      created_at (format: "DD MMMM YYYY")
      updated_at (format: "DD MMMM YYYY")
      cover_image
      tags {
        id
        color
        icon
        path
      }
      
    }
}
</page-query>
<script>
export default {};
</script>
