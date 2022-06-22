import React, { ReactNode } from "react"
import setting from '../image/系统偏好设置.png'
import appstore from '../image/appstore.png'
import message from '../image/信息.png'
import  活动监视器 from '../image/活动监视器.png'
import Finder  from '../image/Finder.png'
import 日历  from '../image/日历.png'
import 时钟  from '../image/时钟.png'
import 照片  from '../image/照片.png'
export class AppClass{
    icon:string
    name:string
    winNode:ReactNode
    iconsize:{left:number,top:number,size:number}
    winsize:{
        defaultleft:number,
        defaulttop:number,
        ismax:boolean,
        ismin:boolean,
        width:number,
        height:number
    }
    constructor(icon:string,name:string,win:ReactNode,){
        this.icon = icon
        this.name = name
        this.winNode = win
        this.iconsize = {
            left:0,
            top:0,
            size:50
        }
        this.winsize ={
            defaultleft:0,
            defaulttop:0,
            ismax:false,
            ismin:false,
            width:500,
            height:500
        }
    }

    setIconSize = (size:number,position:[number,number]) => {
        this.iconsize.size = size
        this.iconsize.left = position[0]
        this.iconsize.top = position[1]
    }
    setWinSize = (size:[number,number],position:[number,number]) => {
        this.winsize.width = size[0]
        this.winsize.height = size[1]
        this.winsize.defaultleft = position[0]
        this.winsize.defaulttop = position[1]
    }
    setWinType = (type:"min"|"max") => {
        switch (type) {
            case "min":
                this.winsize.ismax = false
                this.winsize.ismin = true
                break;
            case "max":
                this.winsize.ismax = true
                this.winsize.ismin = false
                break;
            default:
                break;
        }
    }
}

const appconfig = [
    new AppClass(Finder,"Finder",<div>设置win</div>),
    new AppClass(appstore,"App Store",<div>设置win</div>),
    new AppClass(message,"信息",<div>设置win</div>),
    new AppClass(活动监视器,"活动监视器",<div>设置win</div>),
    new AppClass(setting,"设置",<div>设置win</div>),
    new AppClass(时钟,"时钟",<div>设置win</div>),
    new AppClass(照片,"照片",<div>设置win</div>),
    new AppClass(日历,"日历",<div>设置win</div>),
]

export default appconfig