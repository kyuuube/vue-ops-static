import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueProgressBar from 'vue-progressbar';

const options = {
    color: '#0577ad',
    failedColor: '#cd7979',
    thickness: '4px',
    transition: {
        speed: '0.4s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};

Vue.use(VueProgressBar, options);

import baseContent from 'src/components/layout/LayoutBaseContent';
import moment from 'moment';
// 引入中文
import 'moment/locale/zh-cn';
// 设置中文
moment.locale('zh-cn');
import VueQuillEditor from 'vue-quill-editor';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueQuillEditor /* { default global options } */);
Vue.component('baseContent', baseContent);

Vue.prototype.$moment = moment;

window.setTimeout(() => {
    const loading = document.querySelector('.mask');
    loading.style.display = 'none';
}, 3000);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
