# RIDIDKULUS VUE ADMIN

一个基于vue 的 后台 starter 项目

~~vue vuex view-design (本来想用element ui 但是用多了想换个新的)
本人开发中的体验 view-design 真心的是坑。后期打算 转回 element ui 或者 vuetify~~

vue vuex element ui

配套的后端项目用nestjs

live demo : https://admin.rosetta-latte.art/

## 使用



```bash

yarn
yarn run dev

```

## 进度

可以通过[trello](https://trello.com/b/O9Nf9aQG/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%A0%94%E5%8F%91)查看


## 备注


##### 后台基于nestjs的微服务，只是demo.生产可能需要研究下K8S

[Gateway](https://github.com/kyuuube/osy-nestjs-api-gateway)

[Account Service](https://github.com/kyuuube/osy-nestjs-account-microservice)


## 主题生成

从element-ui的官网生成主题。通过一个gulp脚本添加namespace。再导入到项目中

```shell
npm install  gulp -g
npm install gulp-clean-css
npm install gulp-css-wrap
```

```javascript
// gulpfile.js
var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
    return gulp.src(path.resolve('./theme/index.css'))
    /* 找需要添加命名空间的css文件，支持正则表达式 */
        .pipe(cssWrap({
            selector: '.custom-02abfd' /* 添加的命名空间 */
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/assets/css/theme/02abfd')) /* 存放的目录 */
})
```
