import React, { MouseEvent, useState } from 'react';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import closd from '../../../image/关闭.png'
import min from '../../../image/最小化.png'
import full from '../../../image/全屏.png'
import add from '../../../image/add.png'
import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil';
import { FUll, moveApp, opencontent, zindex } from '../../store/app';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useColor, useTheme } from '../../../THEME';
import { CsizeElement, Gmouse } from '../../store/mouse';
import { delList, minList } from './min';
import { WindowList } from '../../store/window';

const app = document.getElementById("app")
interface ContentProps {
    children: any,
    bg?: string,
    tip?: ReactNode,
    width?: number,
    height?: number,
    showTitle?: boolean | undefined
    showFUll?: boolean | undefined


}

const Content: React.FC<ContentProps> = (props) => {
    const { width, height, bg: icon, tip: title, showFUll, showTitle, children } = props
    const [fullScreen, setfullScreen] = useState(false) //当前应用的全屏状态
    const setF = useSetRecoilState(FUll) //全局全屏状态
    const setContent = useSetRecoilState(opencontent)
    const [z, setz] = useRecoilState(zindex) //窗口z轴位置
    const [moveingApp, setMApp] = useRecoilState(moveApp)//移动中的app
    const boxref: any = useRef(null)
    const titleref: any = useRef(null)
    const [Npost, setNpost] = useState(["0", "0"]) //窗口最大化前的位置
    const [size, setSize] = useState([width, height])//窗口变化前的尺寸
    const [sadd, setAdd] = useState(false)//增高的app
    const t = useTheme()//全局主题
    const [minMode, setMinMode] = useState(false)//最小化模式
    const [mlist, setmlist] = useRecoilState(minList)//所以最小化的app列表
    const setWList = useSetRecoilState(WindowList)
    const setCSEle = useSetRecoilState(CsizeElement)//更改尺寸的元素
    const setClosd = useCallback(() => {//设置关闭

        setmlist(list => {
            const newlist = delList(list, boxref.current)
            console.log(newlist)
            return newlist
        })
        setContent(c => c - 1)
        setfullScreen(false)
        setF(false)
        setMinMode(false)
        setWList(wlist => {

            let self
            wlist.forEach(w => {
                if (w.id === title) {
                    self = w
                }
            })
            console.log({ self })
            const newlist = delList(wlist, self)
            console.log(newlist)
            return newlist
        })


    }, [setContent, setF, setWList, setmlist, title])

    // if (title === "心情设置") {//测试功能
    //     console.log({ Npost });
    //     console.log({ size });


    // }

    const recoveryCss = useCallback((show?: boolean) => { //恢复css
        const box: HTMLDivElement = boxref.current
        box.style.transition = "all 0.3s ease"
        box.style.left = Npost[0]
        box.style.top = Npost[1]
        box.style.width = size[0] + "px"
        box.style.height = size[1] + 'px'
        setTimeout(() => {
            if (show) {
                return
            }
            box.style.transition = "all 0s"
        }, 300);
    }, [Npost, size])
    const SaveCss = useCallback((show?: boolean) => { //保存css
        const box: HTMLDivElement = boxref.current
        setNpost([box.style.left, box.style.top])
        // console.log(box.offsetWidth, box.offsetHeight, box.style.width, box.style.height);

        setSize([box.offsetWidth, box.offsetHeight])
        box.style.transition = "all 0.3s ease"
        setTimeout(() => {
            if (show) {
                return
            }
            box.style.transition = "all 0s"
        }, 300);
    }, [])
    const setAddHandle = useCallback(() => { //设置增高

        const box: HTMLDivElement = boxref.current
        if (box) {
            if (!sadd) {

                setAdd(true)
                SaveCss()
                box.style.top = "0px"
                box.style.height = "100vh"


            } else {
                recoveryCss()
                setAdd(false)
            }

        }
    }, [SaveCss, recoveryCss, sadd])

    const setFUll = useCallback(() => { //设置最大化
        const box: HTMLDivElement = boxref.current
        if (box) {
            if (fullScreen) {
                setfullScreen(false)
                setF(false)
                recoveryCss()
            }
            else {
                setfullScreen(true)
                setF(true)
                SaveCss()
            }
        }
        setfullScreen(!fullScreen)
    }, [SaveCss, fullScreen, recoveryCss, setF])



    const setMovebox = useCallback((e: any) => {//设置移动元素
        const box: HTMLDivElement = boxref.current!
        if (box !== moveingApp.last) {

            box.style.zIndex = `${z}`
            setz(z => z + 1)
        }
        setMApp(o => ({ t: box, startpost: [e.pageX, e.pageY], last: box }))
    }, [moveingApp.last, setMApp, setz, z])

    const clearMoveBox = useCallback(() => { //清除移动元素
        setMApp(o => ({ ...o, t: null, startpost: [0, 0] }))
    }, [setMApp])

    const setMin = useCallback(() => {//设置最小化
        const box: HTMLDivElement = boxref.current;
        // 设置min模式
        // console.log(minMode, mlist);

        if (minMode) { //当前是最小化模式则恢复   
            const newlist = delList(mlist, box)
            setmlist(newlist)
            recoveryCss()

            setMinMode(false)



        } else { //不是最小化模式则最小化
            setmlist([...mlist, box])
            SaveCss(true)
            setMinMode(true)

            //设置样式
            box.style.left = "10px"



        }






    }, [SaveCss, minMode, mlist, recoveryCss, setmlist])

    useEffect(() => { //拖动事件注册
        if (!minMode) {
            const title: HTMLDivElement = titleref.current
            title.onmousedown = (e) => {
                setMovebox(e)
            }
            title.onmouseup = () => {

                clearMoveBox()
            }
        }


    }, [clearMoveBox, minMode, setMovebox])
    useEffect(() => { //z轴逻辑
        if (!minMode) {
            const box: HTMLDivElement = boxref.current!

            setz(z => {
                box.style.zIndex = `${z}`
                return z + 1
            })
        }
    }, [minMode, setz])
    useEffect(() => { //清除拖动逻辑
        document.onmouseup = () => {
            clearMoveBox()
            setCSEle({ ele: null, father: null })
        }
    }, [clearMoveBox, setCSEle])
    useEffect(() => { //最小化样式
        mlist.forEach((m: HTMLDivElement, index) => {
            if (m) {
                m.style.top = index * 150 + 10 + "px"
            }
        })
    }, [mlist])


    return createPortal(
        <div className={minMode ? styles.qtdd : ""}>
            <div className={fullScreen ? styles.fullbox : minMode ? styles.minbox : styles.box}
                ref={boxref}
                style={fullScreen ? {} : minMode ? {} : { width: size[0], height: size[1] }}
                onClick={minMode ? (e) => {
                    setMin()
                    e.stopPropagation()
                    e.preventDefault()
                } : () => { }}
            >
                {minMode && <div className={styles.zz} style={{  color: t.color3 }}>
                    <div className={styles.icon} >
                        {icon ? <img src={icon} alt="icon" />:<div className={styles.tip} style={{ color: t.color,background:t.bcc2 }}>{title}</div>}
                        
                    </div>
                </div>}
                {!fullScreen && showFUll && !minMode && <Csize setSize={setSize} setPost={setNpost} boxref={boxref} />}
                <div className={fullScreen ? styles.ftitle : styles.title} ref={titleref}>
                    <div className={styles.ctrl} style={minMode ? { display: "none" } : {}}>
                        <img draggable={false} src={closd} alt="closd" onClick={setClosd} />
                        <img draggable={false} src={min} alt="min" onClick={setMin} />
                        {showFUll && <img draggable={false} src={full} alt="full" onClick={setFUll} />}
                        {!showFUll && <img draggable={false} src={add} alt="full" onClick={setAddHandle} />}
                    </div>
                    {showTitle && <div className={styles.name} style={{ color: t.color }}>
                        {showTitle ? title : null}
                    </div>}
                </div>
                <div className={styles.content}>
                    {children && React.cloneElement(children, { set: setMovebox, clear: clearMoveBox })}
                </div>


            </div>

        </div>, app!
    )


}
const Csize: React.FC<{ setSize: any, setPost: any, boxref: any }> = ({ setSize, setPost, boxref }) => {
    const [, C] = useColor()
    const [x, y] = useRecoilValue(Gmouse)
    const [csobj, setCsizeEle] = useRecoilState(CsizeElement)
    const onMouseDown = (e: any) => {
        // console.log(e);
        const box: HTMLDivElement = boxref.current
        const [startX, startY] = [e.pageX - box.offsetLeft, e.pageY - box.offsetTop]
        const div: HTMLDivElement = e.target
        setCsizeEle({ ele: div, startpost: [startX, startY], father: box })
        // setCsizeEle({ele:div,startpost:[e.pageX,e.pageY]})

        if (!csobj.ele) {
            return
        }

        // 
        // const 
    }
    useEffect(() => {
        const { ele, startpost, father } = csobj
        if (!ele || !startpost) {
            return
        }
        const box: HTMLDivElement = boxref.current
        if (box !== father) {
            return
        }
        let gapX = x - box.offsetLeft
        let gapY = y - box.offsetTop
        if (ele.className.includes("content_lt")) {


            if (gapX !== 0) { //向左拉伸
                const newleft = box.offsetLeft + gapX
                const newWidth = box.offsetWidth - gapX
                box.style.left = `${newleft}px`
                box.style.width = `${newWidth}px`
            }
            if (gapY !== 0) {
                const newtop = box.offsetTop + gapY
                const newHeight = box.offsetHeight - gapY
                box.style.top = `${newtop}px`
                box.style.height = `${newHeight}px`
            }




        }
        if (ele.className.includes("content_lb")) {

            gapY = gapY + box.offsetHeight
            if (gapX !== 0) { //向左拉伸
                const newleft = box.offsetLeft + gapX
                const newWidth = box.offsetWidth - gapX
                box.style.left = `${newleft}px`
                box.style.width = `${newWidth}px`
            }
            if (gapY !== 0) {
                // const newtop = box.offsetTop + gapY
                const newHeight = gapY - box.offsetHeight
                // box.style.top = `${newtop}px`
                box.style.height = `${newHeight}px`
            }

        }
        if (ele.className.includes("content_rt")) {

            gapX = gapX + box.offsetWidth
            if (gapX !== 0) { //向左拉伸
                // const newleft = box.offsetLeft + gapX
                const newWidth = gapX - box.offsetWidth
                // box.style.left = `${newleft}px`
                box.style.width = `${newWidth}px`
            }
            if (gapY !== 0) {
                const newtop = box.offsetTop + gapY
                const newHeight = box.offsetHeight - gapY
                box.style.top = `${newtop}px`
                box.style.height = `${newHeight}px`
            }

        }
        if (ele.className.includes("content_rb")) {
            gapX = gapX + box.offsetWidth
            gapY = gapY + box.offsetHeight
            if (gapX !== 0) { //向左拉伸
                // const newleft = box.offsetLeft + gapX
                const newWidth = gapX - box.offsetWidth
                // box.style.left = `${newleft}px`
                box.style.width = `${newWidth}px`
            }
            if (gapY !== 0) {
                const newHeight = gapY - box.offsetHeight
                // box.style.top = `${newtop}px`
                box.style.height = `${newHeight}px`
            }

        }
    }, [boxref, csobj, setSize, x, y])
    return (
        <div className={styles.csize} onMouseDown={onMouseDown} onMouseUp={() => setCsizeEle({ ele: null, father: null })}>
            <div className={styles.lt} style={{ background: C }}></div>
            <div className={styles.rt} style={{ background: C }}></div>
            <div className={styles.lb} style={{ background: C }}></div>
            <div className={styles.rb} style={{ background: C }}></div>
          
        </div>
    )
}
export interface ContentChild { //自动传入
    clear?: () => void;
    set?: (e: any) => void;
}
export default Content