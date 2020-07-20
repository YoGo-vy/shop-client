# 12.shop

## 项目概述

> 该项目为前后端分离的Web App (SPA)应用，采用组件化、模块化、工程化的开发模式；实现应用内包括商家列表、商品列表、购物车管理,、评论列表、用户中心等多个子功能模块；项目使用嵌套路由和路由懒加载形式，实现功能需求和优化组件页面加载；常用功能模块使用组件的按需缓存方式，优化路由组件复用。

## 项目目录结构

```
├─public
│ 	 │  favicon.ico
│  	│  index.html
│  	├─css							//normalize.css
│  	└─imgs
└─src
    │  App.vue						
    │  main.js						//根组件、入口函数
    │
    ├─api							// 后台请求
    ├─assets
    ├─components
    │ 		  ├─FooterGuide			//底部导航组件拆分
    │		  │   	 └─FooterGuide.vue
    │		  ├─Header				//头部组件拆分
    │ 		  │    	└─Header.vue
    │ 		  ├─ShopCar				//购物车功能模块
    │	 	  │     ├─AddCar.vue
    │ 		  │     └─ShopCar.vue
    │  		  └─Star				//星数评分模块
    │      	  	 
    ├─filters						//全局过滤器
    │     	
    ├─mock							//devolopment阶段mock数据
    │    	  ├─data.json
    │    	  ├─mockServer.js
    │    	  └─shopCar.json
    ├─plugins						//插件按需导入
    │  	      └─vant.js
    ├─router
    │    	  └─index.js
    ├─store							//状态管理
    │    	  ├─actions.js
    │   	  ├─getters.js
    │   	  ├─index.js
    │    	  ├─mutations.js
    │     	  └─state.js
    └─views						//路由组件
        ├─Details				//商家信息、商品列表、评论列表展示
        │ 	 	├─  Details.vue
        │	 	└─Details
        │      	 	  ├─ Comments.vue
        │    	   	  ├─Goods.vue
        │    	      └─Shopinfo.vue
        ├─Home					//首页：导航、商家列表展示	
        │    └─Home.vue
        ├─Integral				//积分活动
        │    └─ Integral.vue
        ├─Login					//登录
        │    └─Login.vue
        ├─Order					//用户历史订单管理
        │    └─Order.vue
        ├─Personal				//用户中心
        │     ├─Acount.vue
        │     └─Personal.vue
        ├─Search				//商家、商品搜索功能组件
        │     └─Search.vue
        └─ShopCarCenter			用户购物车管理中心
              └─ShopCarCenter.vue

```



## 技术选型

- Vue全家桶：（Vue、Vue-cli、Vuex、Vue-Router）
- 状态的管理：Vuex + Session Storage
- 后台数据请求和接口测试：axios + proxy反向代理 
- 接口测试：postman
- 数据模拟：mockjs + JSON
- 构建界面组件库：Vant UI组件库 + Better-Scroll
- 代码托管：Git + Github
- 语法检测：ESlint
- 项目打包管理：Webpack



## 主要功能实现

- 用户状态：proxy代理实现跨域，使用客联云通讯实现手机验证码登录；Vuex和Session Storage存储token的形式，管理用户当前状态
- 商品联动展示：使用Better-Scroll前，考虑Vuex数据状态和页面渲染情况，根据盒子offset数据，实现左侧分类和右侧当前分类的详细的联动效果
- 评论列表分类展示：组件内侦听前台用户展示分类选择、以过滤从Vuex列表数据状态，前台用户二级选择以计算属性形式，展示最终当前分类的评论列表。
- 购物车管理：实现购物车添加、购物车中心管理功能，判断当前用户登录状态，以将当前购物车数据添加后台存取或当前Vuex+Session Storage临时存储。
- 后期优化：使用子路由嵌套、路由懒加载、常用功能模块按需缓存等，优化页面加载和组件复用，使用图片懒加载和svg背景图页面加载提示界面，优化应用体验。

## 项目安装、依赖配置和项目运行

```
npm install
```

```
npm run serve
```

```
npm run build
```

