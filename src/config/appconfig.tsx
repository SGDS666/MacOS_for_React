import React, { ReactNode } from "react"

export class AppClass{
    iconNode:ReactNode
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
    constructor(icon:ReactNode,win:ReactNode,){
        this.iconNode = icon
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

const apps = {
    设置:new AppClass(<div>设置icon</div>,<div>设置win</div>),
}

export default apps