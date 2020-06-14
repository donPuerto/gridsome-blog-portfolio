<template>
  <v-footer class="justify-center" color="#292929" height="40">
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      &copy; {{ new Date().getFullYear() }} — DONPUERTO PTY LTD — Made with 💜
      by Don Puerto
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreFooter',

  data: () => ({
    items: [
      {
        href: '#!',
        icon: 'mdi-twitter',
      },
      {
        href: '#!',
        icon: 'mdi-instagram',
      },
      {
        href: '#!',
        icon: 'mdi-facebook',
      },
      {
        href: '#!',
        icon: 'mdi-google-plus',
      },
      {
        href: '#!',
        icon: 'mdi-reddit',
      },
      {
        href: '#!',
        icon: 'mdi-discord',
      },
      {
        href: '#!',
        icon: 'mdi-pinterest',
      },
    ],
  }),
};
</script>
