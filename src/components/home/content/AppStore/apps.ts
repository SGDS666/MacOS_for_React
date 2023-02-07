export type appobj = {
    
        name: string;
        img?: string;
        url: string;
        introduce?: string;
        size?:[number,number]
        bcc?:string
        showFull?:boolean
        showTitle?:boolean
    
}
export type apps = appobj[][];

export const 前端仔的新手村:apps = [
    [
        {
            name:"HTML",
            img:"https://www.runoob.com/wp-content/uploads/2013/06/image-icon.png",
            url:"https://www.w3cschool.cn/html/",
            introduce:"超文本标记语言,是一种用于创建网页的标准标记语言",
            bcc:"#E54D26"
        },
        
        {
            name:"CSS",
            img:"https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png",
            url:"https://www.w3cschool.cn/css/",
            introduce:"是一种用来为结构化文档添加样式的语言，",
            bcc:"#4B90E2"
        },
        {
            name:"JavaScript",
            img:"https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png",
            url:"https://www.w3cschool.cn/javascript",
            introduce:"JavaScript 是 Web 的编程语言。",
            bcc:"#F7DF1D"
        },
    ],
    [
        {
            name:"Sass",
            img:"https://atts.w3cschool.cn/attachments/cover/cover_sass.png?t=1673596277?imageView2/1/w/48/h/48",
            url:"https://www.w3cschool.cn/sass/",
            introduce:"Sass是css预处理器",
            bcc:"#C56293"
        },
        {
            name:"ES6",
            img:"https://atts.w3cschool.cn/attachments/cover/cover_escript6.png?t=1591846852?imageView2/1/w/48/h/48",
            url:"https://www.w3cschool.cn/escript6/",
            introduce:"ES6将彻底改变程序员们编写JS代码的方式",
            bcc:"#717276"
        },
        {
            name:"TypeScript",
            img:"https://www.runoob.com/wp-content/uploads/2019/01/typescript-logo.jpg",
            url:"https://www.w3cschool.cn/typescript",
            introduce:"TypeScript 是 JavaScript 的一个超集",
            bcc:"#007ACD"
        }
    ],
    [
        {
            name:"Node.js",
            img:"https://www.runoob.com/wp-content/uploads/2014/03/nodejs.jpg",
            url:"https://www.w3cschool.cn/nodejs",
            introduce:"Node.js 就是运行在服务端的 JavaScript",
            bcc:"#8CC94C"
        },
        {
            name:"JSON",
            img:"https://www.runoob.com/wp-content/uploads/2013/07/4691282_json_icon.png",
            url:"https://www.w3cschool.cn/json",
            introduce:"JSON 是存储和交换文本信息的语法，类似 XML",
            bcc:"#fecc11"
        },
        {
            name:"AJAX",
            img:"https://atts.w3cschool.cn/attachments/cover/cover_ajax.png?t=1569046545&imageView2/1/w/150/h/84",
            url:"https://www.w3cschool.cn/ajax/",
            introduce:"AJAX不重新加载页面就能获取服务器数据更新网页",
            bcc:"#9B0000"
        }
    ],

]

export const 创作者的小欢喜:apps = [
    [
        {
            name:"泼辣修图",
            img:"https://android-artworks.25pp.com/fs08/2020/07/22/4/106_c07b48e1a33c3b438059b7edcbb51bc3_con.png",
            url:"https://v3.polarr.co/",
            introduce:"探索无限滤镜"
        },
        {
            name:"Vue在线开发",
            img:"/macos/vue.svg",
            url:"https://stackblitz.com/fork/vue",
            introduce:"网页直接编辑代码 省心省力"
        },
        {
            name:"Node.js 在线开发",
            img:"/macos/node.svg",
            url:"https://stackblitz.com/fork/node",
            introduce:"网页直接编辑代码 省心省力"
        },
    
    ],
    [
        {
            name:" 白扫",
            img:"https://xlimage.uzero.cn/shinescan/res/shinescanicon.png",
            url:"https://web.baimiaoapp.com/",
            introduce:"在线OCR 图片文字提取"
        },
        {
            name:"Angular 在线开发",
            img:"/macos/angular.svg",
            url:"https://stackblitz.com/fork/angular",
            introduce:"网页直接编辑代码 省心省力"
        },
        {
            name:"PhotoShop",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.xr8XAJlR5DCo4PdzLux-ewHaHa?pid=ImgDet&rs=1",
            url:"https://ps.gaoding.com/?from=gaoding#/",
            introduce:"在线ps"
        },
    ],
    [
        {
            name:"HTML/JS/CSS在线开发",
            img:"/macos/html.svg",
            url:"https://stackblitz.com/fork/web-platform",
            introduce:"在线剪辑视频"
        },
        {
            name:"React + js 在线开发",
            img:"/macos/React.svg",
            url:"https://stackblitz.com/fork/react",
            introduce:"网页直接编辑代码 省心省力"
        },
        {
            name:"React + Ts 在线开发",
            img:"/macos/Reactts.svg",
            url:"https://stackblitz.com/fork/react-ts",
            introduce:"网页直接编辑代码 省心省力"
        },
    ],
    [
        {
            name:"Next在线开发",
            img:"/macos/next.svg",
            url:"https://stackblitz.com/fork/nextjs",
            introduce:"网页直接编辑代码 省心省力"
        },
        
        
    ]
]

export const 摸鱼时的小确幸:apps = [
    [
        {
            name:"HexGl赛车",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"https://hexgl.bkcore.com/play/",
            introduce:"控制太空飞船进行赛车"
        },
        {
            name:"2048",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"https://play2048.co/",
            introduce:"经典休闲游戏",
            size:[500,1000],
            showFull:false,
            showTitle:false,
        },
        {
            name:"俄罗斯方块",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"https://chvin.github.io/react-tetris/?lan=zh",
            introduce:"经典休闲游戏",
            size:[500,1000],
            showFull:false,
            // showTitle:false,

        }
    ],
    [
        {
            name:"贪吃蛇",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"http://slither.io/",
            introduce:"经典休闲游戏"
        },
        {
            name:"3D小车",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"https://bruno-simon.com/",
            introduce:"使用箭头控制它的方向，在这个城市到处逛一逛"
        },
        {
            name:"人生重开模拟器",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"https://liferestart.syaro.io/public/index.html",
            introduce:"曾经很火的小游戏",
            size:[500,1000],
            showFull:false,
            showTitle:false,

        }
    ],
    [
        {
            name:"撸了个撸",
            img:"https://game.gtimg.cn/images/lol/act/img/skinloading/1000.jpg",
            url:"https://wdppx.gitee.io/llgl/",
            introduce:"一个系统自带的消除类小游戏...",
            size:[500,1000],
            showFull:false,
            showTitle:false,
        },
        {
            name:"穿越大秦我爹竟是秦始皇(demo)",
            img:"https://wdppx.gitee.io/qin/static/media/QIN.a624a9317ce703e739fe.jpg",
            url:"https://wdppx.gitee.io/qin/#/home",
            introduce:"一个系统自带的半成品游戏..."
        },
        {
            name:"天空有多高",
            img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.zMB5y6JzfyWIMsIkAf9g8QHaEE?pid=ImgDet&rs=1",
            url:"http://www.secaibi.com/howbigisspace/",
            introduce:"只需要滚动鼠标，小火箭就能从地球出发"
        },

    ]
]