<template>
  <Layout>
    <v-parallax height="450" :src="require('~/assets/images/parallax.png')">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div class="orange--text text--darken-4 elevation-10 rounded-lg pa-10 mt-12">
            <span
              class="newFont text-h1"
              :class="
                breakpointSwitcher == 6
                  ? 'text-h6'
                  : breakpointSwitcher == 5
                  ? 'text-h5'
                  : breakpointSwitcher == 4
                  ? 'text-h4'
                  : breakpointSwitcher == 3
                  ? 'text-h3'
                  : breakpointSwitcher == 2
                  ? 'text-h2'
                  : 'text-h1'
              "
            >Programming for Fun</span>
            <v-spacer></v-spacer>
            <span class="amber--text text--darken-4 text-subtitle-2 text-uppercase mt-n10">
              <strong>Created By:</strong> Don Puerto
            </span>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container grid-list-md class="px-16">
      <v-sheet class="pa-12" color="grey lighten-3 rounded-lg">
        <v-row align="start" justify="center">
          <v-col cols="12" sm="5" md="3" class="hidden-sm-and-down">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card class="mx-auto rounded-lg">
                  <v-card-text class="d-flex flex-column justify-center align-center py-5">
                    <g-image
                      class="mt-6"
                      style="border-radius: 50%;"
                      width="320"
                      height="320"
                      fit="contain"
                      src="https://s.gravatar.com/avatar/cebf83480fdc866c72007290fa2dc286?s=80"
                    ></g-image>
                  </v-card-text>
                  <v-card-text class="pt-0">
                    <router-link to="/author/donpuerto/" class="text-decoration-none">
                      <div class="text-subtitle-2">Don Puerto</div>
                    </router-link>
                    <div class="text-caption mb-3">Software Engineer</div>

                    <div class="text-caption">Email: don.puerto@hotmail.com</div>
                    <div class="text-caption">Skype: king.james.empire</div>
                  </v-card-text>

                  <v-divider></v-divider>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn
                      rounded
                      class="ma-2"
                      tile
                      color="teal"
                      icon
                      href="https://twitter.com/donpuerto_"
                      target="_blank"
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn
                      rounded
                      class="ma-2"
                      tile
                      color="teal"
                      icon
                      href="https://github.com/donPuerto"
                      target="_blank"
                    >
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="7" md="9">
            <v-row align="start" justify="center">
              <v-col cols="12" md="6" lg="4" v-for="edge in $page.posts.edges" :key="edge.node.id">
                <PostCard :post="edge.node" />
              </v-col>
            </v-row>
            <Pager :info="$page.posts.pageInfo" />
            <p>Total Count: {{ $page.posts.totalCount }}</p>
            <p>Page Info: {{ $page.posts.pageInfo }}</p>
            <div class="text-center">
              <v-pagination
                v-model="$page.posts.pageInfo.currentPage"
                :length="$page.posts.totalCount"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </Layout>
</template>

<script>
import PostCard from "~/components/PostCard";
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import PostAuthor from "~/components/PostAuthor";
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
    PostAuthor,
    PostMeta,
    PostTags,
    PostCard,
    Pager
  },
  data: () => ({}),
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    breakpointSwitcher() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 6;
        case "sm":
          return 5;
        case "md":
          return 4;
        case "lg":
          return 3;
        case "xl":
          return 2;
      }
    }
  },
  mounted() {
    console.log("State", this.$page);
  }
};
</script>

<page-query>
query Post  ($page: Int) {
  posts: allPost (filter: { published: { eq: true }},  sortBy: "created_at", 
        order: DESC, page: $page,  perPage: 6)
  	@paginate  {
      totalCount
        pageInfo {
          totalPages
          currentPage
    } 
    edges {
      node {
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


</page-query>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap");
.newFont {
  font-family: "Balsamiq Sans", cursive !important;
}

img.v-parallax__image {
  opacity: 0.2 !important;
}

img.v-parallax__image:hover {
  opacity: 1 !important;
}
</style>
