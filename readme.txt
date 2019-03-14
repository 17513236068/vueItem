vue+nodejs+express+mongodb

一.VueItem中（nodejs+express+mongodb）后端
1.安装express：
(1)全局安装环境 npm install express –g

(2)查看版本号  express --version

(3)脚手架创建项目 express -e project_name（项目名字）如express -e myapp  在work3-2中

(4)安装package.json中的依赖，进入目录project_name，安装依赖cnpm i

(5)启动npm start  浏览器输入localhost:3000 查看

2.npm i mongodb@2 --save-dev

二.vueView中前端
vue+vuex+vue-router+vue-cli  +  Mintui     移动端

vue全家桶   指（vue+vuex+vue-router+axios）

(1)安装vue脚手架  （全局安装，只需一次）
npm install --global vue-cli
(2)项目构建
官方模版 vue init webpack my-project    （tips：代码语法检查较麻烦）
推荐  vue init webpack-simple my-project  
根据提示 进行依赖安装       项目启动  npm run dev   项目打包   npm run build

单文件组件  css拥有作用域，scoped属性可规定当前css只作用于自己的组件，不影响其他
(3)插件安装    axios
npm install axios --save
使用    哪个文件需要使用，就在该文件的js中 导入
import axios from ‘axios’
(4)路由  vuerouter    （tips：路由规则配置均在main.js中）
依赖安装   npm install vue-router —-save
使用 在main.js引入  import VueRouter from ‘vue-router’ es6中语法，相当于	
		var VueRouter=require('vue-router');
声明使用  在main.js  中   Vue.use(VueRouter) ;   //全局使用时，将VueRouter组件挂载到Vue中

（5）vueView前端运行：
npm run start  问题一：前端怎么热部署？-------------------------------------------------
vueItem后端运行：
nodemon ./bin/www(是nodejs程序的入口) 或者 npm run start

三.
一般users.js中做post请求的处理，index.js中做get请求的处理。

访问后端的路径：http://localhost:3000/  
访问前端的路径： http://localhost:8080/
express 3000
mongodb 27017


四.
https://blog.csdn.net/zhang6223284/article/details/81273180





