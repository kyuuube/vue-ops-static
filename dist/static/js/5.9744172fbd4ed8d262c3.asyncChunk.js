(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_index__WEBPACK_IMPORTED_MODULE_1__);


const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL:  true ? _config_index__WEBPACK_IMPORTED_MODULE_1__["build"].api : undefined,
  timeout: 50000
}); // 请求拦截器

request.interceptors.request.use(config => {
  config.headers = {
    authorization: localStorage.getItem('token')
  };
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
}); // let isReset = false;
// 响应拦截器

request.interceptors.response.use(response => {
  if (axios__WEBPACK_IMPORTED_MODULE_0___default.a.isCancel(response)) {
    return Promise.reject(response);
  }

  response = response.data;
  console.log(response); // if (response.code === 401) {
  //     if (!isReset) {
  //         isReset = true;
  //         MessageBox.alert("登录信息过时，请重新登录！", "登录超时", {
  //             confirmButtonText: "返回登录页",
  //             callback: () => {
  //                 store.dispatch(`${$account.namespace}/${$account.actions.logout}`);
  //                 // router.replace("/login").catch(e => e);
  //                 // 如果使用vue router 更新 url isReset 变量不会刷新，会出现重复弹窗
  //                 window.location.href = `/#/login?redirect=${window.encodeURIComponent(window.location.hash.substring(1))}`;
  //             }
  //         });
  //     }
  //     return Promise.reject();
  // }

  if ((response.code === 500 || response.code === 503) && "production" === 'production') {
    // Message.error('服务器繁忙')
    return Promise.reject();
  }

  return response;
}, error => {
  // if (axios.isCancel(error)) {
  //     return Promise.reject({
  //         cancel: true
  //     });
  // }
  // const msg = process.env.NODE_ENV !== "development" ? "服务器繁忙" : '✨ 服务器驾崩了！✨'
  // if  (process.env.NODE_ENV !== "development") {
  //     Message.error(msg)
  // } else {
  //     Notification.success({
  //         title: '祝い✨✨✨✨✨✨✨✨',
  //         message: msg,
  //         duration: 0
  //     })
  // }
  console.log(error);
  return Promise.reject();
});
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = {
    dev: {
        devtoolType: 'cheap-module-eval-source-map',
        host: 'localhost',
        port: '2887',
        api: '/api',
    },
    build: {
        devtoolType: '(none)',
        api: 'http://apiv2.kyuuu.be'
    }
};


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return editUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return userDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getRoleOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return editRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return roleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getMenuTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMenu; });
/* unused harmony export getMenuLDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAuthorityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return saveAuthority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getAuthorityTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getCurrentTree; });
/* harmony import */ var _common_request_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);

const login = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/auth/login', data);
const getUserList = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/account/list', {
  params
});
const addUser = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/account/user', data);
const editUser = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].put('/account/user', data);
const delUser = id => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(`/account/user/${id}`);
const userDetail = id => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/account/detail/${id}`);
const getRoleList = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/role/list', {
  params
});
const getRoleOptions = () => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/role/options');
const addRole = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/role/create', data);
const editRole = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].put('/role/edit', data);
const roleDetail = id => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/role/detail/${id}`);
const getMenuTree = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/menu/tree', {
  params
});
const getMenuList = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/menu/list', {
  params
});
const addMenu = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/menu/create', data);
const getMenuLDetail = id => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/menu/detail/${id}`);
const getAuthorityList = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/permission/list', {
  params
});
const saveAuthority = data => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/permission/create', data);
const getAuthorityTree = params => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/menu/authority', {
  params
});
const getCurrentTree = () => _common_request_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/menu/user/tree');

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var src_apis_accountApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
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
//
//
//
//
//
//
//
// apis

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'role-modify',

  data() {
    return {
      props: {
        label: 'name'
      },
      tree: [],
      role: {
        name: '',
        description: '',
        status: '',
        permissionIdList: [],
        menuIdList: []
      },
      multipleSelection: [],
      loading: false,
      btnLoading: false
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    edit() {
      return !!this.id;
    }

  },
  methods: {
    save() {
      if (!this.edit) {
        this.addRole();
      } else {
        this.editRole();
      }
    },

    async addRole() {
      const data = { ...this.role
      };
      data.menuIdList = this.multipleSelection;
      this.btnLoading = true;
      const {
        code,
        msg
      } = await src_apis_accountApi__WEBPACK_IMPORTED_MODULE_0__[/* addRole */ "b"](data).catch(e => e);
      this.btnLoading = false;

      if (code !== 200) {
        return this.$message.error(msg);
      }

      this.$message.success('保存成功');
      this.$router.back();
    },

    async editRole() {
      const data = { ...this.role
      };
      data.menuIdList = this.multipleSelection;
      this.btnLoading = true;
      const {
        code,
        msg
      } = await src_apis_accountApi__WEBPACK_IMPORTED_MODULE_0__[/* editRole */ "e"](data).catch(e => e);
      this.btnLoading = false;

      if (code !== 200) {
        return this.$message.error(msg);
      }

      this.$message.success('保存成功');
      this.$router.back();
    },

    async getAuthorityTree() {
      const {
        code,
        data
      } = await src_apis_accountApi__WEBPACK_IMPORTED_MODULE_0__[/* getAuthorityTree */ "h"]().catch(e => e);

      if (code !== 200) {
        return this.$message.error('加载权限列表失败');
      }

      this.tree = data;
    },

    async getRoleDetail() {
      this.loading = true;
      const {
        code,
        data
      } = await src_apis_accountApi__WEBPACK_IMPORTED_MODULE_0__[/* roleDetail */ "p"](this.id).catch(e => e);
      this.loading = false;

      if (code !== 200) {
        return this.$message.error('加载角色详情失败');
      }

      this.role = data;
      this.role.permissionIdList = this.role.permissions.map(i => i.id);
      this.role.menuIdList = this.role.menus.map(i => i.id);
      this.eachChildren(this.tree);
      this.$forceUpdate();
    },

    authorityChange(checked, auth) {
      if (checked) {
        this.role.permissionIdList.push(auth.id);
      } else {
        console.log(auth.id);
        console.log(this.role.permissionIdList);
        this.role.permissionIdList = this.role.permissionIdList.filter(i => i !== auth.id);
      }
    },

    handleSelectionChange(v) {
      this.multipleSelection = v.map(i => i.id);
    },

    // 遍历```
    eachChildren(list) {
      if (!Array.isArray(list)) {
        return;
      }

      list.forEach(i => {
        if (this.role.menuIdList.find(item => item === i.id)) {
          this.$refs.multipleTable.toggleRowSelection(i);
        }

        if (i.authority && i.authority.length > 0) {
          i.authority.forEach(auth => {
            const isChecked = !!this.role.permissionIdList.find(item => auth.id === item);
            this.$set(auth, 'check', isChecked);
          });
        }

        if (i.children && i.children.length > 0) {
          this.eachChildren(i.children);
        }
      });
    }

  },

  async mounted() {
    await this.getAuthorityTree();

    if (this.edit) {
      this.getRoleDetail();
    }
  }

});

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "base-content",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "role-modify"
    },
    [
      _c(
        "div",
        { attrs: { slot: "header" }, slot: "header" },
        [
          _c(
            "el-breadcrumb",
            [
              _c("el-breadcrumb-item", [_vm._v("系统管理")]),
              _vm._v(" "),
              _c("el-breadcrumb-item", { attrs: { to: "/system/role/list" } }, [
                _vm._v("角色管理")
              ]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [
                _vm._v(_vm._s(_vm.edit ? "编辑角色" : "新建角色"))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.edit ? "编辑角色" : "新建角色"))])
        ],
        1
      ),
      _vm._v(" "),
      _c("h4", [_vm._v("基本信息")]),
      _vm._v(" "),
      _c(
        "el-form",
        {
          attrs: { model: _vm.role, "label-width": "120", autocomplete: "off" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { required: "", label: "角色名称:" } },
            [
              _c("el-input", {
                attrs: {
                  size: "small",
                  autocomplete: "off",
                  placeholder: "请输入角色名称"
                },
                model: {
                  value: _vm.role.name,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "name", $$v)
                  },
                  expression: "role.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { required: "", label: "角色描述:" } },
            [
              _c("el-input", {
                attrs: {
                  size: "small",
                  autocomplete: "off",
                  placeholder: "请输入角色描述"
                },
                model: {
                  value: _vm.role.description,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "description", $$v)
                  },
                  expression: "role.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { required: "", label: "角色状态:" } },
            [
              _c(
                "el-radio-group",
                {
                  attrs: { size: "small" },
                  model: {
                    value: _vm.role.status,
                    callback: function($$v) {
                      _vm.$set(_vm.role, "status", $$v)
                    },
                    expression: "role.status"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "enable" } }, [
                    _vm._v("启用")
                  ]),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "disable" } }, [
                    _vm._v("禁用")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h4", [_vm._v("权限信息")]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          ref: "multipleTable",
          staticStyle: { width: "100%", "margin-bottom": "20px" },
          attrs: {
            data: _vm.tree,
            "row-key": "id",
            "default-expand-all": "",
            "tree-props": { children: "children", hasChildren: "hasChildren" }
          },
          on: { "selection-change": _vm.handleSelectionChange }
        },
        [
          _c("el-table-column", { attrs: { type: "selection", width: "55" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "菜单名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "权限" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _vm._l(scope.row.authority, function(auth) {
                    return _c(
                      "el-checkbox",
                      {
                        key: auth.id,
                        on: {
                          change: function($event) {
                            return _vm.authorityChange($event, auth)
                          }
                        },
                        model: {
                          value: auth.check,
                          callback: function($$v) {
                            _vm.$set(auth, "check", $$v)
                          },
                          expression: "auth.check"
                        }
                      },
                      [_vm._v(_vm._s(auth.name))]
                    )
                  })
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { loading: _vm.btnLoading, size: "small", type: "primary" },
          on: { click: _vm.save }
        },
        [_vm._v("保 存")]
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { size: "small" },
          on: {
            click: function($event) {
              return _vm.$router.back()
            }
          }
        },
        [_vm._v("取 消")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(98);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var _modify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(222);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _modify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _modify_vue_vue_type_template_id_fcae14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "fcae14ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/children/system/role/children/modify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);