import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueProgressBar from 'vue-progressbar';

import VueRouter from 'vue-router';
import routes from '../src/router/routes';

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

// window.setTimeout(() => {
//     const loading = document.querySelector('.mask');
//     loading.style.display = 'none';
// }, 3000);

// let router = null;
let instance = null;

function render(props = {}) {
    console.log('666')
    const { container } = props;
    // router = new VueRouter({
    //     base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    //     mode: 'history',
    //     routes,
    // });

    instance = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// new Vue({
//     el: '#app',
//     router,
//     store,
//     template: '<App/>',
//     components: { App }
// });

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
    console.log('[vue] props from main framework', props);
    // storeTest(props);
    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
}
