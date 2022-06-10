import 启动台icon from './image/启动台.png'
import 访达icon from './image/Finder.png'
import 设置icon from './image/系统偏好设置.png'
import safarlicon from './image/safarl.png'
import AppStoreIcon from './image/appstore.png'
import 地图icon from './image/地图icon.png'
import 活动监视器 from './image/活动监视器.png'
import 终端icon from './image/终端.png'
import 照片icon from './image/照片.png'
import 提醒icon from './image/提醒.png'
import 日历icon from './image/日历.png'
import 时钟icon from './image/时钟.png'
import 废纸篓icon from './image/废纸篓空明.png'
import 微信读书icon from './image/微信读书.jpg'
import 赛车游戏icon from './image/赛车游戏.png'
import psicon from './image/PS.jpg'
import pdficon from './image/pdf_logo.png'
export type apptype = {
    name:string,
    icon:string,
    type:"system"|"web"|"other",
    src?:string,
    date?:boolean,
    time?:boolean,
    click?:any
    windowsize?:"default"|"min"|"max",
    Element?:HTMLDivElement
    mouseleft?:number
    left?:number
    top?:number
    self?:[apptype,number]
    bottom?:number
}

export type applist = apptype[]
// class App{
//     name:string
//     icon:string
//     type:"system"|"web"|"other"
//     src?:string
//     date?:boolean
//     time?:boolean
//     click?:()=>any
//     appsize?:'default'|'max'| 'min'
//     appleft:string
//     apptop:string
//     Element?:HTMLDivElement
//     constructor(app:apptype){
//         this.name = app.name
//         this.Element = app.Element
//         this.appleft = app.appleft
//         this.appsize = app.appsize
//         this.apptop = app.apptop
//         this.click = app.click
//         this.date = app.date
//         this.icon = app.icon
//         this.src = app.src
//         this.time = app.time
//         this.type = app.type
//     }
// }
export const 默认程序:applist = [
    { name: "访达", icon: 访达icon, type: "system",left:0,top:0},
    { name: "设置", icon: 设置icon, type: "system", left:0,top:0},
    { name: "启动台", icon: 启动台icon, type: "system", left:0,top:0},
    { name: "Safari 浏览器", icon: safarlicon, type: "system",left:0,top:0},
    { name: "App Store", icon: AppStoreIcon, type: "web", src: "https://macwk.com/soft/all/p1", left:0,top:0},
    { name: "地图", icon: 地图icon, type: "web" ,left:0,top:0},
    { name: "活动监视器", icon: 活动监视器, type: "system" ,left:0,top:0},
    { name: "终端", icon: 终端icon, type: "system" ,left:0,top:0},
    { name: "照片", icon: 照片icon, type: "system" ,left:0,top:0},
    { name: "提醒", icon: 提醒icon, type: "system" ,left:0,top:0},
    { name: "日历", icon: 日历icon, date: true, type: "system" ,left:0,top:0},
    { name: "时钟", icon: 时钟icon, time: true, type: "system" ,left:0,top:0},
    { name: "微信读书", icon: 微信读书icon, type: "web", src: "https://weread.qq.com/" ,left:0,top:0},
    { name: "赛车游戏", icon: 赛车游戏icon, type: "web", src: "http://hexgl.bkcore.com/play/" ,left:0,top:0},
    { name: "PhotoShop", icon: psicon, type: "web", src: "https://ps.gaoding.com/#/" ,left:0,top:0},
    { name: "PDF工具", icon: pdficon, type: "web", src: "https://www.pdfpai.com/" ,left:0,top:0},
    { name: "废纸篓", icon: 废纸篓icon, type: "system" ,left:0,top:0},

]