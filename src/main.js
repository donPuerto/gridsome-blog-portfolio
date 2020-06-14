import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

import store from "../store";



import MasterLayout from '~/layouts/MasterLayout.vue'

export default function (Vue, {
  router,
  head,
  isClient,
  appOptions
}) {
    // Vuetify setup start here...
    head.link.push({
      rel: 'stylesheet',
      href:
        'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    });

    head.link.push({
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
    });

    const opts = {
        theme: {
        dark: false,
        themes: {
          dark: {
          primary: colors.grey.darken4,
          accent: colors.shades.black,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
          }
        }
      },
      icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
    }; //opts includes, vuetify themes, icons, etc.
    
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);
    // Vuetify setup end here...



     // Set Master layout as a global component
     Vue.component('Layout', MasterLayout);

     // State
     appOptions.store = store;

     // Set global event bus
     Vue.prototype.$fire = new Vue();
   }
