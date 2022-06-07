/* eslint-disable react/jsx-pascal-case */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useActiveWidow } from '../../hooks/usewindow';
import style from './index.module.scss';
import { apptype, 默认程序 } from './程序配置';

const 程序: React.FC<apptype> = ({ name, icon, date, time, src, type, click, mouseleft }) => {
    // const [apptop, setapptop] = useState(0)
    // const [appsize, setappsize] = useState(60)
    const [appcenter, setappcenter] = useState(0)
    const appref: any = useRef(name)
    const [size, top] = useMemo<[number, number]>(() => {
        let ressize = 60
        let restop = 0
        if (mouseleft && appcenter) {
            const appgap = Math.abs(mouseleft - appcenter)
            // app.innerHTML = `gap:${appgap} size:${50 + 100 - appgap} top:${120 - appgap}`
            if (appgap < 500) {
                // 尺寸 = 基础50 + 100/除以距离  越小越大
                const size = 60 + 140 - appgap / 1.5
                const top = 70 - appgap / 5
                if (size >= 60) {
                    ressize = size

                } else {
                    ressize = 60

                }
                if (top >= 0) {
                    restop = -top

                } else {
                    restop = 0

                }

            } else {
                ressize = 60
                restop = 0
            }
        }
        return [ressize, restop]
    }, [appcenter, mouseleft])
    useEffect(() => {
        const appdiv: HTMLDivElement = appref.current
        setappcenter(appdiv.offsetLeft + appdiv.offsetWidth / 2)
        let timeupdate: NodeJS.Timeout

        if (time) {
            const timebox: any = document.querySelector<HTMLDivElement>(`.${style.time}`)
            timeupdate = setInterval(() => {
                timebox.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()} `
            }, 1000)
        }
        return () => {
            clearInterval(timeupdate)
        }

    }, [mouseleft, time])




    return (
        <div
            className={style.app}
            ref={appref}
            onClick={click}
            style={{ width: `${size}px`, height: `${size}px`, top: `${top}px`, transition: `${mouseleft ? 'all 0s' : ""}` }}>
            <div className={style.icon}>
                {date ? <div className={style.date}>{new Date().getDate()}</div> : null}
                {time ? <div className={style.time}></div> : null}
                <img src={icon} alt={""} />
                <div className={style.tip}>{name}</div>
            </div>
        </div>
    )
}

const 程序坞: React.FC<{}> = () => {

    const dockref: any = useRef()
    const [apps,] = useState(默认程序)
    const [mouseleft, setmouseleft] = useState(0)
    const [active, setactive] = useActiveWidow()
    const openApp = useCallback((app: apptype) => {

        //窗口未打开,

        //窗口已打开,
        return () => {

        }
    }, [])
    useEffect(() => {
        const dock: HTMLDivElement = dockref.current

        dock.onmouseenter = (e) => {
            // const dockleft = dock.offsetLeft
            // const mousex = e.clientX - dockleft
            // setmouseleft(mousex)
            console.log('进入');


        }

        dock.onmousemove = e => {
            const dockleft = dock.offsetLeft
            const mousex = e.clientX - dockleft
            setmouseleft(mousex)
            // applist.forEach((app: HTMLDivElement) => {

            //     const appcenter = app.offsetLeft + app.offsetWidth / 2
            //     const appgap = Math.abs(mousex - appcenter)
            //     // app.innerHTML = `gap:${appgap} size:${50 + 100 - appgap} top:${120 - appgap}`
            //     if (appgap < 300) {
            //         // 尺寸 = 基础50 + 100/除以距离  越小越大
            //         const size = 50 + 120 - appgap / 1.3
            //         const top = 100 - appgap / 1.4
            //         if (size >= 50) {
            //             app.style.width = `${size}px`
            //             app.style.height = `${size}px`
            //         } else {
            //             app.style.width = ''
            //             app.style.height = ''
            //         }
            //         if (top >= 0) {
            //             app.style.top = `${-top}px`

            //         } else {
            //             app.style.top = ''
            //         }

            //     } else {
            //         clearStyle(app)
            //     }

            // })

        }

        dock.onmouseleave = e => {
            setmouseleft(0)
            // applist.forEach((app: HTMLDivElement) => {
            //     clearStyle(app)
            //     app.style.transition = ' '

            // })
        }
    }, [apps])
    return (
        <div className={style.box} ref={dockref} >
            <div className={style.space}></div>
            <div className={style.apps}>
                {apps.map((app, index) => {

                    return (
                        <程序
                            mouseleft={mouseleft}
                            key={app.name}
                            click={openApp(app)}
                            src={app.src}
                            type={app.type}
                            icon={app.icon}
                            time={app.time}
                            date={app.date}
                            name={app.name}

                        />
                    )
                })}
            </div>


        </div>
    )
}


export default 程序坞