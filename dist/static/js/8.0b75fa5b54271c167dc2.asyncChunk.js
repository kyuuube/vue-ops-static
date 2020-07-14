(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mutations; });
const namespace = 'account';
const getters = {
  login: 'login',
  logout: 'logout',
  user: 'user',
  routerList: 'routerList',
  companyList: 'companyList',
  selectedRouter: 'selectedRouter',
  currentMenuId: 'currentMenuId',
  currentOpenMenuIds: 'currentOpenMenuIds',
  isCollapsed: 'isCollapsed',
  menu: 'menu'
};
const actions = {
  login: 'login',
  setToken: 'setToken',
  logout: 'logout',
  user: 'user',
  getCompanyList: 'getCompanyList',
  getCurrentUserInfo: 'getCurrentUserInfo',
  setUserInfo: 'setUserInfo',
  setRouterList: 'setRouterList',
  setSelectedRouter: 'setSelectedRouter',
  setCurrentMenuId: 'setCurrentMenuId',
  setCurrentOpenMenuIds: 'setCurrentOpenMenuIds',
  setCollapsed: 'setCollapsed',
  setMenu: 'setMenu'
};
const mutations = {
  token: 'token',
  logout: 'logout',
  user: 'user',
  routerList: 'routerList',
  companyList: 'companyList',
  selectedRouter: 'selectedRouter',
  currentMenuId: 'currentMenuId',
  currentOpenMenuIds: 'currentOpenMenuIds',
  isCollapsed: 'isCollapsed',
  menu: 'menu'
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(21);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);

 // plugins

 // modules


Object(vuex__WEBPACK_IMPORTED_MODULE_1__["install"])(vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
const store = new vuex__WEBPACK_IMPORTED_MODULE_1__["Store"]({
  plugins: (_plugins__WEBPACK_IMPORTED_MODULE_2___default()),
  modules: _modules__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],

  /**
   * 要开启严格模式，只需要在创建 Vuex store 实例时传入 strict: true
   * 在严格模式中，每当 Vuex state 在 mutation handlers 外部被改变时都会抛出错误。
   * 不要在生产环境中开启严格模式！ 为了检测在不合适的地方发生的状态修改, 严格模式会对 state 树进行一个深观察 (deep watch)。
   * 所以为了避免不必要的性能损耗，请在生产环境中关闭严格模式。
   */
  strict: "production" !== 'production'
});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',

  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },

  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start(); //  hook the progress bar to start before we move router-view

    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress; // parse meta tags

        this.$Progress.parseMeta(meta);
      } //  start the progress bar


      this.$Progress.start(); //  continue to next page

      next();
    }); //  hook the progress bar to finish after we've finished moving router-view

    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }

});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(23).default
var update = add("6b384136", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'layout-base-content',
  props: {
    search: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {};
  }

});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(23).default
var update = add("9015a238", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(93);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createProxy; });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);

function createProxy(obj, config = {}) {
  const proxy = Object.assign({}, obj);
  Object.keys(proxy).forEach(key => {
    Object.defineProperty(proxy, key, {
      get() {
        return config.get ? config.get(obj, key) : obj[key];
      },

      set(value) {
        config.set ? config.set(obj, key, value) : obj[key] = value;
      }

    });
    const value = obj[key];

    if (config.deep && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
      obj[key] = createProxy(value, config);
    }
  });
  return proxy;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app" },
    [_c("router-view"), _vm._v(" "), _c("vue-progress-bar")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(96);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "layout-base-content" }, [
    _c("div", { staticClass: "content-header" }, [_vm._t("header")], 2),
    _vm._v(" "),
    _vm.search
      ? _c("div", { staticClass: "search" }, [_vm._t("search")], 2)
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _filter_checkLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _filter_checkPermission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);




 // 如果使用 CommonJS 模块规范, 需要显式的使用 Vue.use() 安装路由模块

vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]); // 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制

const router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'hash',
  routes: _routes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] // 路由

});
Object(_filter_checkLogin__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(router);
Object(_filter_checkPermission__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(router);
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _modules_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _modules_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);




const routes = [{
  path: '/login',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 113)),
  meta: {
    requireAuth: false
  }
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 114)),
  meta: {
    requireAuth: true
  },
  children: [{
    path: '',
    redirect: '/dashboard'
  }, {
    path: '/dashboard',
    component: () => Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(26), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 115)),
    meta: {
      requireAuth: true,
      menuCode: 'dashboard'
    }
  }, ..._modules_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], ..._modules_role__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], ..._modules_menu__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], ..._modules_article__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: '/system/authority',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 116)),
    meta: {
      requireAuth: true,
      menuCode: 'authority'
    }
  }, {
    path: '/notAuthority',
    component: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 117)),
    meta: {
      requireAuth: false
    }
  }]
}, {
  path: '*',
  component: () => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, 118)),
  meta: {
    requireAuth: false
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/system/user',
  component: () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 119)),
  meta: {
    requireAuth: true
  },
  children: [{
    path: '',
    redirect: 'list'
  }, {
    path: 'list',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 120)),
    meta: {
      requireAuth: true,
      menuCode: 'user'
    }
  }, {
    path: 'detail/:id',
    component: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, 121)),
    meta: {
      requireAuth: true,
      menuCode: 'user'
    }
  }, {
    path: 'add',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 58)),
    meta: {
      requireAuth: true,
      menuCode: 'user'
    }
  }, {
    path: 'edit/:id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 58)),
    meta: {
      requireAuth: true,
      menuCode: 'user'
    },
    props: true
  }]
}]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/system/role',
  component: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 122)),
  meta: {
    requireAuth: true
  },
  children: [{
    path: '',
    redirect: 'list'
  }, {
    path: 'list',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 123)),
    meta: {
      requireAuth: true,
      menuCode: 'role'
    }
  }, {
    path: 'add',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 59)),
    meta: {
      requireAuth: true,
      menuCode: 'role'
    }
  }, {
    path: 'edit/:id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 59)),
    meta: {
      requireAuth: true,
      menuCode: 'role'
    }
  }]
}]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/system/menu',
  component: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 124)),
  meta: {
    requireAuth: true
  },
  children: [{
    path: '',
    redirect: 'list'
  }, {
    path: 'list',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 125)),
    meta: {
      requireAuth: true,
      menuCode: 'menu'
    }
  }, {
    path: 'add',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 60)),
    meta: {
      requireAuth: true,
      menuCode: 'menu'
    }
  }, {
    path: 'edit/:id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 60)),
    meta: {
      requireAuth: true,
      menuCode: 'menu'
    }
  }]
}]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/article',
  component: () => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 126)),
  meta: {
    requireAuth: true
  },
  children: [{
    path: '',
    redirect: 'list'
  }, {
    path: 'list',
    component: () => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 127)),
    meta: {
      requireAuth: true,
      menuCode: 'article'
    }
  }, {
    path: 'add',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 61)),
    meta: {
      requireAuth: true,
      menuCode: 'article'
    }
  }, {
    path: 'edit/:id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 61)),
    meta: {
      requireAuth: true,
      menuCode: 'article'
    }
  }]
}]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (router => {
  router.beforeEach(async (to, from, next) => {
    if (to.meta && !to.meta.requireAuth) {
      // 不需要登录,直接跳过
      next();
      return;
    }

    let currentUser = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getters[`${_store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__[/* namespace */ "d"]}/${_store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].user}`];

    if (!currentUser) {
      return notLogin(router, to);
    }

    if (currentUser) {
      // 已登录
      return next();
    }
  });
});

function notLogin(router, to) {
  // 未登录
  router.replace({
    path: '/login',
    query: to.fullPath === '/' ? {} : {
      redirect: to.fullPath
    }
  }).catch(e => e);
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 开发环境和生产环境也需要的中间件
const common = [];

if (false) {} else {
  // 生产环境中间件
  module.exports = [...common];
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  account: __webpack_require__(68).default
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return persistedState; });
/* harmony import */ var _createProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

function persistedState(storeKey, storeState, state) {
  let item = window.localStorage.getItem(storeKey);

  if (item !== undefined) {
    item = JSON.parse(item);
    Object.keys(storeState).forEach(key => {
      storeState[key] = item && item[key] !== undefined ? item[key] : storeState[key];
    });
  }

  const storeStateProxy = Object(_createProxy__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(storeState, {
    deep: true,

    set(obj, key, value) {
      obj[key] = value;
      window.localStorage.setItem(storeKey, JSON.stringify(storeState));
    }

  });
  const proxyState = Object(_createProxy__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object.assign({}, storeStateProxy, state), {
    get(obj, key) {
      return key in storeStateProxy ? storeStateProxy[key] : state[key];
    },

    set(obj, key, value) {
      key in storeStateProxy ? storeStateProxy[key] = value : state[key] = value;
    }

  });
  return proxyState;
}

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _common_getNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);



/* harmony default export */ __webpack_exports__["a"] = (router => {
  router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && to.path !== '/notAuthority' && to.path !== '/404' && to.matched[0].path !== '*') {
      const menu = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getters[`${_store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__[/* namespace */ "d"]}/${_store_modules_account_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].menu}`];
      const node = Object(_common_getNode__WEBPACK_IMPORTED_MODULE_2__[/* getNode */ "a"])(to.meta.menuCode, menu, 'menuCode');

      if (!node) {
        return notAuthority(router);
      } else {
        return next();
      }
    } else {
      next();
    }
  });
});

function notAuthority(router) {
  router.push({
    path: '/notAuthority'
  }).catch(e => e);
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNode; });
const getNode = (id, nodes, customId) => {
  for (const node of nodes) {
    if (id === node[customId]) {
      return node;
    }

    if (node.children && node.children.length > 0) {
      const result = getNode(id, node.children, customId);

      if (result === null) {
        continue;
      } else {
        return result;
      }
    }
  }

  return null;
};

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _LayoutBaseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _LayoutBaseContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _LayoutBaseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LayoutBaseContent_vue_vue_type_template_id_52b772ae___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/layout/LayoutBaseContent.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(65);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(67);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#iconfont" });
// Module
exports.push([module.i, "@font-face {\n  font-family: 'iconfont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* IE9 */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype'),  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: 'iconfont' !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-essay:before {\n  content: '\\e655';\n}\n.icon-menu:before {\n  content: '\\e613';\n}\n.icon-user:before {\n  content: '\\e880';\n}\n.icon-system:before {\n  content: '\\e6a6';\n}\n.icon-dashboard:before {\n  content: '\\e78b';\n}\n.icon-role:before {\n  content: '\\e606';\n}\nbody,\nhtml {\n  background-color: #f5f7f9;\n}\nbody {\n  margin: 0;\n}\nh4 {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n}\nbody::-webkit-scrollbar {\n  display: none;\n}\n/* fade-transform */\n.fade-transform-leave-active,\n.fade-transform-enter-active {\n  transition: all 0.5s;\n}\n.fade-transform-enter {\n  opacity: 0;\n  transform: translateX(5px);\n}\n.fade-transform-leave-to {\n  opacity: 0;\n  transform: translateX(15px);\n}\n/* breadcrumb transition */\n.breadcrumb-enter-active,\n.breadcrumb-leave-active {\n  transition: all 0.5s;\n}\n.breadcrumb-enter,\n.breadcrumb-leave-active {\n  opacity: 0;\n  transform: translateX(10px);\n}\n.breadcrumb-move {\n  transition: all 0.5s;\n}\n.breadcrumb-leave-active {\n  position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/images/iconfont-934c8558.eot");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/images/iconfont-f5c3d52c.woff");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/images/iconfont-da6daff1.ttf");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAic3RhdGljL2ltYWdlcy9pY29uZm9udC0yYWQ2YzJjZi5zdmciOw==");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_common_persistedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
// utils
 // import * as doorControlApi from "../../../apis/doorControlApi";
// import * as userApi from "../../../apis/userApi";


const state = Object(src_common_persistedState__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_types__WEBPACK_IMPORTED_MODULE_1__[/* namespace */ "d"], {
  permissions: [],
  islogin: 1,
  user: {},
  token: null,
  routerTab: [],
  routerList: [],
  companyList: [],
  superAdmin: false,
  isCollapsed: false,
  menu: []
}, {
  selectedRouter: [],
  currentMenuId: sessionStorage.currentMenuId ? JSON.parse(sessionStorage.currentMenuId) : 1,
  currentOpenMenuIds: sessionStorage.currentOpenMenuIds ? JSON.parse(sessionStorage.currentOpenMenuIds) : [] // ...other

});
const mutations = {
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].token]: (state, data) => {
    window.localStorage.setItem('token', data);
    state.token = data;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].iframelogin]: state => {
    state.islogin = true;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].logout]: state => {
    state.islogin = false;
    state.token = null;
    state.user = null;
    state.selectedRouter = [];
    state.currentMenuId = 1;
    state.currentOpenMenuIds = [];
    sessionStorage.clear();
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].user]: (state, data) => {
    state.user = data;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].routerList]: (state, data) => {
    state.routerList = data;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].companyList]: (state, data) => {
    state.companyList = data;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].selectedRouter]: (state, data) => {
    state.selectedRouter = data;
    sessionStorage.selectedRouter = JSON.stringify(data);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].currentMenuId]: (state, data) => {
    state.currentMenuId = data;
    sessionStorage.currentMenuId = JSON.stringify(data);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].currentOpenMenuIds]: (state, data) => {
    state.currentOpenMenuIds = data;
    sessionStorage.currentOpenMenuIds = JSON.stringify(data);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].isCollapsed]: (state, data) => {
    state.isCollapsed = data;
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].menu]: (state, data) => {
    state.menu = data;
  }
};
const actions = {
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setToken]: ({
    commit
  }, token) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].token, token);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].logout]: ({
    commit
  }) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].logout);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setUserInfo]: ({
    commit
  }, user) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].user, user);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setRouterList]: ({
    commit
  }, list) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].routerList, list);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setSelectedRouter]: ({
    commit
  }, list) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].selectedRouter, list);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setCurrentMenuId]: ({
    commit
  }, list) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].currentMenuId, list);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setCurrentOpenMenuIds]: ({
    commit
  }, id) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].currentOpenMenuIds, id);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setCollapsed]: ({
    commit
  }, data) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].isCollapsed, data);
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"].setMenu]: ({
    commit
  }, data) => {
    commit(_types__WEBPACK_IMPORTED_MODULE_1__[/* mutations */ "c"].menu, data);
  }
};
const getters = {
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].islogin]: state => state.islogin,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].token]: state => state.token,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].user]: state => state.user,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].companyList]: state => state.companyList,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].selectedRouter]: state => {
    return state.selectedRouter > 0 ? state.selectedRouter : JSON.parse(sessionStorage.selectedRouter || '[]');
  },
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].currentMenuId]: state => state.currentMenuId,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].currentOpenMenuIds]: state => state.currentOpenMenuIds,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].isCollapsed]: state => state.isCollapsed,
  [_types__WEBPACK_IMPORTED_MODULE_1__[/* getters */ "b"].menu]: state => state.menu
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
});

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutBaseContent_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".layout-base-content {\n  display: flex;\n  flex-direction: column;\n  background-color: #f0f2f5;\n}\n.layout-base-content .content-header {\n  flex-shrink: 0;\n  padding: 12px 18px 8px 18px;\n  background-color: #ffffff;\n}\n.layout-base-content .content-header h2 {\n  display: block;\n  margin-bottom: 0;\n  padding-right: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 36px;\n}\n.layout-base-content .search {\n  background-color: #ffffff;\n  margin: 20px 20px 0 20px;\n  padding: 10px;\n}\n.layout-base-content .content {\n  display: block;\n  flex: 1;\n  flex-basis: auto;\n  overflow: auto;\n  /*position: relative;*/\n  background-color: #ffffff;\n  margin: 20px;\n  padding: 15px;\n}\n.layout-base-content .content .table-toolbar {\n  color: #000c17;\n  font-size: 16px;\n  padding: 0 0 10px 0;\n  line-height: 32px;\n}\n.layout-base-content .el-form-item {\n  margin-bottom: 4px !important;\n}\n.layout-base-content .el-pagination {\n  margin-top: 10px;\n}\n.layout-base-content .el-table table th {\n  background-color: #f8f8f8;\n  color: #000;\n  font-weight: 300;\n  padding: 8px;\n}\n.layout-base-content .el-table {\n  margin-top: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_layout_LayoutBaseContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_13__);





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
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_progressbar__WEBPACK_IMPORTED_MODULE_4___default.a, options);

 // 引入中文

 // 设置中文

moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale('zh-cn');



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(element_ui__WEBPACK_IMPORTED_MODULE_9___default.a); // require styles




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default.a
/* { default global options } */
);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('baseContent', src_components_layout_LayoutBaseContent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$moment = moment__WEBPACK_IMPORTED_MODULE_6___default.a;
window.setTimeout(() => {
  const loading = document.querySelector('.mask');
  loading.style.display = 'none';
}, 3000);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  store: _store__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  template: '<App/>',
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  }
});

/***/ })
]]);