<template>
  <Layout>
    <v-container style="margin-top: 60px;">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-banner class="pt-2">
              <v-list three-line>
                <!-- <v-list-item-avatar>
                  {{$page.tag.avatar}}
                  <v-img :src="$page.tag.avatar"></v-img>
                </v-list-item-avatar>-->

                <v-list-item-content>
                  <v-list-item-title v-html="$page.tag.founder"></v-list-item-title>
                  <v-list-item-subtitle>
                    <a
                      :href="$page.tag.projectRepo"
                      target="_blank"
                      class="text-decoration-none"
                    >{{ $page.tag.founder }}</a>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list>

              <div class="text-heading-5">{{ $page.tag.title }}</div>
              <div class="text-caption mb-2">
                by:
                <span class="text-subtitle-2">
                  <a
                    :href="$page.tag.projectRepo"
                    target="_blank"
                    class="text-decoration-none"
                  >{{ $page.tag.founder }}</a>
                </span>
              </div>
              <div class="text-caption mb-2">{{ $page.tag.description }}</div>
              <div class="text-caption">
                <a :href="$page.tag.github" target="_blank" class="text-decoration-none">Github Repo</a>
              </div>
              <div class="text-caption">
                <a
                  :href="$page.tag.website"
                  target="_blank"
                  class="text-decoration-none"
                >Official Site</a>
              </div>

              <!-- <pre>{{ $page.tag.belongsTo.edges }}</pre> -->
            </v-banner>
            <v-card-text class="grey lighten-4">
              <v-sheet max-width="80%" class="mx-auto py-10 px-10">
                <v-col cols="12">
                  <v-row align="start" justify="center">
                    <v-col
                      cols="12"
                      md="6"
                      lg="4"
                      v-for="edge in $page.tag.belongsTo.edges"
                      :key="edge.node.id"
                    >
                      <PostCard :post="edge.node" />
                    </v-col>
                  </v-row>
                </v-col>
                <div></div>
              </v-sheet>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
  query Tag ($id:ID!) {
    tag(id: $id) {
    id
    color
    title
    icon
    description
    github
    projectRepo
    founder
    website
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            path
            title
            slug
            created_at (format: "MMM D YYYY")
            updated_at (format: "MMM D YYYY")
            published
            description
            cover_image
            series
            tags {
              id
              path
              title
              color
              icon
              excerpt
              
            }
            author {
              id
              path
              name
              email
              skype
              twitter
              github
              avatar
              jobTitle
        
            }
          }
        }
      }
    }
      
    }
  }
</page-query>

<script>
import PostCard from "~/components/PostCard";
export default {
  components: {
    PostCard
  }
};
</script>
