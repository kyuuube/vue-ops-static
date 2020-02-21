import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from 'src/plugins/vuetify' // path to vuetify export
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// Vue.use(ViewUI);

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    template: '<App/>',
    components: { App }
});
