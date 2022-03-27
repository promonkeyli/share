const configList: Array<{tipTitle: string, id: string, children: Array<{title:string, description:string, url: string}>}> = [
    {
        tipTitle: '学习路线',
        id: 'road',
        children: [
            {
                title: '前端开发路线',
                url: 'https://shengxinjing.cn/',
                description: '前端开发学习/进阶路线'
            },
            {
                title: '编程自学路线',
                url: 'https://r2coding.com/#/',
                description: '编程自学网'
            },
        ]
    },
    {
        tipTitle: '开发工具',
        id: 'devtools',
        children: [
            {
                title: 'vscode',
                url: 'https://code.visualstudio.com/',
                description: '代码编辑器'
            },
            {
                title: 'webstorm',
                url: 'https://www.jetbrains.com/zh-cn/webstorm/',
                description: 'javascript IDEA'
            },
            {
                title: 'codepen',
                url: 'https://codepen.io/pen/',
                description: '单文件在线编辑器'
            },
            {
                title: 'codesandbox',
                url: 'https://codesandbox.io/',
                description: '项目级在线编辑器'
            },
            {
                title: 'stackblitz',
                url: 'https://stackblitz.com/',
                description: '项目级在线编辑器'
            },
            {
                title: 'Apifox',
                url: 'https://www.apifox.cn/',
                description: 'Api文档/调试/mock工具'
            },
            {
                title: 'Git',
                url: 'https://git-scm.com/',
                description: '开源的版本控制工具'
            }
        ]
    },
    {
        tipTitle: '前端框架',
        id: 'frame',
        children: [
            {
                title: 'Vue',
                url: 'https://v3.cn.vuejs.org/',
                description: '国内大规模使用的MVVM框架'
            },
            {
                title: 'React',
                url: 'https://react.docschina.org/',
                description: 'Facebook开发的MVVM框架'
            },
            {
                title: 'Angular',
                url: 'https://angular.cn/guide/what-is-angular',
                description: '谷歌开发并维护的MVVM框架'
            },
            {
                title: '小程序',
                url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
                description: '腾讯打造在微信中开发具有app体验的框架'
            },
            {
                title: 'Flutter',
                url: 'https://flutter.cn/',
                description: '谷歌开源的多平台开发工具'
            },
        ]
    },
    {
        tipTitle: '开发语言',
        id: 'language',
        children: [
            {
                title: 'TypeScript',
                url: 'https://www.tslang.cn//',
                description: 'javaScript的超集'
            },
            {
                title: 'Node.js',
                url: 'http://nodejs.cn/api/',
                description: '基于chrome v8引擎运js行时环境'
            },
            {
                title: 'Dart',
                url: 'https://www.dartcn.com/',
                description: 'Flutter多平台开发语言'
            },
            {
                title: 'Golang',
                url: 'https://golang.google.cn/',
                description: '谷歌开发的后端静态类型编译语言'
            },
            {
                title: 'Rust',
                url: 'https://www.rust-lang.org/zh-CN/',
                description: '高性能/安全的后端语言'
            },
        ]
    },
    {
        tipTitle: '前端UI库',
        id: 'ui',
        children: [
            {
                title: 'Ant Design of React',
                url: 'https://ant.design/docs/react/introduce-cn',
                description: '蚂蚁开源维护的react UI库'
            },
            {
                title: 'Ant Design of Vue',
                url: 'https://www.antdv.com/docs/vue/introduce-cn/',
                description: '蚂蚁开源维护的Vue UI库'
            },
            {
                title: 'ng-zorro',
                url: 'https://ng.ant.design/docs/introduce/en',
                description: '蚂蚁开源维护的Angular UI库'
            },
            {
                title: 'Element UI',
                url: 'https://element.eleme.cn/#/en-US',
                description: '饿了么开源维护的Vue UI库'
            }
        ]
    },
    {
        tipTitle: '优质三方库',
        id: 'library',
        children: [
            {
                title: 'Axios',
                url: 'https://www.axios-http.cn/',
                description: '基于Promise的异步请求库'
            },
            {
                title: 'RXJS',
                url: 'https://cn.rx.js.org/',
                description: '基于Observables的响应式编程库'
            },
            {
                title: 'GraphQL',
                url: 'https://graphql.cn/learn/',
                description: 'FaceBook开发的Api查询语言'
            },
            {
                title: 'Apollo',
                url: 'https://www.apollographql.com/',
                description: '处理GraphQL查询的库'
            },
            {
                title: 'date-fns',
                url: 'https://date-fns.org/',
                description: '时间日期处理库'
            },
            {
                title: 'lodash',
                url: 'https://lodash.com/docs/',
                description: 'js常用工具库'
            },
        ]
    },
    {
        tipTitle: 'css相关',
        id: 'css',
        children: [
            {
                title: 'iconfont',
                url: 'https://www.iconfont.cn/',
                description: '阿里字体图标库'
            },
            {
                title: 'Font Awesome',
                url: 'http://www.fontawesome.com.cn/',
                description: '字体图标库'
            },
            {
                title: 'tailwindcss',
                url: 'https://tailwindcss.com/',
                description: '时下流行css布局框架'
            },
            {
                title: 'less',
                url: 'https://less.bootcss.com/',
                description: 'css预处理器'
            },
            {
                title: 'sass',
                url: 'https://www.sass.hk/',
                description: 'css预处理器'
            },
            {
                title: 'neumorphism',
                url: 'https://neumorphism.io/#e0e0e0',
                description: '新拟态样式生成器'
            }

        ]
    },
    {
        tipTitle: '模版引擎',
        id: 'template',
        children: [
            {
                title: 'EJS',
                url: 'https://ejs.co/',
                description: 'javaScript模版引擎'
            },
            {
                title: 'PUG',
                url: 'https://pugjs.org/api/getting-started.html',
                description: 'javaScript模版引擎'
            }
        ]
    },
    {
        tipTitle: '语言文档',
        id: 'standard',
        children: [
            {
                title: 'MDN',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web',
                description: 'web开发技术文档'
            },
            {
                title: 'ECMAScript',
                url: 'https://ecma262.docschina.org/',
                description: 'ECMAScript规范'
            }
        ]
    },
    {
        tipTitle: 'node后端框架',
        id: 'backend',
        children: [
            {
                title: 'Deno',
                url: 'https://manual.deno.js.cn/introduction',
                description: 'TS运行时环境，默认使用TS'
            },
            {
                title: 'express',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web',
                description: 'node.js web框架'
            },
            {
                title: 'koa',
                url: 'https://koajs.docschina.org/',
                description: 'node.js web框架'
            },
            {
                title: 'egg',
                url: 'https://www.eggjs.org/',
                description: '企业级node.js开发框架'
            },
            {
                title: 'nest',
                url: 'https://nestjs.com/',
                description: '完美支持TS的node.js微服务框架'
            },
        ]
    },
    {
        tipTitle: '前端打包构建',
        id: 'package',
        children: [
            {
                title: 'npm',
                url: 'https://docs.npmjs.com/',
                description: '包管理器'
            },
            {
                title: 'yarn',
                url: 'https://www.yarnpkg.cn/',
                description: '包管理器'
            },
            {
                title: 'webpack',
                url: 'https://www.webpackjs.com/',
                description: '打包工具'
            },
            {
                title: 'vite',
                url: 'https://www.xiaoyuzl.com/vite/guide/#%E6%80%BB%E8%A7%88',
                description: '时下较火的打包工具，速度较webpack快'
            },
            {
                title: 'grunt',
                url: 'https://www.gruntjs.net/getting-started',
                description: '老牌打包工具'
            },
            {
                title: 'gulp',
                url: 'https://www.gulpjs.com.cn/',
                description: '打包工具'
            },
        ]
    },
    {
        tipTitle: '数据可视化',
        id: 'data',
        children: [
            {
                title: 'Echarts',
                url: 'https://echarts.apache.org/zh/index.html',
                description: '百度开源的图表库'
            },
            {
                title: 'Three.js',
                url: 'https://threejs.docschina.org/',
                description: '基于webGL封装的3D渲染引擎'
            },
            {
                title: 'D3.js',
                url: 'https://d3js.org.cn//',
                description: '数据驱动可视化库'
            },
            {
                title: 'svg',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG',
                description: '矢量图技术'
            },
            {
                title: 'canvas',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial',
                description: '图形绘制技术'
            },
            {
                title: 'webGL',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API',
                description: '图形绘制技术，js的API'
            },
        ]
    },
    {
        tipTitle: '博客/文章',
        id: 'blog',
        children: [
            {
                title: '简书',
                url: 'https://www.jianshu.com/',
                description: '三方技术博客'
            },
            {
                title: '掘金',
                url: 'https://juejin.cn/',
                description: '三方技术博客'
            },
            {
                title: 'segmentfault思否',
                url: 'https://segmentfault.com/',
                description: '三方技术博客'
            },
            {
                title: 'Hexo',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG',
                description: '基于node技术的静态博客生成器'
            },
            {
                title: 'Hugo',
                url: 'https://gohugo.io/',
                description: '基于GO语言实现的静态博客生成器'
            },
            {
                title: 'stackoverflow',
                url: 'https://stackoverflow.com/',
                description: '国外技术论坛'
            },
            {
                title: 'wordPress',
                url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API',
                description: 'php实现的一键博客搭建平台'
            },
            {
                title: 'markdown语言',
                url: 'https://markdown.com.cn/basic-syntax/',
                description: '写文章博客常用的语法'
            },
        ]
    },
    {
        tipTitle: 'mac软件推荐',
        id: 'mac',
        children: [
            {
                title: 'MacWk',
                url: 'https://macwk.com/',
                description: 'mac优质软件下载区'
            },
            {
                title: 'IINA',
                url: 'https://iina.io/',
                description: '免费强大的播放软件'
            },
            {
                title: 'parallels',
                url: 'https://www.parallels.cn/welcome-trial/',
                description: 'mac最强虚拟机'
            },
            {
                title: 'downie',
                url: 'http://www.downie.vip/',
                description: 'mac资源下载神器'
            },
            {
                title: 'permute',
                url: 'https://software.charliemonroe.net/permute/',
                description: 'mac文件格式化神器'
            }
        ]
    },
    {
        tipTitle: 'win软件推荐',
        id: 'win',
        children: [
            {
                title: 'Typora',
                url: 'https://typoraio.cn/',
                description: 'markdown写作软件（含mac版本）'
            },
            {
                title: '硕鼠',
                url: 'https://www.flvcd.com/index.htm',
                description: 'win视频资源下载神器'
            },
            {
                title: 'BandZip',
                url: 'https://www.bandisoft.com/bandizip/',
                description: 'win解压软件'
            },
            {
                title: 'i tell you',
                url: 'https://msdn.itellyou.cn/',
                description: '操作系统等纯净版软件镜像下载'
            },
            {
                title: 'permute',
                url: 'https://software.charliemonroe.net/permute/',
                description: 'mac文件格式化神器'
            },
            {
                title: 'snipaste',
                url: 'https://zh.snipaste.com/',
                description: '贴图/截图/颜色选取的免费工具'
            },
            {
                title: 'utools',
                url: 'https://www.u.tools/',
                description: '效率工具平台（免费有mac版）强推'
            },
            {
                title: '映画图床',
                url: 'https://pic.ihcloud.net/tencent.html',
                description: '免费的图床'
            },
            {
                title: '图片制作',
                url: 'https://profilepicturemaker.com/',
                description: '圆形图片/头像制作'
            },
            {
                title: 'processon',
                url: 'https://www.processon.com/',
                description: '免费的在线流程图'
            },
            {
                title: 'image-compress',
                url: 'https://docsmall.com/image-compress',
                description: '免费的在线图片压缩'
            }
        ]
    },
    {
        tipTitle: '前端技术周刊',
        id: 'weekly',
        children: [
            {
                title: '阿里云前端技术周刊',
                url: 'https://github.com/aliyunfe/weekly',
                description: 'github周刊'
            },
            {
                title: '前端精读周刊',
                url: 'https://github.com/ascoders/weekly',
                description: 'github周刊'
            }
        ]
    },
];
export default configList;