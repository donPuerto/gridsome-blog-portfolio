<template>
  <Layout>
    <v-parallax
      height="400"
      src="https://toppng.com/uploads/preview/code-programming-symbols-letters-texture-11569777920cq2qrlvjch.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="heading-3 font-weight-medium mb-4">Don Puerto</h1>
          <h4 class="subheading">Programming for Fun</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-sheet class="elevation-2 px-10 py-10 rounded-lg">
        <v-row class="fill-height overflow-auto">
          <v-col
            class="py-2"
            :cols="(12/itemsPerRow)"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card
                width="420"
                :elevation="hover ? 16 : 2"
                class="grey lighten-4"
                :to="edge.node.path"
              >
                <v-img :src="edge.node.cover_image" height="150">
                  <div class="fill-height bottom-gradient"></div>
                </v-img>

                <v-card-title>{{edge.node.title}}</v-card-title>
                <v-card-subtitle>{{edge.node.description}}</v-card-subtitle>

                <v-card-subtitle>
                  <div class="caption text-uppercase">Date Created: {{edge.node.created_at}}</div>
                  <div class="caption text-uppercase">Date Updated: {{edge.node.updated_at}}</div>
                </v-card-subtitle>
                <v-spacer></v-spacer>

                <v-card-actions>
                  <v-chip
                    class="ma-2"
                    :color="tag.color"
                    text-color="white"
                    v-for="tag in edge.node.tags"
                    :key="tag.id"
                  >
                    <v-avatar left>
                      <v-icon>{{tag.icon}}</v-icon>
                    </v-avatar>
                    <g-link :to="tag.path" style="text-decoration: none;">
                      <span class="white--text">{{ tag.id }}</span>
                    </g-link>
                  </v-chip>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <p>Total Count: {{$page.posts.totalCount}}</p>
        <p>Page Info: {{$page.posts.pageInfo}}</p>
        <div class="text-center">
          <v-pagination v-model="$page.posts.pageInfo.currentPage" :length="$page.posts.totalCount"></v-pagination>
        </div>
        <Pager :info="$page.posts.pageInfo" />
      </v-sheet>
    </v-container>
  </Layout>
</template>

<page-query>
  query ($page: Int)  {    
      posts: allPost (
        filter: { published: { eq: true } },
        sortBy: "created_at", 
        order: DESC, 
        perPage: 10, 
        page: $page, 
      ) 
        @paginate {
          totalCount
          pageInfo {
            totalPages
            currentPage
          } 
        
          edges {
            node {
              id
              slug
              title
              description
              created_at (format: "DD MMMM YYYY")
              updated_at (format: "DD MMMM YYYY")
              cover_image (width: 860, blur: 10)
              
              series
              path
              tags {
                id
                color
                icon
                path
              }
            }
          }
        }
  }
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager
  },
  data: () => ({}),
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    itemsPerRow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
      }
    }
  },
  mounted() {
    console.log("State", this.$page);
  }
};
</script>

<style></style>
