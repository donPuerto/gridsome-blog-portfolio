import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from "../store";



import MasterLayout from '~/layouts/MasterLayout.vue'

export default function (Vue, {
  router,
  head,
  isClient,
  appOptions
}) {
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

     

     // Vuetify 
     const opts = {
       icons: {
         iconfont: 'mdi', // default - only for display purposes
       },
     }; //opts includes, vuetify themes, icons, etc.
     Vue.use(Vuetify);
     appOptions.vuetify = new Vuetify(opts);

     // Set Master layout as a global component
     Vue.component('Layout', MasterLayout);

     // State
     appOptions.store = store;

     // Set global event bus
     Vue.prototype.$fire = new Vue();
   }
