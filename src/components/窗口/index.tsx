import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import addTouch from '../../Tools/触摸事件注册';
import style from './index.module.scss';

const 窗口:React.FC<{children:ReactNode}> = ({children}) => {
    const titleref: any = useRef(Math.random())
    const boxref: any = useRef(Math.random())
    const [ismax, setmax] = useState(false)
    const [ismin, setmin] = useState(false)
    const [post, setpost] = useState(["", " "])

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
        } else {
            setpost([box.style.left, box.style.top])
            box.style.width = '100vw'
            box.style.height = '100vh'
            box.style.left = '0px'
            box.style.top = '30px'
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
            // box.style.bottom = ''
            setmin(false)

        } else {
            setpost([box.style.left, box.style.top])
            box.style.width = '50px'
            box.style.height = '50px'
            box.style.borderRadius = '20%'
            box.style.left = '300px'
            box.style.top = '90vh'
            // box.style.bottom = '40px'
            setmin(true)
            setmax(false)
        }


    }, [ismin, post])

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
                    <div className={style.closd}><span>x</span></div>
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