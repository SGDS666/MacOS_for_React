import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilValue } from 'recoil'
import { appwinref } from '../store'
import style from './app.module.scss'

export const Icon: React.FC<{ icon: string }> = ({ icon }) => {
    return (
        <div className={style.iconbox}>
            <img src={icon} alt="error" />

        </div>
    )
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
    }> = ({ wintype, children, defalultsize }) => {
        const winref = useRecoilValue(appwinref)
        const sizeSet = useMemo(() => {
            return {
                ismax: { left: "0px", top: "0px", width: "100vw", height: "100vh" },
                ismin: {
                    width: "20px",
                    height: "10px",
                    left: `${defalultsize[0] + 10}px`,
                    top: `${defalultsize[1] - 60}px`,
                    borderTopRightRadius: "100%",
                    borderBottomRightRadius: "100%",
                    borderTopLeftRadius: "100%",
                    transform: "skew(50deg,-30deg)"
                },
                isdefault: {},
                isclosd: {}
            }
        }, [defalultsize])
        if (!winref) {
            return null
        }


        return createPortal(
            <div className={style.win} style={sizeSet[wintype]} >
                {wintype !== "ismin" && wintype !== "isclosd" ? children : null}
            </div>,
            winref
        )
    }

const Wincontrol: React.FC<{
    onclosd: () => void,
    onmin: () => void,
    onmax: () => void
}> = ({ onclosd, onmin, onmax }) => {
    return (
        <div className={style.winctrl}>
            <div className={style.closd} onClick={onclosd}>x</div>
            <div className={style.min} onClick={onmin}>-</div>
            <div className={style.max} onClick={onmax}>~</div>
        </div>
    )
}
const App: React.FC<{ iconSrc: string, name: string, baseleft: number }> = ({ iconSrc, name, baseleft }) => {
    const isShow = useMemo(() => {
        return true
    }, [])
    const boxref: any = useRef()
    const [myposition, setmypostion] = useState<[number, number]>([baseleft, window.outerHeight - 10])
    const [wintype, setwintype] = useState<"ismax" | "ismin" | "isdefault" | "isclosd">('ismin')
    useEffect(() => {
        const box: HTMLDivElement = boxref.current
        console.dir(box);
        setmypostion([baseleft + box.offsetLeft, window.outerHeight])
    }, [baseleft])
    return (
        <>
            <div className={style.box} ref={boxref} onClick={() => {
                wintype !== "isdefault" ?
                    setwintype("isdefault") : setwintype("ismin")
            }}>
                <Icon icon={iconSrc} />
                <NameTip name={name} isShow={isShow} />

            </div>
            {
                wintype !== 'isclosd' ?
                    <AppWin wintype={wintype} defalultsize={myposition}>
                        <Wincontrol
                            onclosd={() => { setwintype("isclosd") }}
                            onmax={() => { setwintype("ismax") }}
                            onmin={() => { setwintype("ismin") }}
                        />
                        {name}
                    </AppWin> : null
            }

        </>
    )
}


export default App