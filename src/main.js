import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueProgressBar from 'vue-progressbar'

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
}

Vue.use(VueProgressBar, options)

import baseContent from 'src/components/layout/LayoutBaseContent'
import moment from 'moment'
import VueQuillEditor from 'vue-quill-editor'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
// Vue.use(ViewUI);
Vue.component("baseContent", baseContent);

Vue.prototype.$moment = moment

// router.beforeEach((to, from, next) => {
//     VueProgressBar.start()
//     next();
// });
//
// router.afterEach((to, from, next) => {
//     VueProgressBar.finish();
//     window.scrollTo(0, 0);
// });

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
