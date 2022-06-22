import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil'
import { appwinref, mosueindock, mouseState, movewinState, topbarState } from '../store'
import style from './app.module.scss'

export const Icon: React.FC<{ icon: string, myposition: [number, number] }> = ({ icon, myposition }) => {
    return (
        <div className={style.iconbox}>
            <img src={icon} alt="error" draggable={false} />

        </div>)
}

export const NameTip: React.FC<{ name: string, isShow: boolean }> = ({ name, isShow }) => {
    return (
        <div className={style.namebox} style={isShow ? {} : { display: "none" }}>
            {name}
        </div>
    )
}

export const AppWin: React.FC<
    {
        wintype: "ismax" | "ismin" | "isdefault" | "isclosd",
        children: ReactNode,
        defalultsize: [number, number]
        moveid: string
        ctrl: ReactNode
        title: string
        setwintype: React.Dispatch<React.SetStateAction<"ismax" | "ismin" | "isdefault" | "isclosd">>
    }> = ({ wintype, children, defalultsize, moveid, ctrl, title, setwintype }) => {
        const moveboxref: any = useRef()
        const winref = useRecoilValue(appwinref)
        const [def, setdef] = useState({})
        const mouse = useRecoilValue(mouseState)
        const [movewin, setMoveWin] = useRecoilState(movewinState)
        const setTopBarState = useSetRecoilState(topbarState)
        const moving = useCallback(() => {
            if (moveid !== movewin.id) {
                return def
            }
            const gapx = mouse[0] - movewin.dx
            const gapy = mouse[1] - movewin.dy
            const newleft = movewin.wleft + gapx
            const newtop = movewin.wtop + gapy
            const newcss = {
                left: `${newleft}px`,
                top: `${newtop}px`,
                transition: "all 0s",
            }
            // setdef(newcss)
            return newcss
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [mouse, movewin])
        const sizeSet = useMemo(() => {
            return {
                ismax: { left: "0px", top: "0px", width: "100vw", height: "100vh", zIndex: "2147483647" },
                ismin: {
                    width: "0px",
                    height: "100px",
                    left: `${defalultsize[0] + 50}px`,
                    top: `${defalultsize[1] - 60}px`,
                    borderTopRightRadius: "100%",
                    borderBottomRightRadius: "100%",
                    borderTopLeftRadius: "100%",
                    // transformOrigin: "0px -10px 300px",
                    transform: "rotateZ(-30deg) skew(10deg,10deg) scale(0%) ",
                    zIndex: 0,

                },
                isdefault: moving(),
                isclosd: {}
            }
        }, [defalultsize, moving])
        if (!winref) {
            return null
        }


        return createPortal(
            <div className={style.win} ref={moveboxref} style={sizeSet[wintype]} onMouseUp={
                (e) => {

                    setdef({ ...moving(), transition: "" })
                    setMoveWin({ id: "", dx: 0, dy: 0, wleft: 0, wtop: 0 })

                    e.stopPropagation()

                }
            }
            >
                {wintype !== "ismin" && wintype !== "isclosd" ? ctrl : null}
                <div className={style.wtitle} onMouseDown={

                    (e: any) => {
                        if (wintype !== "ismax") {
                            const x: number = e.clientX
                            const y: number = e.clientY
                            const div: HTMLDivElement = moveboxref.current
                            const left = div.offsetLeft
                            const top = div.offsetTop
                            setMoveWin({ id: moveid, dx: x, dy: y, wleft: left, wtop: top })
                            e.stopPropagation()
                            let zindex: any = sessionStorage.getItem('zindex')
                            if (!zindex) {
                                zindex = 1
                                sessionStorage.setItem("zindex", zindex)
                            } else {
                                zindex++
                                sessionStorage.setItem("zindex", zindex)

                            }
                            div.style.zIndex = zindex
                        }


                    }}
                    onDoubleClick={(e) => {
                        if (wintype === "ismax") {

                            setwintype("isdefault")
                            setTopBarState(true)

                        } else {
                            setwintype("ismax")
                            setTopBarState(false)
                        }
                        e.stopPropagation()
                    }}
                >
                    {wintype === "ismax" ? <div>{title}<code>(双击标题退出全屏)</code> </div> : title}
                </div>
                <div className={style.wbody}>
                    {children}
                </div>

            </div>,
            winref
        )
    }

const Wincontrol: React.FC<{
    onclosd: () => void,
    onmin: () => void,
    onmax: () => void,
    wintype: "ismax" | "ismin" | "isdefault" | "isclosd"
    mystyle?: React.CSSProperties
}> = ({ onclosd, onmin, onmax, mystyle, wintype }) => {
    return (
        <div className={style.winctrl} style={mystyle}>
            <div className={style.closd} onClick={onclosd}>x</div>
            <div className={style.min} style={wintype === "ismax" ? { backgroundColor: "rgb(67,64,68)" } : {}} onClick={onmin}>-</div>
            <div className={style.max} onClick={onmax}>~</div>
        </div>
    )
}
const App: React.FC<{ iconSrc: string, name: string, baseleft: number ,isinDock:boolean}> = ({ iconSrc, name, baseleft,isinDock }) => {
    const isShow = useMemo(() => {
        return true
    }, [])
    const boxref: any = useRef()
    const setTopBarState = useSetRecoilState(topbarState)
    const setmovewin = useSetRecoilState(movewinState)
    const mouse = useRecoilValue(mouseState)
    const [myposition, setmypostion] = useState<[number, number]>([baseleft, window.outerHeight - 10])
    const [wintype, setwintype] = useState<"ismax" | "ismin" | "isdefault" | "isclosd">('ismin')
    useEffect(() => {
        const box: HTMLDivElement = boxref.current
        // console.dir(box);
        setmypostion([baseleft + box.offsetLeft, window.outerHeight])
    }, [baseleft])
    const [gap,size,top] = useMemo(()=>{
        let [gap,size,top] = [0,0,0]
        if(!isinDock){
            return  [0,0,0]
        }
        gap =Math.abs(mouse[0] - myposition[0]-112) 
        if(gap>=0){
            size = 140 - gap/8
            top = 90 -gap/8
        }
        return [gap,size,top]
    },[isinDock, mouse, myposition])
    return (
        <>
            <div 
            className={style.box} 
            style={isinDock?{
                width:`${size>=56?size:""}px`,
                height:`${size>=56?size:""}px`,
                transform:`translateY(${top>0?-top:""}px)`,
                transition:"all 0s "
                
            }:{top:0}}
            ref={boxref} 
            onClick={() => {
                wintype !== "isdefault" ? setwintype("isdefault") : setwintype("ismin")

            }}>
               {/* <span>{gap}/{top}</span> */}
                <Icon icon={iconSrc} myposition={myposition} />
                <NameTip name={name} isShow={isShow} />
                {wintype !== "isclosd" ? <div className={style.tippoint}></div> : null}
            </div>
            {
                wintype !== 'isclosd' ?
                    <>
                        <AppWin setwintype={setwintype} title={name} ctrl={
                            <Wincontrol
                                mystyle={wintype === "ismax" ? { display: "none", } : {}}
                                wintype={wintype}
                                onclosd={() => {
                                    setwintype("isclosd")
                                    setmovewin({ id: "", dx: 0, dy: 0, wleft: 0, wtop: 0 })
                                }}
                                onmax={() => {
                                    if (wintype === "ismax") {
                                        setwintype("isdefault")
                                        setTopBarState(true)
                                        return
                                    }
                                    setwintype("ismax")
                                    setmovewin({ id: "", dx: 0, dy: 0, wleft: 0, wtop: 0 })
                                    setTopBarState(false)
                                }}
                                onmin={() => {
                                    if (wintype === "ismax") {
                                        return
                                    }
                                    setwintype("ismin")
                                    setmovewin({ id: "", dx: 0, dy: 0, wleft: 0, wtop: 0 })
                                }}
                            />
                        }
                            wintype={wintype}
                            defalultsize={myposition}
                            moveid={name}>

                            .......................
                        </AppWin>
                    </>
                    : null
            }

        </>
    )
}


export default App