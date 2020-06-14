<template>
  <v-btn v-scroll="onScroll" v-show="fab" fab fixed bottom right color="red" @click="toTop">
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>
<script>
export default {
  name: "ScrollToTopCore",
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0, {
        duration: 0,
        offset: 0,
        easing: "easeInOutQuint"
      });
    }
  }
};
</script>