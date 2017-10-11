# 使用React模仿大众点评
前言
----

	开始学习React的时候，在网上找了一些文章，读了官网的一些文档，后来觉得React上手还是蛮简单的，  
	然后就在网上找了一个React实战的练手项目，个人学完之后觉得这个项目很适合初学者或者进阶的朋友  
	练习，在此分享跟大家

体系&技术分析
-------

## 技术栈：
react + react-router + redux + less + ES6/7 + webpack + fetch + bundle-loader

## 下载

 	git clone https://github.com/GxbTss/react-dianping.git

 	cd react-dianping

 	npm install

 ## 运行（nodejs 6.0+）
```
 npm start (正常编译模式)

 访问 http://localhost:8080

 npm run build （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）
```
## 说明

>  本项目主要理解 react 和 redux 的原理，以及 react + redux 之间的配合方式，同时对react-router4进行由浅入深的学习和探究，欢迎大家一起学习新的路由方式

## 演示
[demo](https://github.com/GxbTss/react-dianping)（请用chrome的手机模式预览）

总结
----
	学完这个项目之后，相信大家会知道React+Reduce的开发的应用，和开发流程等等，同时会加深对React的理解，这也是  
	这个项目最大的好处。另一方面，React带给我们组件化的开发模式，在代码结构上非常的清晰，易于维护和扩展。相对于  
	利用Jquery开发最大的好处就是React的数据驱动视图的开发方式，在性能上也有一定的提升。

----------

	但实战项目始终是框架的运用，如果要做到代码和框架的性能优化，这个项目远远达不到效果。同时在这个项目中，我们也  
	使用了企业中常用的一些性能优化，比如使用React官方提供的库 **react-addons-pure-render-mixin** ，但对于一  
	些特定功能来讲，使用这个方法并达不到很好的效果，如果需要更加深刻的理解React的框架，除了必要的文档，其内部的  
	组织架构和实现方式也要了解，小编现在还没有深入研究，有能力的学生可以多研究一下。
