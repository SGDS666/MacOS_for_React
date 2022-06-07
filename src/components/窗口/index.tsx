import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useRemoveWindow } from '../../hooks/usewindow';
import addTouch from '../../Tools/触摸事件注册';
import { apptype } from '../程序坞/程序配置';
import style from './index.module.scss';

const 窗口:React.FC<{children:ReactNode,app:apptype,left:number,top:number}> = ({children,app,top,left}) => {
    const titleref: any = useRef(Math.random())
    const boxref: any = useRef(Math.random())
    const [ismax, setmax] = useState(false)
    const [ismin, setmin] = useState(false)
    const [post, setpost] = useState(["", " "])
    
    const remove窗口 = useRemoveWindow()

    useEffect(() => {
        const title: HTMLDivElement = titleref.current
        const box: HTMLDivElement = boxref.current
        addTouch(title, box)
    }, [])

    const max = useCallback(() => {
        const box: HTMLDivElement = boxref.current
        if (ismax) {
            // title.style.marginTop = ''
            box.style.width = ''
            box.style.height = ''
            // box.style.transition = ''
            box.style.left = post[0]
            box.style.top = post[1]
            setpost(['', ''])
            setmax(false)
            box.style.zIndex = ""
        } else {
            setpost([box.style.left, box.style.top])
            box.style.width = '100vw'
            box.style.height = '100vh'
            box.style.left = '0px'
            box.style.top = '20px'
            box.style.zIndex = "10000"
            setmax(true)
        }
    }, [ismax, post])

    const min = useCallback(() => {
        const box: HTMLDivElement = boxref.current
        if (ismin) {

            box.style.width = ''
            box.style.height = ''
            box.style.borderRadius = ''
            box.style.left = post[0]
            box.style.top = post[1]
            box.style.zIndex = ''
            // box.style.bottom = ''
            setmin(false)
        } else {
            setpost([box.style.left, box.style.top])
            box.style.zIndex = "0"
            box.style.width = '0px'
            box.style.height = '0px'
            box.style.borderRadius = '20%'
            box.style.left = `${left}px`
            box.style.top = `${top+50}px`
            box.style.backgroundColor = "transparent"
            
            // box.style.bottom = '40px'
            setmin(true)
            setmax(false)
            setTimeout(()=>{
                box.style.display ="none"
            },1000)
            
        }


    }, [ismin, left, post, top])

    return (
        <div 
        className={style.box} 
        ref={boxref} 
        onClick={ismin ? min : undefined} 
        style={ismax? {position:"static"}:{}}
        >
            <div 
            className={style.title} 
            ref={titleref} 
            style={ismax?{marginTop:"30px",cursor:"default"}:{}}
            >
                {
                ismin ? 
                null :
                <div className={style.control}>
                    <div className={style.closd}><span onClick={()=>{remove窗口(app)}}>x</span></div>
                    <div 
                    className={style.min} 
                    style={ismax ? { background: "gray" } : {}} 
                    >
                        {ismax ? null : <span onClick={min}>-</span>}
                    </div>
                    <div 
                    className={style.max} 
                    onClick={max}>
                        <span>~</span>
                    </div>
                
                </div>
                }

            </div>
            <div className={style.body} style={ismin?{display:'none',width:"50px",height:"50px"}:{}}>
                {children}
            </div>
        </div>
    )
}


export default 窗口