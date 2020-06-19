<template>
  <Layout>
    <v-container style="margin-top: 60px;">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-banner class="pt-2">
              <v-list three-line>
                <v-list-item>
                  <v-avatar tile color="blue" size="164">
                    <g-image class="rounded-lg" :src="$page.tag.avatar"></g-image>
                  </v-avatar>
                  <v-list-item-content class="ml-5">
                    <v-list-item-title class="text-h3">
                      <div>
                        <a
                          :href="$page.tag.founderRepo"
                          target="_blank"
                          class="text-decoration-none"
                        >{{ $page.tag.founder }}</a>
                      </div>

                      <div class="mt-n4">
                        <a
                          :href="$page.tag.projectRepo"
                          target="_blank"
                          class="text-decoration-none font-weight-light grey--text text--lighten-1 text-h4"
                        >{{ $page.tag.title }}</a>
                      </div>
                    </v-list-item-title>
                    <!-- <v-list-item-subtitle class="pt-0">
                      <a
                        :href="$page.tag.projectRepo"
                        target="_blank"
                        class="text-decoration-none font-weight-light grey--text text--lighten-1 text-h4"
                      >{{ $page.tag.title }}</a>
                    </v-list-item-subtitle>-->
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-banner>
            <v-card-text class="grey lighten-4">
              <v-sheet max-width="80%" class="mx-auto py-10 px-10">
                <v-col cols="12">
                  <v-row align="start" justify="center">
                    <VueRemarkContent />
                  </v-row>
                </v-col>
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
    projectRepo
    icon
    
    founder
    founderRepo
    website
    avatar
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
