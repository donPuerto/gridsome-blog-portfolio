<template>
  <v-app>
    <scroll-to-top-core />
    <appbarCore />
    <v-main>
      <slot />
    </v-main>
    <footerCore />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import appbarCore from '~/components/cores/AppbarCore.vue';
import footerCore from '~/components/cores/FooterCore.vue';
import scrollToTopCore from '~/components/cores/ScrollToTopCore.vue';
export default {
  components: {
    appbarCore,
    footerCore,
    scrollToTopCore,
  },
};
</script>
